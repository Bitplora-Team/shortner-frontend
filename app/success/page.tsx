"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link2, Copy, Check, ExternalLink, BarChart3, Settings } from "lucide-react"

export default function SuccessPage() {
  const [shortLink] = useState("https://short.ly/abc123") // This would come from the form submission
  const [originalUrl] = useState("https://example.com/very-long-url-that-was-shortened")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Header */}
      <header className="relative z-10 bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-sm">Welcome : User</span>
            </div>

            <div className="flex items-center">
              <Link2 className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold text-white mr-8">LinkShortener</span>
            </div>

            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm">
                Features
              </Link>
              <Link href="/purpose" className="text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm">
                My Account
              </Link>
              <Link href="/shorten" className="text-gray-300 hover:text-white transition-colors text-sm">
                Shorten Link
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 shadow-2xl">
          <CardContent className="p-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center">
                <Link2 className="w-10 h-10 text-green-400" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-white mb-4">Your link has been shortened!</h1>
            <p className="text-gray-300 mb-8 text-lg">Your short link is ready to use.</p>

            {/* Link Display and Copy */}
            <div className="space-y-6 mb-8">
              {/* Original URL */}
              <div className="text-left">
                <label className="block text-sm font-medium text-white mb-2">Original URL:</label>
                <div className="p-3 bg-gray-700 rounded-md border border-gray-600">
                  <p className="text-sm text-gray-300 truncate" title={originalUrl}>
                    {originalUrl}
                  </p>
                </div>
              </div>

              {/* Shortened URL */}
              <div className="text-left">
                <label className="block text-sm font-medium text-white mb-2">Shortened URL:</label>
                <div className="flex gap-2">
                  <Input value={shortLink} readOnly className="bg-gray-700 border-gray-600 text-white font-mono" />
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="px-4 border-gray-600 hover:bg-gray-700 bg-transparent text-white"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-4 border-gray-600 hover:bg-gray-700 bg-transparent text-white"
                  >
                    <a href={shortLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                {copied && <p className="text-sm text-green-400 mt-2">Link copied to clipboard!</p>}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/dashboard">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Go to Dashboard
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 hover:bg-gray-700 bg-transparent text-white"
              >
                <Link href="/shorten">
                  <Link2 className="w-4 h-4 mr-2" />
                  Shorten Another Link
                </Link>
              </Button>
            </div>

            {/* Additional Options */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-sm text-gray-400 mb-4">Want to customize your link or view analytics?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/customize">
                    <Settings className="w-4 h-4 mr-2" />
                    Customize Link
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700">
                  <Link href="/analytics">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
