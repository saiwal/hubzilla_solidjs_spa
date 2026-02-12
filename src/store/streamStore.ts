import { createSignal } from "solid-js";
import type { Post } from "../types/post";
import { apiGet } from "../services/api";
import { activityToPost } from "../services/parser";
import { buildThreadTree } from "../services/thread";

const [posts, setPosts] = createSignal<Post[]>([]);
const [loading, setLoading] = createSignal(false);

export function useStreamStore() {
async function loadStream() {
  try {
    setLoading(true);
    const data = await apiGet<any[]>("stream");
    const parsed = data.map(activityToPost);
    const threaded = buildThreadTree(parsed);
    setPosts(threaded);
  } catch (e) {
    console.error("Stream load failed:", e);
  } finally {
    setLoading(false);
  }
}

  return {
    posts,
    loading,
    loadStream,
  };
}
