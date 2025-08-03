"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link2, Mail, Lock, User, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/lib/auth"
import { extractUserInfoFromGoogle } from "@/lib/google-jwt"
import { AuthDebug } from "@/components/auth-debug"

declare global {
  interface Window {
    google: any
  }
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })

  const { login, signup, loginWithGoogle, user } = useAuth()
  const router = useRouter()

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  // Load Google One Tap script
  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script")
      script.src = "https://accounts.google.com/gsi/client"
      script.async = true
      script.defer = true
      script.onload = initializeGoogleOneTap
      document.head.appendChild(script)
    }

    const initializeGoogleOneTap = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
          auto_select: false,
          cancel_on_tap_outside: false,
        })

        window.google.accounts.id.renderButton(document.getElementById("google-signin-button"), {
          theme: "filled_blue",
          size: "large",
          width: "100%",
          text: isLogin ? "signin_with" : "signup_with",
        })

        // Show One Tap prompt
        window.google.accounts.id.prompt()
      }
    }

    loadGoogleScript()
  }, [isLogin])

  const handleGoogleResponse = async (response: any) => {
    try {
      setLoading(true)
      setError("")

      // Extract user info from Google JWT
      const userInfo = extractUserInfoFromGoogle(response.credential)
      console.log("Google user info:", userInfo) // For debugging

      await loginWithGoogle(response.credential)
      router.push("/dashboard")
    } catch (err) {
      console.error("Google auth error:", err)
      setError("Google authentication failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (isLogin) {
        await login(formData.email, formData.password)
      } else {
        await signup(formData.email, formData.password, formData.firstName, formData.lastName)
      }
      router.push("/dashboard")
    } catch (err) {
      setError(isLogin ? "Invalid email or password" : "Account creation failed")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <Link2 className="h-10 w-10 text-blue-400 mr-3" />
            <span className="text-2xl font-bold text-white">LinkShortener</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">{isLogin ? "Welcome back" : "Create account"}</h1>
          <p className="text-gray-300">{isLogin ? "Sign in to your account" : "Sign up to get started"}</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 shadow-2xl">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-white text-center">{isLogin ? "Sign In" : "Sign Up"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Google One Tap Button */}
            <div className="space-y-4">
              <div id="google-signin-button" className="w-full" />

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800 text-gray-400">Or continue with email</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/20 border border-red-900/50 text-red-400 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required={!isLogin}
                        className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="pl-10 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded"
                    />
                    <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="text-center">
              <p className="text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setError("")
                    setFormData({ email: "", password: "", firstName: "", lastName: "" })
                  }}
                  className="ml-2 text-blue-400 hover:text-blue-300 font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <AuthDebug />
    </div>
  )
}
