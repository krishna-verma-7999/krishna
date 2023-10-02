"use client";

import React from "react";
import SectionHeading from "./section-heading";
import ProjectItem from "./projectItem";
import { useSectionInView } from "@/lib/hooks";
import useContentHook from "@/lib/content-hook";
import { Project } from "@/types/Project";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.4);

  const { projectsData } = useContentHook();
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 ">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData?.map((project: Project) => (
          <React.Fragment key={project._id}>
            <ProjectItem {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
