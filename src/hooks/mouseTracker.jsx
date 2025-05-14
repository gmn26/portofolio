import { useEffect } from "react";

const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      const gradientSize = "120px";

      document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, rgb(100,116,139),  rgb(10 10 10) ${gradientSize})`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default MouseTracker;
