import { onMount } from "solid-js";
import { posts, loadNetwork, loading } from "./store";
import StreamList from "../../components/post/StreamList";

export default function Network() {
  onMount(loadNetwork);

  return (
    <>
      {loading() && <p>Loading...</p>}
      <StreamList posts={posts()} />
    </>
  );
}
