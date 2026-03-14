import type { ThreadNode } from "../../core/utils/thread";
import CommentThread from "./CommentThread";

export default function PostCard(props: { post: ThreadNode }) {
  const { post } = props;

  return (
    <div
      class="bg-white dark:bg-zinc-900 
              border border-zinc-200 dark:border-zinc-800 
              rounded-2xl 
              p-5 
              mb-4 
              shadow-sm 
              hover:shadow-md 
              transition-shadow duration-200"
    >
      {/* Header */}
      <div class="flex items-start gap-3">
        <img
          src={post.authorAvatar}
          width="44"
          height="44"
          class="rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-700"
        />

        <div class="flex flex-col">
          <span class="font-semibold text-zinc-900 dark:text-zinc-100">
            {post.authorName}
          </span>

          <span class="text-sm text-zinc-500 dark:text-zinc-400">
            {new Date(post.created).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        class="mt-4 text-zinc-800 dark:text-zinc-200 
             leading-relaxed 
             prose prose-zinc dark:prose-invert 
             max-w-none"
        innerHTML={post.body}
      />

      {/* Footer placeholder (future: reactions, reply button etc.) */}
      {/* Actions can go here later */}
      <div
        class="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800
            flex items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400"
      >
        <span class="flex items-center gap-1.5" title="Likes">
          <span>👍</span>
          <span>{post.likeCount}</span>
        </span>
        <span class="flex items-center gap-1.5" title="Dislikes">
          <span>👎</span>
          <span>{post.dislikeCount}</span>
        </span>
        <span class="flex items-center gap-1.5" title="Repeats">
          <span>🔁</span>
          <span>{post.repeatCount}</span>
        </span>
      </div>

      <CommentThread comments={post.children} />
    </div>
  );
}
