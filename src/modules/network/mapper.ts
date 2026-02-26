import type { Post } from "../../types/types";

export function mapActivityToPost(activity: any): Post {
  return {
    id: activity.uuid,
    parent: activity.message_parent,
    body: activity.body,
    authorName: activity.author?.name ?? "",
    authorAvatar: activity.author?.photo?.src ?? "",
    created: activity.created,
    children: []
  };
}
