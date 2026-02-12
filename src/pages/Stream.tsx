import { onMount } from "solid-js";
import { useStreamStore } from "../store/streamStore";
import StreamList from "../components/stream/StreamList";

export default function Stream() {
  const store = useStreamStore();

  onMount(() => {
    store.loadStream();
  });

  return (
    <>
      <h1>Stream</h1>
      <StreamList posts={store.posts()} />
    </>
  );
}
