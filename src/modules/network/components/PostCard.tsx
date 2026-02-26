import type { ThreadNode } from "../../../core/utils/thread";
import CommentThread from "./CommentThread";

export default function PostCard(props: { post: ThreadNode }) {
  const { post } = props;

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}>
      <div style={{ display: "flex", gap: "0.5rem", "align-items": "center" }}>
        <img src={post.author.avatar} width="40" height="40" />
        <strong>{post.author.name}</strong>
        <span style={{ color: "#888" }}>
          {new Date(post.created).toLocaleString()}
        </span>
      </div>

      <div
        style={{ "margin-top": "0.5rem" }}
        innerHTML={post.body}
      />

      <CommentThread comments={post.children} />
    </div>
  );
}
