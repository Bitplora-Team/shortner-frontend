"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link2, ArrowLeft, Settings, Palette, Type, Globe } from "lucide-react"

export default function CustomizePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Link2 className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">LinkShortener</span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How it works
              </Link>
              <Link href="/purpose" className="text-gray-300 hover:text-white transition-colors">
                Security
              </Link>
            </nav>

            <Link href="/success" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Customize Your Link</h1>
          <p className="text-lg text-gray-300">Personalize your short link with custom aliases and branding</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Link Customization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="custom-alias" className="text-white flex items-center">
                <Type className="w-4 h-4 mr-2 text-green-400" />
                Custom Alias
              </Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-600 bg-gray-700 text-gray-300 text-sm">
                  https://short.ly/
                </span>
                <Input
                  id="custom-alias"
                  placeholder="my-custom-link"
                  className="rounded-l-none bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <p className="text-xs text-gray-400">Create a memorable custom alias for your link</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="link-title" className="text-white flex items-center">
                <Palette className="w-4 h-4 mr-2 text-purple-400" />
                Link Title
              </Label>
              <Input
                id="link-title"
                placeholder="My Awesome Link"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <p className="text-xs text-gray-400">Add a descriptive title for your link</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-white flex items-center">
                <Globe className="w-4 h-4 mr-2 text-yellow-400" />
                Description
              </Label>
              <Input
                id="description"
                placeholder="Brief description of your link"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <p className="text-xs text-gray-400">Optional description for better organization</p>
            </div>

            <div className="flex justify-center pt-6">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8">Save Customization</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
