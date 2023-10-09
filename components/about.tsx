"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import useContentHook from "@/lib/content-hook";
import { PortableText } from "@portabletext/react";

const About = () => {
  const { ref } = useSectionInView("About", 1);
  const { aboutData } = useContentHook();

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] sm:max-w-[65rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <PortableText value={aboutData?.about} />
      </p>
    </motion.section>
  );
};

export default About;
