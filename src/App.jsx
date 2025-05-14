import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import MouseTracker from "./hooks/mouseTracker";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

function App() {
  return (
    <main className="text-white min-h-screen">
      <MouseTracker />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <SocialMedia />
      <div>..</div>
    </main>
  );
}

export default App;

// <main className="text-slate-100 flex w-fit *:w-screen *:px-16 *:py-12 *:h-screen *:flex">