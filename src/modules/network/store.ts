import { createSignal } from "solid-js";
import { fetchNetworkStream } from "./api";
import { buildThreadTree } from "../../core/utils/thread";
import type { ThreadNode } from "../../../core/utils/thread";

const [posts, setPosts] = createSignal<ThreadNode[]>([]);
const [loading, setLoading] = createSignal(false);

export async function loadNetwork() {
  setLoading(true);
  try {
    const data = await fetchNetworkStream();
    const threads = buildThreadTree(data);
    setPosts(threads);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}

export { posts, loading };
