import { gsap } from "gsap";
import { useEffect } from "react";

export default function Section3() {
  useEffect(() => {
    gsap.to(".animate-box", {
      rotate: 360,
      duration: 5,
      x: 1000,
      yoyo: true,
      repeat: Infinity,
      ease: "bounce",
    });
  });

  return (
    <section className="relative">
      <div className="animate-box w-24 h-24 border border-red-600 absolute top-0 left-0"></div>
      <h2 className="box">Front End</h2>
    </section>
  );
}
