export interface Post {
  id: string;
  parent: string;
  body: string;
  authorName: string;
  authorAvatar: string;
  created: string;
  children: Post[];
}
