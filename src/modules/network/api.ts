import { apiGet } from "../../core/api/client";
import type { Post } from "../../types/types";
import { mapActivityToPost } from "./mapper";

export async function fetchNetworkStream(): Promise<Post[]> {
  const activities = await apiGet<any[]>("network/stream");

  return activities
    .filter(a => a.flags?.includes("thread_parent"))
    .map(mapActivityToPost);
}
