"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link2, Check } from "lucide-react"
import { useAuth } from "@/lib/auth"

export default function HomePage() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link2 className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold text-white">LinkShortener</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How it works
              </Link>
              <Link href="/purpose" className="text-gray-300 hover:text-white transition-colors">
                Security
              </Link>
            </nav>

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
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Shorten your links easily and quickly!
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Create short links effortlessly with our tool. Secure your links from unauthorized access with IP-based
                protection and advanced security features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Link href="/shorten">Get started</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                >
                  <Link href="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 flex items-center justify-center">
                <Link2 className="w-48 h-48 text-blue-400 opacity-80" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-700 border-gray-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Links secured</p>
                    <p className="text-3xl font-bold text-white">1.8M+</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Links shortened</p>
                    <p className="text-3xl font-bold text-white">2M+</p>
                  </div>
                  <Link2 className="w-12 h-12 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-700 border-gray-600 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Threats blocked</p>
                    <p className="text-3xl font-bold text-white">15K+</p>
                  </div>
                  <Check className="w-12 h-12 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Welcome : User</h3>
              <p className="text-gray-400">Simplifying your links</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/purpose" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:laxman.suthar.dev@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact: laxman.suthar.dev@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
