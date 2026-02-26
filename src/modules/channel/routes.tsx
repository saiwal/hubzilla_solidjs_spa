import { onMount } from "solid-js";
import { posts, loadChannel, loading } from "./store";
import StreamList from "../../components/post/StreamList";

export default function Channel() {
  onMount(loadChannel);
  
	return(
		<>
      {loading() && <p>Loading...</p>}
      <StreamList posts={posts()} />
    </>
	);
}
