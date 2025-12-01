"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, BarChart3, Eye, MousePointer, Calendar, Copy, ExternalLink, Settings, Trash2 } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/lib/auth"
import { LinkService, LinkData } from "@/lib/api"
import { useState, useEffect } from "react"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"
import { format } from "date-fns";

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const [links, setLinks] = useState<LinkData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLinks = async () => {
      try {
        const data = await LinkService.getUserLinks();
        setLinks(data);
      } catch (err) {
        console.error("Error fetching user links:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserLinks();
  }, []);

  const totalClicks = links?.reduce((acc, cur) => acc + (cur?.click_count || 0), 0);
  const totalViews = links?.reduce((acc, cur) => acc + (cur?.views || 0), 0);


  const handleDelete = async (shortened: string) => {
    if (!confirm("Are you sure you want to delete this link?")) return;

    try {
      await LinkService.deleteLink(shortened);
      setLinks((prev) => prev.filter((link) => link.shortened !== shortened)); // remove from UI
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete link.");
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Link2 className="h-8 w-8 text-blue-400 mr-2" />
                  <span className="text-xl font-bold text-white">Home</span>
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

              <div className="flex items-center space-x-4">
                <span className="text-gray-300">
                  Welcome, {user?.firstName} {user?.lastName}
                </span>
                <Link href="/shorten">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    <Link2 className="w-4 h-4 mr-2" />
                    Shorten New Link
                  </Button>
                </Link>
                <Button
                  onClick={logout}
                  variant="outline"
                  className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-gray-300">Manage and track your shortened links</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Total Links</p>
                    <p className="text-3xl font-bold text-white">{links.length}</p>
                  </div>
                  <Link2 className="w-12 h-12 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Total Clicks</p>
                    <p className="text-3xl font-bold text-white">{totalClicks}</p>
                  </div>
                  <MousePointer className="w-12 h-12 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Total Views</p>
                    <p className="text-3xl font-bold text-white">{totalViews}</p>
                  </div>
                  <Eye className="w-12 h-12 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Links Table */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                Your Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {links.map((link) => (
                  <div key={link.link} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-blue-400">{link.shortened}</span>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${link.status === true ? "bg-green-900 text-green-300" : "bg-red-900 text-red-300"
                              }`}
                          >
                            {link.status ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 truncate" title={link.link}>
                          {link.originalUrl}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(link.created_at), "dd MMM, yyyy hh:mm a")}
                          </span>
                          <span className="flex items-center gap-1">
                            <MousePointer className="w-3 h-3" />
                            {link.click_count} clicks
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {link.views} views
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                          onClick={() => navigator.clipboard.writeText(API_BASE_URL + '/links/redirect/' + link.shortened)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                        >
                          <a href={API_BASE_URL + '/links/redirect/' + link.shortened} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                        >
                          <Link href="/manage">
                            <Settings className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent" onClick={() => handleDelete(link.shortened)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </ProtectedRoute>
  )
}
