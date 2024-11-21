import { useEffect } from "react";

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const gradientSize = "220px";

      document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(100,116,139),  rgb(15 23 42) ${gradientSize})`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default MouseTracker;
