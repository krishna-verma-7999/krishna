"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { krishna } from "@/lib/data";
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { urls } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import useContentHook from "@/lib/content-hook";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { aboutData } = useContentHook();

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={krishna}
              alt={"krishna"}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
          {/* window + . */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PortableText value={aboutData?.cover_text} />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition group cursor-pointer"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          {""}
        </Link>

        <a
          href="/CV.pdf"
          download
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  focus:scale-110  hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity group-hover:translate-y-1 transition" />
        </a>

        <a
          href={urls[0].href}
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full outline-none  focus:scale-110  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition  cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href={urls[1].href}
          target="_blank"
          className="bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] outline-none  focus:scale-110  hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition  cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
