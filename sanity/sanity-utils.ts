import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from "./config/clientConfig";
import { About } from "@/types/About";

export async function getProjects(): Promise<Project[]> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == 'project']{
    _id ,
    _createAt,
    name ,
    "image" : image.asset->url,
    alt,
    url,
    tags,
    content
  }`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getAboutUsInfo(): Promise<About> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == 'about'][0]{
      _id , 
      _createAt,
      "profile" : profile.asset->url,
      alt,
      cover_text,
      skills,
      about,
    }`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getExperience(): Promise<About> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == 'about'][0]{
      _id , 
      _createAt,
      "profile" : profile.asset->url,
      alt,
      cover_text,
      skills,
      about,
    }`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
}
