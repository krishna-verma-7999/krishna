"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import useContentHook from "@/lib/content-hook";
import { PortableText } from "@portabletext/react";

const About = () => {
  const { ref } = useSectionInView("About");
  const { aboutData } = useContentHook();

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] sm:max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <PortableText value={aboutData?.about} />
      </p>
      {/* <p className="mb-3 ">
        Currently I'm pursuing my degree in{" "}
        <span className="font-medium">Btech CSE AI</span>, After 12th I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
    </motion.section>
  );
};

export default About;
