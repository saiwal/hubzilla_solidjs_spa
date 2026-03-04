import { apiGet } from "../../core/api/client";
import type { Post } from "../../types/types";
import { mapActivityToPost } from "./mapper";

const HIDDEN_VERBS = new Set(['Like', 'Dislike', 'Announce', 'Accept', 'Reject', 'TentativeAccept']);

function shouldDisplay(a: any): boolean {
  if (a.verb === 'Add' || a.verb === 'Remove') return false;
  if (a.flags?.includes('notshown')) return false;
  if (a.object_type === 'Answer') return false;
  return true;
}

// Fetch initial load - last 14 days (server default)
export async function fetchChannelStream(): Promise<Post[]> {
  const activities = await apiGet<any[]>(`channel/stream`);
  return activities.filter(shouldDisplay).map(mapActivityToPost);
}

// Fetch older posts beyond 14 days
export async function fetchChannelStreamBefore(
  beforeDate: string  // e.g. "2026-01-01 00:00:00"
): Promise<Post[]> {
  const activities = await apiGet<any[]>(
    `channel/stream?mindate=${encodeURIComponent(beforeDate)}`
  );
  return activities.filter(shouldDisplay).map(mapActivityToPost);
}

// Fetch only new posts since we last loaded (for SSE/polling fallback)
export async function fetchChannelStreamSince(
  sinceDate: string
): Promise<Post[]> {
  const activities = await apiGet<any[]>(
    `channel/stream?mindate=${encodeURIComponent(sinceDate)}`
  );
  return activities.filter(shouldDisplay).map(mapActivityToPost);
}
