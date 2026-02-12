import CommentThread from "./CommentThread";
import type { Post } from "../../types/post";

export default function PostCard(props: { post: Post }) {
  const p = props.post;

  return (
    <div class="border p-4 mb-4 rounded">
      <div class="flex items-center gap-2">
        <img src={p.authorAvatar} width="32" />
        <strong>{p.authorName}</strong>
      </div>

      <div innerHTML={p.body}></div>

      <CommentThread children={p.children} />
    </div>
  );
}
