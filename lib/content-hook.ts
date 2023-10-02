import React, { useEffect, useState } from "react";
import { getAboutUsInfo, getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import { About } from "@/types/About";

const useContentHook = () => {
  const [projectsData, setProjectData] = useState<Project[] | null>(null);

  const [aboutData, setAboutData] = useState<About | null>(null);

  useEffect(() => {
    getProjects().then((res) => setProjectData(res));
    getAboutUsInfo().then((res) => setAboutData(res));
  }, []);

  return { projectsData, aboutData };
};

export default useContentHook;
