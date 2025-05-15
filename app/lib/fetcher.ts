
const BASE_URL = process.env.API_URL

export async function fetchFromApi(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
  return res.json()
}
