import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createAt: Date;
  name: string;
  tags: string[];
  image: string;
  url: string;
  alt: string;
  content: PortableTextBlock[];
};
