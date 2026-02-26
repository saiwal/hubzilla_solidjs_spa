import type { Post } from "../../modules/network/types";

export interface ThreadNode extends Post {
  children: ThreadNode[];
}

export function buildThreadTree(posts: Post[]): ThreadNode[] {
  const map = new Map<number, ThreadNode>();
  const roots: ThreadNode[] = [];

  posts.forEach((post) => {
    map.set(post.id, { ...post, children: [] });
  });

  map.forEach((node) => {
    if (node.parent !== node.id && map.has(node.parent)) {
      map.get(node.parent)!.children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}
