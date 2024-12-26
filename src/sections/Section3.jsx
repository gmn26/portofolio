import LogoHTML5 from "../component/LogoHTML";
import LogoCSS from "../component/LogoCSS";
import LogoJavascript from "../component/LogoJavascript";
import LogoBootstrap from "../component/LogoBootstrap";
import LogoTailwind from "../component/LogoTailwind";
import LogoReact from "../component/LogoReact";
import LogoNext from "../component/LogoNext";
import LogoFlutter from "../component/LogoFlutter";
import LogoPHP from "../component/LogoPHP";
import LogoExpress from "../component/LogoExpress";
import LogoMySQL from "../component/LogoMySQL";

export default function Section3() {
  return (
    <section className="justify-between *:w-full *:flex *:flex-col *:text-center">
      <div className="border-r">
        <h2>Front End Tech Stack</h2>
        <div className="grid gap-y-8 grid-cols-3 justify-items-center *:w-20 mt-6">
          <LogoHTML5 />
          <LogoCSS />
          <LogoJavascript />
          <LogoBootstrap />
          <LogoTailwind />
          <LogoReact />
          <LogoNext />
          <LogoFlutter />
        </div>
      </div>
      <div className="border-l">
        <h2>Back End Tech Stack</h2>
        <div className="grid gap-y-8 grid-cols-3 justify-items-center *:w-20 mt-6">
          <LogoPHP />
          <LogoMySQL />
          <LogoExpress />
        </div>
      </div>
    </section>
  );
}
