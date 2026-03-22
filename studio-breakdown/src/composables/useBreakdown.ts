import { ref } from 'vue'
import type { StudioBreakdown, ApiResponse } from '@/types/breakdown'
import { sampleData } from '@/data/sample'

// TODO: Replace with your actual API base URL
const API_BASE_URL = 'http://localhost:7071/api'

export function useBreakdown() {
  const breakdown = ref<StudioBreakdown | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const parsedRevisionId = ref<string | null>(null)

  function extractRevisionId(trackUrl: string): string | null {
    try {
      const url = new URL(trackUrl)
      return url.searchParams.get('revId')
    } catch {
      return null
    }
  }

  async function fetchBreakdown(trackUrl: string) {
    error.value = null
    breakdown.value = null

    const revId = extractRevisionId(trackUrl)
    if (!revId) {
      error.value = 'Could not extract revId from the URL. Make sure the URL contains ?revId=...'
      return
    }

    parsedRevisionId.value = revId
    loading.value = true

    try {
      const response = await fetch(`${API_BASE_URL}/breakdown/studio?revisionId=${revId}`)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      const data: ApiResponse = await response.json()
      breakdown.value = data.breakdown
    } catch (e: any) {
      error.value = `Failed to fetch breakdown: ${e.message}. This may be a CORS issue.`
    } finally {
      loading.value = false
    }
  }

  function loadSample() {
    error.value = null
    parsedRevisionId.value = 'sample-data'
    breakdown.value = sampleData.breakdown
  }

  return {
    breakdown,
    loading,
    error,
    parsedRevisionId,
    fetchBreakdown,
    loadSample,
  }
}
