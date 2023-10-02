"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at or{" "}
        <a href="mailto:karanverma1940@gmail.com" className="underline">
          karanverma1940@gmail.com
        </a>{" "}
        through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-white"
        action={async (formData) => {
          // console.log("Running on client");

          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email has been sent successfully!");
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          name="SenderEmail"
          className="h-14 px-4 rounded-lg border borderBlack dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg border borderBlack p-4 dark:bg-gray-800 dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
