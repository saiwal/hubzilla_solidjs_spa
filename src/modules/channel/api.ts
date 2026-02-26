import { apiGet } from "../../core/api/client";
import type { Post } from "../../types/types";
import { mapActivityToPost } from "./mapper";

export async function fetchChannelStream(): Promise<Post[]> {
  const activities = await apiGet<any[]>("channel/stream");

  return activities
    .filter(a => a.flags?.includes("thread_parent"))
    .map(mapActivityToPost);
}
