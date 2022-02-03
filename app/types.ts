export type WorkDetail = {
  name: string;
  roles: { title: string; duration: string }[];
  description: string;
  highlights: string[];
};

export type TocItem = {
  id: string;
  title: string;
  depth: number;
  type: string;
};
