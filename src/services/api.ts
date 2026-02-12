const BASE = "/api/z/1.0";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE}/${endpoint}`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}
