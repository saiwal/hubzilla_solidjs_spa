export interface Post {
  id: number;
  parent: number;
  author: {
    name: string;
    avatar: string;
  };
  created: string;
  body: string; // parsed HTML from Hubzilla API
}
