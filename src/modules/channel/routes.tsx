import { onMount } from "solid-js";
import { posts, loadChannel, loading, loadOlder } from "./store";
import StreamList from "../../components/post/ChannelFeed";

export default function Channel() {
  onMount(loadChannel);
  
	return(
		<>
      {loading() && <p>Loading...</p>}
      <StreamList posts={posts()} onLoadOlder={loadOlder} />
    </>
	);
}
