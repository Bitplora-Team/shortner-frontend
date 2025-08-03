"use client"

import { useAuth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuthDebug() {
  const { user, token } = useAuth()

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <Card className="bg-gray-800 border-gray-700 mt-4">
      <CardHeader>
        <CardTitle className="text-white text-sm">Debug Info (Dev Only)</CardTitle>
      </CardHeader>
      <CardContent className="text-xs">
        <div className="space-y-2">
          <div>
            <span className="text-gray-400">Access Token:</span>
            <p className="text-white font-mono break-all">{token ? `${token.substring(0, 50)}...` : "None"}</p>
          </div>
          <div>
            <span className="text-gray-400">Refresh Token:</span>
            <p className="text-white font-mono break-all">
              {typeof window !== "undefined" && localStorage.getItem("refresh_token")
                ? `${localStorage.getItem("refresh_token")?.substring(0, 50)}...`
                : "None"}
            </p>
          </div>
          <div>
            <span className="text-gray-400">User Data:</span>
            <pre className="text-white bg-gray-900 p-2 rounded mt-1 overflow-auto">{JSON.stringify(user, null, 2)}</pre>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
