import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
  // due to default value you don't need to infer default value.
) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // console.log(inView);
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
