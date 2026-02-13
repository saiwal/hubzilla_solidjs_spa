import { onMount } from "solid-js";
import { posts, fetchStream } from "../store/streamStore";
import StreamList from "../components/stream/StreamList";

export default function Stream() {
  onMount(() => {
    fetchStream();
  });

  return (
    <div class="max-w-2xl mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Stream</h1>
      <StreamList posts={posts()} />
    </div>
  );
}
