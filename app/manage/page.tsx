"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link2, Home, Clipboard, LogOut, X, Calendar, BarChart3, Archive, Trash2, Edit3, Save } from "lucide-react"
import { LinkService, LinkData } from "@/lib/api"
import { useState, useEffect } from "react"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"
import { format } from "date-fns";

export default function ManagePage() {
  const [selectedLink, setSelectedLink] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState<any>({})
    const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const [userLinks, setLinks] = useState<LinkData[]>([]);
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

  // Mock data for user's links
  // const userLinks = [
  //   {
  //     id: 1,
  //     originalUrl: "https://example.com/very-long-url-that-was-shortened-for-better-sharing",
  //     shortUrl: "https://short.ly/abc123",
  //     title: "Marketing Campaign Landing Page",
  //     status: "Active",
  //     clicks: 1247,
  //     views: 2156,
  //     created: "2024-01-15",
  //     lastModified: "2024-01-20",
  //     expirationDate: "2024-12-31",
  //     isPublic: true,
  //   },
  //   {
  //     id: 2,
  //     originalUrl: "https://docs.company.com/internal-documentation-system",
  //     shortUrl: "https://short.ly/def456",
  //     title: "Internal Documentation",
  //     status: "Active",
  //     clicks: 856,
  //     views: 1432,
  //     created: "2024-01-10",
  //     lastModified: "2024-01-18",
  //     expirationDate: "",
  //     isPublic: false,
  //   },
  //   {
  //     id: 3,
  //     originalUrl: "https://test-site.com/beta-feature-testing-environment",
  //     shortUrl: "https://short.ly/ghi789",
  //     title: "Beta Testing Environment",
  //     status: "Inactive",
  //     clicks: 234,
  //     views: 567,
  //     created: "2024-01-08",
  //     lastModified: "2024-01-15",
  //     expirationDate: "2024-01-25",
  //     isPublic: false,
  //   },
  // ]

  // const recentUpdates = [
  //   { type: "Link shortened", description: "User generated a short link", time: "4 hours ago", icon: Link2 },
  //   { type: "Link analytics", description: "User clicked a short link", time: "8 hours ago", icon: BarChart3 },
  //   { type: "Monthly report", description: "User viewed link stats", time: "1 day ago", icon: Calendar },
  // ]

  const handleEditLink = (link: any) => {
    setSelectedLink(link)
    setEditForm({ ...link })
    setIsEditing(true)
  }
  
  const handleSaveChanges = () => {
    try {
      const updated =  LinkService.updateLink(editForm.shortened!, editForm);

      console.log("Saved:", updated);

      setSelectedLink(updated);
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update the link.");
    }
  }

  const handleCloseModal = () => {
    setSelectedLink(null)
    setIsEditing(false)
    setEditForm({})
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        <div className="p-4">
          <div className="flex items-center mb-8">
            <Link2 className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-lg font-semibold text-white">LinkShortener</span>
          </div>

          <nav className="space-y-2">
            <Link
              href="/"
              className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Link>

            <Link
              href="/how-it-works"
              className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
            >
              <BarChart3 className="w-4 h-4 mr-3" />
              How it Works
            </Link>

            <Link
              href="/shorten"
              className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
            >
              <Clipboard className="w-4 h-4 mr-3" />
              Paste your link
            </Link>

            <div className="flex items-center px-3 py-2 text-white bg-blue-600 rounded-md">
              <BarChart3 className="w-4 h-4 mr-3" />
              Manage
            </div>

            <div className="px-3 py-4 border-t border-gray-700 mt-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Profile</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-medium">{user.first_name?.[0]?.toUpperCase()}{user.last_name?.[0]?.toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{user.first_name + ' ' + user.last_name}</p>
                    <p className="text-gray-400 text-xs">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors w-full text-left">
              <LogOut className="w-4 h-4 mr-3" />
              Log out
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Center Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Recent Updates */}
            {/* <Card className="bg-gray-800 border-gray-700 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Recent updates
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    ⋯
                  </Button>
                </CardTitle>
              </CardH3eader>
              <CardContent>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <update.icon className="w-4 h-4 text-gray-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{update.type}</p>
                        <p className="text-gray-400 text-xs">{update.description}</p>
                      </div>
                      <span className="text-gray-400 text-xs">{update.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* User Links */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Your Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userLinks.map((link) => (
                    <div key={link.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-white font-semibold">{link.title}</h3>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${link.status
                                ? "bg-green-900 text-green-300"
                                : link.status == false
                                  ? "bg-red-900 text-red-300"
                                  : "bg-gray-600 text-gray-300"
                              }`}
                          >
                            {link.status ? "Active" : "Inactive"}
                          </span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                          onClick={() => handleEditLink(link)}
                        >
                          <Edit3 className="w-4 h-4 mr-2" />
                          Manage
                        </Button>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-400">Short URL: </span>
                          <span className="text-blue-400 font-mono">{API_BASE_URL + '/links/redirect/' + link.shortened}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Original: </span>
                          <span className="text-gray-300 truncate block">{link.link}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-400">
                          <span>{link.click_count} clicks</span>
                          <span>{link.views} views</span>
                          <span>Created: {format(new Date(link.created_at), "dd MMM, yyyy hh:mm a")}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Link Management Modal */}
        {selectedLink && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 m-4 max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Link management</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Read-only URLs */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-white text-sm">Original URL (Read-only)</Label>
                    <Input
                      value={selectedLink.link}
                      readOnly
                      className="bg-gray-600 border-gray-500 text-gray-300 cursor-not-allowed mt-1"
                    />
                  </div>

                  <div>
                    <Label className="text-white text-sm">Short URL (Read-only)</Label>
                    <Input
                      value={API_BASE_URL + '/links/redirect/' + selectedLink.shortened}
                      readOnly
                      className="bg-gray-600 border-gray-500 text-gray-300 cursor-not-allowed mt-1"
                    />
                  </div>
                </div>

                {/* Editable Fields */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-white text-sm">Title</Label>
                    <Input
                      value={isEditing ? editForm.title : selectedLink.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      readOnly={!isEditing}
                      className={`mt-1 ${isEditing ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-600 border-gray-500 text-gray-300"}`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white text-sm">Status</Label>
                      <Select
                        value={isEditing ? editForm.status : selectedLink.status}
                        onValueChange={(value) => setEditForm({ ...editForm, status: value })}
                        disabled={!isEditing}
                      >
                        <SelectTrigger
                          className={`mt-1 ${isEditing ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-600 border-gray-500 text-gray-300"}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="1" className="text-white hover:bg-gray-600">
                            Active
                          </SelectItem>
                          <SelectItem value="0" className="text-white hover:bg-gray-600">
                            Inactive
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-white text-sm">Expiration Date</Label>
                    <Input
                      type="datetime-local"
                      value={isEditing ? editForm.expiring_at : selectedLink.expiring_at}
                      onChange={(e) => setEditForm({ ...editForm, expiring_at: e.target.value })}
                      readOnly={!isEditing}
                      className={`mt-1 ${isEditing ? "bg-gray-700 border-gray-600 text-white [color-scheme:dark]" : "bg-gray-600 border-gray-500 text-gray-300"}`}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                  {/* <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                    >
                      <Archive className="w-4 h-4 mr-2" />
                      Archive link
                    </Button>
                    <Button variant="outline" className="border-red-600 text-red-400 hover:bg-red-900 bg-transparent">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete link
                    </Button>
                  </div> */}

                  <div className="flex space-x-3">
                    {isEditing ? (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => setIsEditing(false)}
                          className="border-gray-600 text-gray-300 hover:bg-gray-600 bg-transparent"
                        >
                          Discard Changes
                        </Button>
                        <Button onClick={handleSaveChanges} className="bg-blue-600 text-white hover:bg-blue-700">
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </Button>
                      </>
                    ) : (
                      <Button onClick={() => setIsEditing(true)} className="bg-blue-600 text-white hover:bg-blue-700">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Link
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
