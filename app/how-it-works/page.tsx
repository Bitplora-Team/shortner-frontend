"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Link2,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Eye,
  Lock,
  CheckCircle,
  AlertTriangle,
  Users,
  Server,
  Zap,
} from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Paste Your URL",
      description: "Enter your long URL into our secure form. We support any valid web address.",
      icon: Link2,
      color: "text-blue-400",
      bgColor: "bg-blue-900",
    },
    {
      number: "02",
      title: "Configure Security",
      description: "Set up geographic restrictions, IP controls, and expiration dates for enhanced protection.",
      icon: Shield,
      color: "text-green-400",
      bgColor: "bg-green-900",
    },
    {
      number: "03",
      title: "Generate Short Link",
      description: "Our system creates a unique, secure short link with all your security settings applied.",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "bg-yellow-900",
    },
    {
      number: "04",
      title: "Share & Monitor",
      description: "Share your secure link and monitor access attempts through our analytics dashboard.",
      icon: Eye,
      color: "text-purple-400",
      bgColor: "bg-purple-900",
    },
  ]

  const securityChecks = [
    {
      title: "Geographic Validation",
      description: "Checks visitor's country and continent against your allowed/blocked lists",
      icon: Globe,
      status: "active",
      details: [
        "Real-time IP geolocation lookup",
        "Country-level access control",
        "Continent-based restrictions",
        "VPN/Proxy detection",
      ],
    },
    {
      title: "IP Address Filtering",
      description: "Validates visitor IP addresses against your whitelist and blacklist",
      icon: Server,
      status: "active",
      details: ["Exact IP matching", "CIDR range support", "Dynamic IP handling", "Corporate network detection"],
    },
    {
      title: "Time-Based Access",
      description: "Enforces link expiration dates and time-based access controls",
      icon: Clock,
      status: "active",
      details: [
        "Automatic link expiration",
        "Timezone-aware validation",
        "Grace period handling",
        "Scheduled activation",
      ],
    },
    {
      title: "User Authentication",
      description: "Verifies user identity and authorization levels before granting access",
      icon: Users,
      status: "active",
      details: [
        "Multi-factor authentication",
        "Role-based access control",
        "Session management",
        "Account verification",
      ],
    },
    {
      title: "Threat Detection",
      description: "Monitors for suspicious activity and potential security threats",
      icon: AlertTriangle,
      status: "monitoring",
      details: [
        "Bot detection algorithms",
        "Rate limiting protection",
        "Suspicious pattern analysis",
        "Real-time threat intelligence",
      ],
    },
    {
      title: "Data Encryption",
      description: "Ensures all data transmission and storage uses enterprise-grade encryption",
      icon: Lock,
      status: "active",
      details: [
        "256-bit SSL/TLS encryption",
        "End-to-end data protection",
        "Encrypted database storage",
        "Secure key management",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How LinkShortener Works</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our advanced security features protect your links while providing seamless access control
          </p>
          <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            <Link href="/shorten">
              Start Shortening Links
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple 4-Step Process</h2>
            <p className="text-lg text-gray-300">Create secure, monitored short links in just a few clicks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 relative">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Checks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Checks</h2>
            <p className="text-lg text-gray-300">Every link access is validated through multiple security layers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityChecks.map((check, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${check.status === "active" ? "bg-green-900" : "bg-yellow-900"} rounded-full flex items-center justify-center`}
                    >
                      <check.icon
                        className={`w-6 h-6 ${check.status === "active" ? "text-green-400" : "text-yellow-400"}`}
                      />
                    </div>
                    <div className="flex items-center">
                      {check.status === "active" ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Eye className="w-5 h-5 text-yellow-400" />
                      )}
                      <span
                        className={`ml-2 text-xs font-medium ${check.status === "active" ? "text-green-400" : "text-yellow-400"}`}
                      >
                        {check.status === "active" ? "ACTIVE" : "MONITORING"}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg mb-2">{check.title}</CardTitle>
                  <p className="text-gray-300 text-sm">{check.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {check.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Flow Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Security Validation Flow</h2>
            <p className="text-lg text-gray-300">See how each request is processed through our security pipeline</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-8 border border-gray-600">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">User Clicks Short Link</h3>
                  <p className="text-gray-300 text-sm">Initial request received with visitor information</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
              </div>

              {/* Step 2 */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">Geographic Validation</h3>
                  <p className="text-gray-300 text-sm">Check country/continent against access rules</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
              </div>

              {/* Step 3 */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">IP Address Check</h3>
                  <p className="text-gray-300 text-sm">Validate against whitelist/blacklist rules</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
              </div>

              {/* Step 4 */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">Time & Expiration Check</h3>
                  <p className="text-gray-300 text-sm">Verify link is still active and within time bounds</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
              </div>

              {/* Step 5 */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">Threat Detection</h3>
                  <p className="text-gray-300 text-sm">Scan for bots, suspicious patterns, and threats</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-4" />
              </div>

              {/* Final Step */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">Access Granted</h3>
                  <p className="text-gray-300 text-sm">Redirect to original URL and log analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Links?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Start creating secure, monitored short links with advanced access controls
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/shorten">
                Create Secure Link
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
            >
              <Link href="/purpose">Learn About Security</Link>
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
    </div>
  )
}
