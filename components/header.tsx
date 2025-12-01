"use client"

import Link from "next/link"
import { useAuth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Link2 } from "lucide-react"

export default function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link2 className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-white">LinkShortener</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white">How it works</Link>
            <Link href="/purpose" className="text-gray-300 hover:text-white">Purpose</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button asChild variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
              <Link href="/shorten">Try Now</Link>
            </Button>
            {user ? (
              <div className="flex items-center space-x-4">

                <span className="text-gray-300">Welcome, {user.firstName}</span>

                <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>

                <Button
                  onClick={logout}
                  variant="outline"
                  className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                >
                  Logout
                </Button>
              </div>
            ) : (

              <Button asChild variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header >
  )
}
