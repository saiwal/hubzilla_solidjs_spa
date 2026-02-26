export interface Post {
  id: string;
  parent: string;
  body: string;
  authorName: string;
  authorAvatar: string;
  created: string;
  children: Post[];
  mid: string;
  parent_mid: string;
  thr_parent?: string;
  commented?: string;
  edited?: string;
  changed?: string;
  verb?: string;
  obj_type?: string;
  item_notshown?: number;
}
