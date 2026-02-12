import { For } from "solid-js";
import type { Post } from "../../types/post";
import PostCard from "./PostCard";

export default function StreamList(props: { posts: Post[] }) {
  return (
    <For each={props.posts}>
      {(post) => <PostCard post={post} />}
    </For>
  );
}
