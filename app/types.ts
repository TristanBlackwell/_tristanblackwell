export type WorkDetail = {
  name: string;
  roles: { title: string; duration: string }[];
  description: string;
  highlights: string[];
};

export interface PostMeta {
  id: number;
  title: string;
  created_at: Date;
  slug: string;
  excerpt: string;
}

export interface Post extends PostMeta {
  updated_at: Date;
  toc: string;
  content: string;
}

export type TocItem = {
  id: string;
  title: string;
  depth: number;
  type: string;
};
