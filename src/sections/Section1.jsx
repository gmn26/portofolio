import { useEffect } from "react";
import Image1 from "./../assets/pict1.jpeg";
import gsap from "gsap";
import yellow3DBall from "../assets/svg/yellow3DBall.svg";

export default function Section1() {
  useEffect(() => {
    gsap.from("#name", {
      x: -1000,
    });

    gsap.to("#name", {
      x: 0,
      repeat: true,
    });

    gsap.to("#pict", {
      rotate: -20,
      yoyo: true,
      repeat: Infinity,
      ease: "power1.inOut",
      duration: 1,
    });

    gsap.to("#title1", {
      opacity: 0,
      delay: 3,
      duration: 3,
      repeat: Infinity,
      yoyo: true,
      x: -650,
      ease: "elastic.inOut",
    });

    gsap.to("#title2", {
      opacity: 1,
      delay: 3,
      duration: 3,
      repeat: Infinity,
      yoyo: true,
      x: -650,
      ease: "elastic.inOut",
    });

    gsap.to("#ball", {
      rotate: -270,
      duration: 4,
      repeat: Infinity,
      yoyo: true,
      x: -400,
      ease: "ease.inOut",
    });
  });

  return (
    <section className="relative">
      <div className="flex flex-col gap-20 w-full">
        <div className="flex items-stretch justify-between">
          <h2 className="uppercase">
            Hello! my name is{" "}
            <span className="text-orange-600" id="name">
              {" "}
              Ghazy
            </span>
          </h2>
          <div className="bg-slate-400 w-48 rounded-full"></div>
        </div>
        <div className="relative">
          <div
            className="absolute shadow-2xl -top-10 left-32 rotate-12 w-36 h-36 bg-slate-300 rounded-lg overflow-hidden"
            id="pict"
          >
            <div className="relative">
              <img src={Image1} className="absolute -top-16" alt="" />
            </div>
          </div>
          <h2 className="uppercase text-end">
            <span className="text-orange-600">Experienced</span>{" "}
            <span className="italic text-slate-500 font-normal fonttime">
              Web Developer
            </span>
          </h2>
        </div>
        <div className="flex gap-24">
          <h2 className="uppercase" id="title1">
            <span className="text-orange-600">Front End</span>{" "}
            <span className="italic text-slate-500 font-normal fonttime">
              Enthusiast
            </span>
          </h2>
          <h2 className="uppercase opacity-0" id="title2">
            <span className="text-orange-600">Back End</span>{" "}
            <span className="italic text-slate-500 font-normal fonttime">
              Destroyer
            </span>
          </h2>
        </div>
      </div>
      <img
        src={yellow3DBall}
        width={240}
        height={240}
        alt="3D Yellow Ball"
        className="absolute right-4 bottom-16 -z-10"
        id="ball"
      />
    </section>
  );
}
