export type Project = {
  title: string;
  description: string;
  whatIDid?: string;
  role?: string;
  tech?: string;
  year?: string;
  projectType?: string;
  status?: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  liveLabel?: string;
  sourceLabel?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineEntry = {
  title: string;
  meta: string;
  description: string;
};

export type NavLink = {
  name: string;
  path: string;
};
