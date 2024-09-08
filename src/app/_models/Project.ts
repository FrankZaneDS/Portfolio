import { Tag } from './tag';

export interface Project {
  id: number;
  name: string;
  summary: string;
  desc: string;
  projectLink: string;
  photos: string[];
  tags: Tag[];
}
