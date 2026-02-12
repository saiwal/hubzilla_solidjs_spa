import type { Post } from "../types/post";

export function activityToPost(activity: any): Post {
  return {
    id: activity.id,
    parentId: activity.parent,
    authorName: activity.author?.name,
    authorAvatar: activity.author?.photo,
    body: activity.body,
    created: activity.created,
    children: [],
  };
}
