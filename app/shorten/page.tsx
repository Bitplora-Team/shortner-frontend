"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Link2, ArrowLeft, Shield, Globe, Clock, MapPin, X, Check } from "lucide-react"
import { LinkService } from "@/lib/api"

export default function ShortenPage() {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")
  const [wantSecurity, setWantSecurity] = useState(false)
  const [accessibleCountries, setAccessibleCountries] = useState<string[]>([])
  const [restrictedCountries, setRestrictedCountries] = useState<string[]>([])
  const [accessibleContinents, setAccessibleContinents] = useState<string[]>([])
  const [restrictedContinents, setRestrictedContinents] = useState<string[]>([])
  const [accessibleIPs, setAccessibleIPs] = useState("")
  const [restrictedIPs, setRestrictedIPs] = useState("")
  const [expirationDateTime, setExpirationDateTime] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const linkData = {
      link: url,
      title,
      accessibleCountries,
      restrictedCountries,
      accessibleContinents,
      restrictedContinents,
      accessibleIPs,
      restrictedIPs,
      expirationDateTime: expirationDateTime ? new Date(expirationDateTime).toISOString() : undefined,
    };

    try {
      const createdLink = await LinkService.createLink(linkData);
      console.log("Created:", createdLink);
      localStorage.setItem("shortened_link", JSON.stringify(createdLink.shortened));
      // ✅ Redirect after success
      window.location.href = "/success";
    } catch (err) {
      console.error("Error creating link:", err);
      alert("Failed to create link. Please try again.");
    }
  };

  // Get current datetime in the format required by datetime-local input
  const getCurrentDateTime = () => {
    const now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    return now.toISOString().slice(0, 16)
  }

  const countries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" },
    { name: "Bolivia", code: "BO" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Brazil", code: "BR" },
    { name: "Bulgaria", code: "BG" },
    { name: "Cambodia", code: "KH" },
    { name: "Canada", code: "CA" },
    { name: "Chile", code: "CL" },
    { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" },
    { name: "Croatia", code: "HR" },
    { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" },
    { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" },
    { name: "Estonia", code: "EE" },
    { name: "Finland", code: "FI" },
    { name: "France", code: "FR" },
    { name: "Georgia", code: "GE" },
    { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" },
    { name: "Greece", code: "GR" },
    { name: "Hungary", code: "HU" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" },
    { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kenya", code: "KE" },
    { name: "Kuwait", code: "KW" },
    { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" },
    { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" },
    { name: "Malaysia", code: "MY" },
    { name: "Mexico", code: "MX" },
    { name: "Morocco", code: "MA" },
    { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" },
    { name: "Nigeria", code: "NG" },
    { name: "Norway", code: "NO" },
    { name: "Pakistan", code: "PK" },
    { name: "Peru", code: "PE" },
    { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" },
    { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" },
    { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Singapore", code: "SG" },
    { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" },
    { name: "South Africa", code: "ZA" },
    { name: "South Korea", code: "KR" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "Switzerland", code: "CH" },
    { name: "Thailand", code: "TH" },
    { name: "Turkey", code: "TR" },
    { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
    { name: "Uruguay", code: "UY" },
    { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" },
  ]

  const continents = [
    { name: "North America", code: "NA" },
    { name: "South America", code: "SA" },
    { name: "Europe", code: "EU" },
    { name: "Asia", code: "AS" },
    { name: "Africa", code: "AF" },
    { name: "Australia", code: "OC" },
    { name: "Antarctica", code: "AN" },
  ]

  // Function to handle IP input with automatic comma formatting
  const handleIPInput = (value: string, setter: (value: string) => void) => {
    // Remove any trailing commas and spaces for processing
    const cleanValue = value.replace(/,\s*$/, "")

    // Split by commas or newlines to get individual IPs
    const ips = cleanValue
      .split(/[,\n]+/)
      .map((ip) => ip.trim())
      .filter((ip) => ip.length > 0)

    // Join with commas and add trailing comma if there are IPs and the last character isn't already a comma
    let formattedValue = ips.join(", ")
    if (formattedValue && !value.endsWith(",") && !value.endsWith(", ")) {
      formattedValue += ", "
    }

    setter(formattedValue)
  }

  // Custom Checkbox Component for MultiSelect
  const CustomCheckbox = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
    return (
      <div
        className={`w-4 h-4 rounded border-2 flex items-center justify-center cursor-pointer transition-all duration-200 ${checked ? "bg-blue-600 border-blue-600 text-white" : "border-gray-400 hover:border-blue-400 bg-transparent"
          }`}
        onClick={(e) => {
          e.stopPropagation()
          onChange()
        }}
      >
        {checked && <Check className="w-3 h-3" strokeWidth={3} />}
      </div>
    )
  }

  const MultiSelect = ({
    options,
    selected,
    onChange,
    placeholder,
  }: {
    options: { name: string; code: string }[]
    selected: string[]
    onChange: (values: string[]) => void
    placeholder: string
  }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredOptions = options.filter((option) => option.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const toggleOption = (option: { name: string; code: string }) => {
      const value = option.code
      if (selected.includes(value)) {
        onChange(selected.filter((item) => item !== value))
      } else {
        onChange([...selected, value])
      }
    }

    const removeOption = (optionValue: string) => {
      onChange(selected.filter((item) => item !== optionValue))
    }

    const handleClose = () => {
      setIsOpen(false)
      setSearchTerm("")
    }

    return (
      <div className="relative">
        <div
          className="flex min-h-10 w-full items-center justify-between rounded-md border border-gray-500 bg-gray-600 px-3 py-2 text-sm text-white cursor-pointer hover:border-gray-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selected.length === 0 ? (
              <span className="text-gray-400">{placeholder}</span>
            ) : (
              selected.map((item) => {
                // Find the display name by code
                const displayName = options.find((option) => option.code === item)?.name || item

                return (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1 rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700 transition-colors"
                  >
                    {displayName}
                    <X
                      className="h-3 w-3 cursor-pointer hover:text-gray-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeOption(item)
                      }}
                    />
                  </span>
                )
              })
            )}
          </div>
          <div className={`text-gray-400 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</div>
        </div>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={handleClose} />

            {/* Dropdown */}
            <div className="absolute z-50 mt-1 w-full rounded-md border border-gray-500 bg-gray-600 shadow-xl">
              {/* Search Input */}
              <div className="p-3 border-b border-gray-500">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                />
              </div>

              {/* Options List */}
              <div className="max-h-48 overflow-auto">
                {filteredOptions.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-gray-400 text-center">No results found</div>
                ) : (
                  filteredOptions.map((option) => (
                    <div
                      key={option.code}
                      className={`cursor-pointer px-4 py-3 text-sm text-white hover:bg-gray-500 transition-colors ${selected.includes(option.code) ? "bg-gray-500" : ""
                        }`}
                      onClick={() => toggleOption(option)}
                    >
                      <div className="flex items-center gap-3">
                        <CustomCheckbox
                          checked={selected.includes(option.code)}
                          onChange={() => toggleOption(option)}
                        />
                        <span className="flex-1">{`${option.name} (${option.code})`}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer with selection count */}
              {selected.length > 0 && (
                <div className="px-4 py-2 border-t border-gray-500 bg-gray-700">
                  <span className="text-xs text-gray-300">{selected.length} selected</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Shorten & Secure Your Link</h1>
          <p className="text-lg text-gray-300">Create a shortened link with advanced security options</p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Link2 className="w-5 h-5 mr-2 text-blue-400" />
              URL Shortener Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* URL Input */}
              <div className="space-y-2">
                <Label htmlFor="url" className="text-white">
                  Enter your URL *
                </Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com/your-long-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              {/* Security Option */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="security"
                  checked={wantSecurity}
                  onCheckedChange={(checked) => setWantSecurity(checked as boolean)}
                  className="border-gray-600"
                />
                <Label htmlFor="security" className="text-white flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />I want to secure this link
                </Label>
              </div>

              {/* Security Options - Conditional */}
              {wantSecurity && (
                <div className="space-y-6 p-6 bg-gray-700 rounded-lg border border-gray-600">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Security Settings
                  </h3>

                  {/* Title Field */}
                  <div className="space-y-2">
                    <Label htmlFor="link-title" className="text-white">
                      Link Title (Optional)
                    </Label>
                    <Input
                      id="link-title"
                      type="text"
                      placeholder="Enter a descriptive title for your link"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                    />
                    <p className="text-xs text-gray-400">This title will help you identify your link later</p>
                  </div>

                  {/* Geographic Access Controls */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Accessible Countries */}
                    <div className="space-y-2">
                      <Label className="text-white flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-blue-400" />
                        Accessible Countries
                      </Label>
                      <MultiSelect
                        options={countries}
                        selected={accessibleCountries}
                        onChange={setAccessibleCountries}
                        placeholder="Select countries"
                      />
                    </div>

                    {/* Restricted Countries */}
                    <div className="space-y-2">
                      <Label className="text-white flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-red-400" />
                        Restricted Countries
                      </Label>
                      <MultiSelect
                        options={countries}
                        selected={restrictedCountries}
                        onChange={setRestrictedCountries}
                        placeholder="Select countries"
                      />
                    </div>

                    {/* Accessible Continents */}
                    <div className="space-y-2">
                      <Label className="text-white flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        Accessible Continents
                      </Label>
                      <MultiSelect
                        options={continents}
                        selected={accessibleContinents}
                        onChange={setAccessibleContinents}
                        placeholder="Select continents"
                      />
                    </div>

                    {/* Restricted Continents */}
                    <div className="space-y-2">
                      <Label className="text-white flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-red-400" />
                        Restricted Continents
                      </Label>
                      <MultiSelect
                        options={continents}
                        selected={restrictedContinents}
                        onChange={setRestrictedContinents}
                        placeholder="Select continents"
                      />
                    </div>
                  </div>

                  {/* IP Address Controls */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="accessible-ips" className="text-white">
                        Accessible IP Addresses
                      </Label>
                      <Textarea
                        id="accessible-ips"
                        placeholder="192.168.1.1, 10.0.0.1, 172.16.0.1"
                        value={accessibleIPs}
                        onChange={(e) => handleIPInput(e.target.value, setAccessibleIPs)}
                        className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        rows={4}
                      />
                      <p className="text-xs text-gray-400">Enter IP addresses separated by commas (auto-formatted)</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="restricted-ips" className="text-white">
                        Restricted IP Addresses
                      </Label>
                      <Textarea
                        id="restricted-ips"
                        placeholder="192.168.1.100, 10.0.0.100, 172.16.0.100"
                        value={restrictedIPs}
                        onChange={(e) => handleIPInput(e.target.value, setRestrictedIPs)}
                        className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        rows={4}
                      />
                      <p className="text-xs text-gray-400">Enter IP addresses separated by commas (auto-formatted)</p>
                    </div>
                  </div>

                  {/* Link Expiration with Native DateTime Input */}
                  <div className="space-y-2">
                    <Label className="text-white flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                      Link Expiration
                    </Label>
                    <div className="relative">
                      <input
                        type="datetime-local"
                        value={expirationDateTime}
                        onChange={(e) => setExpirationDateTime(e.target.value)}
                        min={getCurrentDateTime()}
                        className="w-full px-3 py-2 text-sm bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all [color-scheme:dark]"
                      />
                      {expirationDateTime && (
                        <button
                          type="button"
                          onClick={() => setExpirationDateTime("")}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">Leave empty for permanent link</p>

                    {/* Quick Preset Buttons */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <button
                        type="button"
                        onClick={() => {
                          const tomorrow = new Date()
                          tomorrow.setDate(tomorrow.getDate() + 1)
                          tomorrow.setMinutes(tomorrow.getMinutes() - tomorrow.getTimezoneOffset())
                          setExpirationDateTime(tomorrow.toISOString().slice(0, 16))
                        }}
                        className="px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 hover:text-white transition-colors"
                      >
                        Tomorrow
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const nextWeek = new Date()
                          nextWeek.setDate(nextWeek.getDate() + 7)
                          nextWeek.setMinutes(nextWeek.getMinutes() - nextWeek.getTimezoneOffset())
                          setExpirationDateTime(nextWeek.toISOString().slice(0, 16))
                        }}
                        className="px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 hover:text-white transition-colors"
                      >
                        1 Week
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const nextMonth = new Date()
                          nextMonth.setMonth(nextMonth.getMonth() + 1)
                          nextMonth.setMinutes(nextMonth.getMinutes() - nextMonth.getTimezoneOffset())
                          setExpirationDateTime(nextMonth.toISOString().slice(0, 16))
                        }}
                        className="px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 hover:text-white transition-colors"
                      >
                        1 Month
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const endOfDay = new Date()
                          endOfDay.setHours(23, 59, 0, 0)
                          endOfDay.setMinutes(endOfDay.getMinutes() - endOfDay.getTimezoneOffset())
                          setExpirationDateTime(endOfDay.toISOString().slice(0, 16))
                        }}
                        className="px-3 py-1 text-xs bg-gray-600 text-gray-300 rounded hover:bg-gray-500 hover:text-white transition-colors"
                      >
                        End of Day
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button type="submit" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8">
                  {wantSecurity ? "Create Secure Short Link" : "Create Short Link"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
