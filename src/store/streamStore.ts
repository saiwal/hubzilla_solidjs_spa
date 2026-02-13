import { createSignal } from "solid-js";
import { apiGet } from "../services/api";
import type { Post } from "../types/post";
import { bbcodeToHtml } from "../services/bbcode";

const [posts, setPosts] = createSignal<Post[]>([]);

function extractUuidFromUrl(url: string): string {
  return url?.split("/").pop() || "";
}

function activityToPost(item: any): Post {
  return {
    id: item.uuid,
    parent: extractUuidFromUrl(item.message_parent),
    body: bbcodeToHtml(item.body) ?? "",
    authorName: item.author?.name ?? "Unknown",
    authorAvatar: item.author?.photo?.src ?? "",
    created: item.created,
    children: [],
  };
}

function buildThreadTree(items: Post[], raw: any[]): Post[] {
  const map = new Map<string, Post>();
  const roots: Post[] = [];

  items.forEach((item) => {
    map.set(item.id, item);
  });

  items.forEach((item, index) => {
    const original = raw[index];

    const isRoot =
      original.flags?.includes("thread_parent");

    if (isRoot) {
      roots.push(item);
    } else {
      const parent = map.get(item.parent);
      if (parent) {
        parent.children.push(item);
      }
    }
  });

  // sort comments oldest → newest
  roots.forEach((root) => {
    root.children.sort(
      (a, b) =>
        new Date(a.created).getTime() -
        new Date(b.created).getTime()
    );
  });

  return roots;
}

async function fetchStream() {
  const data = await apiGet<any[]>("network/stream");

  // only real posts + comments
  const filtered = data.filter(
    (item) => item.verb === "Create"
  );

  const parsed = filtered.map(activityToPost);
  const threaded = buildThreadTree(parsed, filtered);

  setPosts(threaded);
}

export { posts, fetchStream };
