import { useEffect } from "react";

const useScrollPerSection = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      const sections = document.querySelectorAll("section");
      const totalSections = sections.length;

      const currentSection = Math.round(window.scrollX / window.innerWidth);
      const nextSection = Math.min(
        Math.max(currentSection + delta, 0),
        totalSections - 1
      );

      if (nextSection < sections.length) {
        sections[nextSection].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useScrollPerSection;
