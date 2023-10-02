"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

function ProjectItem({ name, content, tags, image, url }: Project) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <a href={url} target="_blank">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className=" group mb-3 sm:mb-8 last:mb-0"
      >
        <article className="bg-gray-100 max-w-[65rem] border overflow-hidden border-black/5  sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] group-even:pl-8">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              <PortableText value={content} />
            </p>

            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={image}
            alt={name}
            quality={95}
            width={452}
            height={452}
            className="absolute hidden sm:block top-8 -right-40  rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition  group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2"
          />
        </article>
      </motion.div>
    </a>
  );
}

export default ProjectItem;
