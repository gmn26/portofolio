import MouseTracker from "./hooks/mouseTracker";
import useScrollPerSection from "./hooks/scrollPerSection";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

function App() {
  useScrollPerSection();

  return (
    <main className="text-slate-100 flex w-fit *:w-screen *:px-16 *:py-12 *:h-screen *:flex">
      <MouseTracker />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

export default App;
