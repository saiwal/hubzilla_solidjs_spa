import type { Post } from "../types/post";
import DOMPurify from "dompurify";

export default function PostCard(props: {
  post: Post;
  isComment?: boolean;
}) {
  return (
    <div
      class={`p-4 rounded border ${
        props.isComment ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div class="flex items-center gap-2 mb-2">
        {props.post.authorAvatar && (
          <img
            src={props.post.authorAvatar}
            class="w-8 h-8 rounded-full"
          />
        )}
        <span class="font-semibold">
          {props.post.authorName}
        </span>
      </div>

      <div innerHTML={DOMPurify.sanitize(props.post.body)} />

      <div class="text-xs text-gray-500 mt-2">
        {props.post.created}
      </div>
    </div>
  );
}
