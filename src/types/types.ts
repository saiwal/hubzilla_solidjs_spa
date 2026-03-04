export interface Post {
  id: string;
  mid: string;         // full message_id URL
  parent_mid: string;  // direct parent message_id URL  
  thr_parent: string;  // same as parent_mid from this API
  top_mid: string;     // thread root message_id URL
  parent: string;
  body: string;
  title: string;
  authorName: string;
  authorAvatar: string;
  authorUrl: string;
  created: string;
  commented?: string;
  edited?: string;
  verb?: string;
  obj_type?: string;
  flags: string[];
  permalink: string;
  children: Post[];
}
