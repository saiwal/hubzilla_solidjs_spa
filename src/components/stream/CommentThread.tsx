import { For } from "solid-js";
import type { Post } from "../../types/post";
import PostCard from "./PostCard";

export default function CommentThread(props: { children: Post[] }) {
	return (
		<div class="ml-6 border-l pl-4">
			<For each={props.children}>
				{(child) => <PostCard post={child} />}
			</For>
		</div>
	);
}

