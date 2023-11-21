import { useInView } from "react-intersection-observer";
import { SectionName } from "./types"
import { useActiveSectionContext } from "@/context/ActiveSectionProvider";
import { useEffect } from "react";

export const useSectionInView = (name: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(name);
    }
  }, [inView, setActiveSection, name, timeOfLastClick]);

  return { ref }
}