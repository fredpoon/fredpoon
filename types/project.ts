import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
