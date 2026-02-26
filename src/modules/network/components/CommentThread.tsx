import { For } from "solid-js";
import type { ThreadNode } from "../../../core/utils/thread";
import PostCard from "./PostCard";

export default function CommentThread(props: { comments: ThreadNode[] }) {
  if (!props.comments.length) return null;

  return (
    <div style={{ "margin-left": "2rem", "margin-top": "1rem" }}>
      <For each={props.comments}>
        {(comment) => <PostCard post={comment} />}
      </For>
    </div>
  );
}
