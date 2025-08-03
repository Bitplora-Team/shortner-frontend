interface GoogleJWTPayload {
  iss: string
  azp: string
  aud: string
  sub: string
  email: string
  email_verified: boolean
  name: string
  picture: string
  given_name: string
  family_name: string
  locale: string
  iat: number
  exp: number
}

export function decodeGoogleJWT(credential: string): GoogleJWTPayload {
  try {
    // JWT has 3 parts separated by dots
    const parts = credential.split(".")
    if (parts.length !== 3) {
      throw new Error("Invalid JWT format")
    }

    // Decode the payload (second part)
    const payload = parts[1]

    // Add padding if needed for base64 decoding
    const paddedPayload = payload + "=".repeat((4 - (payload.length % 4)) % 4)

    // Decode base64
    const decodedPayload = atob(paddedPayload.replace(/-/g, "+").replace(/_/g, "/"))

    // Parse JSON
    return JSON.parse(decodedPayload)
  } catch (error) {
    console.error("Error decoding Google JWT:", error)
    throw new Error("Failed to decode Google credential")
  }
}

export function extractUserInfoFromGoogle(credential: string) {
  const payload = decodeGoogleJWT(credential)

  return {
    email: payload.email,
    firstName: payload.given_name || "",
    lastName: payload.family_name || "",
    name: payload.name,
    picture: payload.picture,
    emailVerified: payload.email_verified,
  }
}
