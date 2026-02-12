export type Post = {
  id: string;
  parentId?: string;
  authorName: string;
  authorAvatar: string;
  body: string;
  created: string;
  children: Post[];
};
