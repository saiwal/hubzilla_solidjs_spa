import type { Post } from "../../types/types";

export interface ThreadNode extends Post {
  children: ThreadNode[];
}

export function buildThreadTree(posts: Post[]): ThreadNode[] {
  const map = new Map<string, ThreadNode>();
  const roots: ThreadNode[] = [];

  posts.forEach((post) => {
    map.set(post.mid, { ...post, children: [] });
  });

  map.forEach((node) => {
    // Root: message_id === message_top (self-referential)
    const isRoot = node.mid === node.top_mid;

    if (isRoot) {
      roots.push(node);
      return;
    }

    // Use thr_parent first, fall back to parent_mid (mirrors get_item_children)
    const parentKey = node.thr_parent || node.parent_mid;
    const parent = map.get(parentKey);

    if (parent) {
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  });

  const sortByDate = (nodes: ThreadNode[], descending = false): ThreadNode[] =>
    nodes
      .sort((a, b) => {
        const aKey = descending ? (a.commented ?? a.created) : a.created;
        const bKey = descending ? (b.commented ?? b.created) : b.created;
        const diff = new Date(aKey).getTime() - new Date(bKey).getTime();
        return descending ? -diff : diff;
      })
      .map((node) => ({ ...node, children: sortByDate(node.children, false) }));

  return sortByDate(roots, true);
}

export function flattenThread(node: ThreadNode): Post[] {
  return [node, ...node.children.flatMap(flattenThread)];
}
