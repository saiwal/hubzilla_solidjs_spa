import { moduleGet } from "../../core/api/client";
import type { Post } from "../../types/types";
import { mapActivityToPost } from "./mapper";

const HIDDEN_VERBS = new Set(['Like', 'Dislike', 'Announce', 'Accept', 'Reject', 'TentativeAccept']);

function shouldDisplay(a: any): boolean {
  if (a.verb === 'Add' || a.verb === 'Remove') return false;
  if (a.flags?.includes('notshown')) return false;
  if (a.object_type === 'Answer') return false;
  const isThreadTop = a.message_id === a.message_top;
  if (HIDDEN_VERBS.has(a.verb) && !isThreadTop) return false;
  return true;
}

export async function fetchNetworkStream(): Promise<Post[]> {
  const activities = await moduleGet<any[]>("network?format=json");
  return activities
    .filter(shouldDisplay)
    .map(mapActivityToPost);
}
