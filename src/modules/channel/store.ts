import { createSignal } from "solid-js";
import { fetchChannelStream, fetchChannelStreamBefore } from "./api";
import { buildThreadTree, flattenThread } from "../../core/utils/thread";
import type { ThreadNode } from "../../core/utils/thread";

const [posts, setPosts] = createSignal<ThreadNode[]>([]);
const [loading, setLoading] = createSignal(false);
let oldestLoaded = '';

export async function loadChannel() {
  setLoading(true);
  try {
    const data = await fetchChannelStream();
    const threads = buildThreadTree(data);
    setPosts(threads);
    // Track oldest post for "load more"
    if (data.length > 0) {
      oldestLoaded = data.reduce((oldest, p) =>
        p.created < oldest ? p.created : oldest, data[0].created
      );
    }
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

export async function loadOlder() {
  if (!oldestLoaded) return;
  // Go back 14 more days from oldest post we have
  const olderDate = new Date(oldestLoaded + ' UTC');
  olderDate.setDate(olderDate.getDate() - 14);
  const dateStr = olderDate.toISOString().replace('T', ' ').slice(0, 19);
  
  const data = await fetchChannelStreamBefore(dateStr);
  if (data.length === 0) return;

  const combined = [...posts().flatMap(flattenThread), ...data];
  setPosts(buildThreadTree(combined));
  
  oldestLoaded = data.reduce((oldest, p) =>
    p.created < oldest ? p.created : oldest, data[0].created
  );
}

export { posts, loading };
