"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, Globe, ArrowRight } from "lucide-react"

export default function PurposePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Purpose</h1>
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left Side - Network Security Diagram */}
          <div className="bg-gray-700 p-8 flex items-center justify-center">
            <div className="max-w-md">
              <img
                src="/images/network-security.png"
                alt="Network Security Infrastructure"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg">
                <p className="text-sm leading-relaxed">
                  Users can paste their links into the dedicated field to generate a short code. The visually appealing
                  UI ensures a seamless experience for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content Sections */}
          <div className="flex flex-col">
            {/* Top Section - Service Description */}
            <div className="bg-gray-800 text-white p-8 flex-1 flex items-center">
              <div className="max-w-md">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400 mr-2" />
                  <h2 className="text-xl font-semibold">Secure Link Management</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  LinkShortener Home is designed for users to effortlessly log in or create an account. The homepage is
                  clean and intuitive, featuring prominent buttons for easy access to login and registration.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Lock className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-sm text-gray-300">End-to-End Security</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-400 mr-1" />
                    <span className="text-sm text-gray-300">User Authorization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Security Chains Image */}
            <div className="bg-gray-600 p-8 flex-1 flex items-center justify-center">
              <div className="max-w-md">
                <img
                  src="/images/black-vinyl-mini-chain-link.jpg"
                  alt="Security Chain Links"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-white font-semibold mb-2">Authorize Your Recipients</h3>
                  <p className="text-gray-300 text-sm">
                    Control who can access your links with advanced security features and recipient authorization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Features Section */}
        <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Features</h2>
              <p className="text-gray-300 text-lg">
                Protect your links with enterprise-grade security and authorization controls
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Geographic Control</h3>
                <p className="text-gray-300 text-sm">
                  Restrict access by country, continent, or specific regions to ensure your content reaches the right
                  audience.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                <div className="w-12 h-12 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">IP Authorization</h3>
                <p className="text-gray-300 text-sm">
                  Control access with IP whitelisting and blacklisting to authorize specific users and block threats.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-700 rounded-lg border border-gray-600">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Time-Based Security</h3>
                <p className="text-gray-300 text-sm">
                  Set expiration dates and time-based access controls to automatically secure your links over time.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/shorten">
                  Start Securing Your Links
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Security Compliance Section */}
        
        {/* Footer */}
        <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-4">Welcome : User</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/shorten" className="text-blue-400 hover:text-blue-300 text-sm">
                      Shorten your link
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/how-it-works" className="text-blue-400 hover:text-blue-300 text-sm">
                      How it Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/purpose" className="text-blue-400 hover:text-blue-300 text-sm">
                      Security Features
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:laxman.suthar.dev@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm">
                      Contact: laxman.suthar.dev@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
