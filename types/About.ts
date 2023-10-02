import { PortableTextBlock } from "sanity";
import { TypedObject } from "sanity";

export type About = {
  _id: string;
  _createAt: string;
  profile: string;
  alt: string;
  cover_text: any;
  skills: string[];
  about: any;
};
