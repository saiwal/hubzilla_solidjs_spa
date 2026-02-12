import type { Post } from "../types/post";

export function buildThreadTree(flat: Post[]): Post[] {
  const map = new Map<string, Post>();
  const roots: Post[] = [];

  for (const post of flat) {
    map.set(post.id, post);
  }

  for (const post of flat) {
    if (post.parentId && map.has(post.parentId)) {
      map.get(post.parentId)!.children.push(post);
    } else {
      roots.push(post);
    }
  }

  return roots;
}
