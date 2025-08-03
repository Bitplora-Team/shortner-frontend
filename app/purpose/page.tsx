"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Users, Globe, ArrowRight } from "lucide-react"

export default function PurposePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How it works
                </Link>
                <Link href="/purpose" className="text-white">
                  Security
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/shorten">Get Started</Link>
              </Button>

              {/* Nice work notification */}
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Nice work!</div>
            </div>
          </div>
        </div>
      </header>

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
        <section className="bg-gray-700 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Security Compliance & Certifications</h2>
              <p className="text-gray-300 text-lg">
                Trusted by enterprises worldwide with industry-leading security standards
              </p>
            </div>

            {/* Compliance Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
              {/* SOC 2 Type II */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white text-sm text-center">SOC 2 Type II</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Certified</p>
              </div>

              {/* ISO 27001 */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mb-3">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-semibold text-white text-sm text-center">ISO 27001</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Certified</p>
              </div>

              {/* GDPR Compliant */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white text-sm text-center">GDPR</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Compliant</p>
              </div>

              {/* CCPA Compliant */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-900 rounded-full flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-semibold text-white text-sm text-center">CCPA</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Compliant</p>
              </div>

              {/* PCI DSS */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-red-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PCI</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm text-center">PCI DSS</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Level 1</p>
              </div>

              {/* HIPAA */}
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-teal-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">H</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm text-center">HIPAA</h3>
                <p className="text-xs text-gray-400 text-center mt-1">Compliant</p>
              </div>
            </div>

            {/* Security Features List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">256-bit SSL Encryption</h4>
                  <p className="text-gray-300 text-xs mt-1">End-to-end encryption for all data transmission</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Multi-Factor Authentication</h4>
                  <p className="text-gray-300 text-xs mt-1">Additional security layer for account protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Regular Security Audits</h4>
                  <p className="text-gray-300 text-xs mt-1">
                    Third-party penetration testing and vulnerability assessments
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Data Residency Controls</h4>
                  <p className="text-gray-300 text-xs mt-1">Choose where your data is stored and processed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">24/7 Security Monitoring</h4>
                  <p className="text-gray-300 text-xs mt-1">Real-time threat detection and incident response</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Zero Trust Architecture</h4>
                  <p className="text-gray-300 text-xs mt-1">Never trust, always verify security model</p>
                </div>
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                  <div className="text-sm text-gray-300">Security Breaches</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">500K+</div>
                  <div className="text-sm text-gray-300">Enterprise Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Security Support</div>
                </div>
              </div>
            </div>

            {/* Security Contact */}
            <div className="text-center mt-8">
              <p className="text-gray-300 text-sm mb-4">
                Questions about our security practices? Our security team is here to help.
              </p>
              <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700 bg-transparent">
                <a href="mailto:laxman.suthar.dev@gmail.com">Contact Security Team</a>
              </Button>
            </div>
          </div>
        </section>

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
