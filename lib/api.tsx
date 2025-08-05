import { apiRequest } from "./auth"
 // adjust path based on your structure
export interface LinkData {
  id?: string
  originalUrl: string
  shortUrl?: string
  title?: string
  clicks?: number
  views?: number
  created?: string
  status?: "Active" | "Inactive" | "Expired"
  accessibleCountries?: string[]
  restrictedCountries?: string[]
  accessibleContinents?: string[]
  restrictedContinents?: string[]
  accessibleIPs?: string
  restrictedIPs?: string
  expirationDateTime?: string
}

export class LinkService {
  static async createLink(linkData: LinkData): Promise<LinkData> {
    const response = await apiRequest("/links/", {
      method: "POST",
      body: JSON.stringify(linkData),
    })

    if (!response?.ok) {
      throw new Error("Failed to create link")
    }

    return response.json()
  }

  static async getUserLinks(): Promise<LinkData[]> {
    const response = await apiRequest("/links/")

    if (!response?.ok) {
      throw new Error("Failed to fetch links")
    }

    return response.json()
  }

  static async updateLink(id: string, linkData: Partial<LinkData>): Promise<LinkData> {
    const response = await apiRequest(`/links/${id}/edit/`, {
      method: "patch",
      body: JSON.stringify(linkData),
    })

    if (!response?.ok) {
      throw new Error("Failed to update link")
    }

    return response.json()
  }

  static async deleteLink(id: string): Promise<void> {
    const response = await apiRequest(`/links/${id}/delete/`, {
      method: "DELETE",
    })

    if (!response?.ok) {
      throw new Error("Failed to delete link")
    }
  }

  static async getLinkAnalytics(id: string): Promise<any> {
    const response = await apiRequest(`/links/${id}/analytics/`)

    if (!response?.ok) {
      throw new Error("Failed to fetch analytics")
    }

    return response.json()
  }
}
