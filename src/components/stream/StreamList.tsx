import { For } from "solid-js";
import type { Post } from "../types/post";
import PostCard from "./PostCard";

export default function StreamList(props: { posts: Post[] }) {
  return (
    <div class="space-y-6">
      <For each={props.posts}>
        {(post) => (
          <div class="space-y-3">
            {/* Root */}
            <PostCard post={post} />

            {/* Comments */}
            {post.children.length > 0 && (
              <div class="ml-8 space-y-3">
                <For each={post.children}>
                  {(comment) => (
                    <PostCard post={comment} isComment />
                  )}
                </For>
              </div>
            )}
          </div>
        )}
      </For>
    </div>
  );
}
