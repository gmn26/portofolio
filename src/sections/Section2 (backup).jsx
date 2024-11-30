import Image1 from "./../assets/pict2.jpeg";
import LogoReact from "../component/LogoReact";
import LogoLaravel from "../component/LogoLaravel";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import LogoExpress from "../component/LogoExpress";
import LogoNext from "../component/LogoNext";
import LogoFlutter from "../component/LogoFlutter";

export default function Section1() {
  return (
    <section className="*:w-1/2">
      <div className="flex flex-col pr-6">
        <h2 className="mb-3">Ghazy Muhari Novrial</h2>
        <h3>Web Developer</h3>
        <br />
        <p>
          Hi! I am <b>web developer</b> that usually focus and love doing{" "}
          <b>front end</b> development. I work as web developer since June 2023
          with more than 1 years of learning before. With educational background
          on science, specifically on math, i have a strong logic that help me
          doing my job as web developer.
        </p>
        <p className="mt-3">
          I also experienced on <b>back end</b> development. With knowledge of
          API and Rest API concept, i also have capability doing <b>back end</b>{" "}
          or making <b>Rest API</b>.
        </p>
        <br />
        <div>
          <h4 className="mb-3">My Social Media</h4>
          <ul className="flex gap-3 *:flex *:items-center *:gap-1.5">
            <li>
              <FaGithubSquare />
              <a href="">Github</a>
            </li>
            <li>
              <FaLinkedin />
              <a href="">LinkedIn</a>
            </li>
            <li>
              <IoLogoCodepen />
              <a href="">Codepen</a>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="mb-3">Tech Stack</h4>
          <div className="flex gap-3 *:flex *:items-center *:gap-1.5 *:grayscale hover:*:grayscale-0 *:transition-all *:duration-1000">
            <LogoReact />
            <LogoLaravel />
            <LogoExpress />
            <LogoNext />
            <LogoFlutter />
          </div>
        </div>
      </div>
      <div className="h-2/3 rounded-full relative overflow-hidden">
        <img
          src={Image1}
          className="absolute -top-72 2xl:-top-96"
          alt="Foto Ghazy"
        />
      </div>
    </section>
  );
}
