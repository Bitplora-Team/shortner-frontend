"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { extractUserInfoFromGoogle } from "./google-jwt"


interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  provider: "google" | "email"
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  loginWithGoogle: (credential: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing token on mount
    const storedToken = localStorage.getItem("access_token")
    const storedUser = localStorage.getItem("auth_user")

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName: "", // Send empty for login
          lastName: "", // Send empty for login
        }),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      const { access, refresh, user: userData } = data

      localStorage.setItem("access_token", access)
      localStorage.setItem("refresh_token", refresh)
      localStorage.setItem("auth_user", JSON.stringify(userData))

      setToken(access)
      setUser(userData)
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

const signup = async (email: string, password: string, firstName: string, lastName: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    });

    // Check for 201 Created
    if (response.status === 201) {
      // Auto-login using same credentials
      await login(email, password);
      return; // Done after login
    }

    // Handle other error status codes
    if (!response.ok) {
      throw new Error("Signup failed");
    }
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};


  const loginWithGoogle = async (credential: string) => {
    try {
      // Extract user info from Google JWT
      const { email, firstName, lastName } = extractUserInfoFromGoogle(credential)

      console.log("Sending to backend:", { email, firstName, lastName }) // For debugging

      const response = await fetch(`${API_BASE_URL}/one-tap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        console.error("Backend error:", errorData)
        throw new Error("Google login failed")
      }

      const data = await response.json()
      console.log("Backend response:", data) // For debugging

      const { accessToken, refreshToken, user: userData } = data

      localStorage.setItem("access_token", accessToken)
      localStorage.setItem("refresh_token", refreshToken)
      localStorage.setItem("auth_user", JSON.stringify(userData))

      setToken(accessToken)
      setUser(userData)
    } catch (error) {
      console.error("Google login error:", error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("auth_user")
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        signup,
        loginWithGoogle,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// API helper with auth and token refresh
export async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const accessToken = localStorage.getItem("access_token")
  const refreshToken = localStorage.getItem("refresh_token")

  const makeRequest = async (token: string) => {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    }

    return fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    })
  }

  let response = await makeRequest(accessToken || "")

  // If access token expired, try to refresh
  if (response.status === 401 && refreshToken) {
    try {
      const refreshResponse = await fetch(`${API_BASE_URL}/api/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      })

      if (refreshResponse.ok) {
        const { accessToken: newAccessToken } = await refreshResponse.json()
        localStorage.setItem("access_token", newAccessToken)

        // Retry the original request with new token
        response = await makeRequest(newAccessToken)
      } else {
        // Refresh failed, logout user
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        localStorage.removeItem("auth_user")
        window.location.href = "/auth"
        return
      }
    } catch (error) {
      // Refresh failed, logout user
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      localStorage.removeItem("auth_user")
      window.location.href = "/auth"
      return
    }
  } else if (response.status === 401) {
    // No refresh token available, logout user
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("auth_user")
    window.location.href = "/auth"
    return
  }

  return response
}
