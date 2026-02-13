import type { Post } from "../types/post";

export function activityToPost(item: any): Post {
  return {
    id: item.id,
    parent: item.parent,
    authorName: item.author?.xchan_name ?? "Unknown",
    authorAvatar: item.author?.xchan_photo_s ?? "",
    body: item.body ?? "",
    created: item.created,
    children: []
  };
}
