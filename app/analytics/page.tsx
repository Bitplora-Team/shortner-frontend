"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, ArrowLeft, BarChart3, Eye, MousePointer, Globe, Calendar, TrendingUp } from "lucide-react"

export default function AnalyticsPage() {
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Link Analytics</h1>
          <p className="text-gray-300">Detailed insights and performance metrics for your short links</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Clicks</p>
                  <p className="text-3xl font-bold text-white">1,247</p>
                </div>
                <MousePointer className="w-12 h-12 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Views</p>
                  <p className="text-3xl font-bold text-white">2,156</p>
                </div>
                <Eye className="w-12 h-12 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Countries</p>
                  <p className="text-3xl font-bold text-white">23</p>
                </div>
                <Globe className="w-12 h-12 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Growth</p>
                  <p className="text-3xl font-bold text-white">+12%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                Click Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Click analytics chart would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                Geographic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Geographic distribution map would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-purple-400" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "2 hours ago", action: "Link clicked from United States", ip: "192.168.1.1" },
                { time: "4 hours ago", action: "Link clicked from Canada", ip: "10.0.0.1" },
                { time: "6 hours ago", action: "Link clicked from United Kingdom", ip: "172.16.0.1" },
                { time: "8 hours ago", action: "Link clicked from Germany", ip: "192.168.2.1" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <p className="text-white text-sm">{activity.action}</p>
                    <p className="text-gray-400 text-xs">IP: {activity.ip}</p>
                  </div>
                  <span className="text-gray-400 text-xs">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
