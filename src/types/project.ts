export type Project = {
  id: number;
  cname: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  linkSC: string;
  liveDemo: string;
};

export type ProjectDetail = {
  id: string;
  description: string;
  image: string;
  linkSC: string | null;
  liveDemo: string | null;
  techStack: string[];
  title: string;
};
