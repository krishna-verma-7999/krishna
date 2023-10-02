import { PortableTextBlock } from "sanity";

export type About = {
  _id: string;
  _createAt: string;
  profile: string;
  alt: string;
  cover_text: PortableTextBlock[] | null;
  skills: string[];
  about: PortableTextBlock[] | null;
};
