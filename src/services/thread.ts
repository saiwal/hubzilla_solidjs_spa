import type { Post } from "../types/post";

export function buildThreadTree(items: any[]) {
  const map = new Map<number, any>();

  // First pass: initialize threads
  items.forEach(item => {
    if (item.id === item.parent) {
      map.set(item.id, {
        ...item,
        children: []
      });
    }
  });

  // Second pass: attach comments
  items.forEach(item => {
    if (item.id !== item.parent) {
      const root = map.get(item.parent);
      if (root) {
        root.children.push({
          ...item,
          children: []
        });
      }
    }
  });

  return Array.from(map.values());
}

