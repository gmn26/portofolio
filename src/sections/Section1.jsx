import Image1 from "./../assets/pict1.jpeg";

export default function Section1() {
  return (
    <section>
      <div className="flex flex-col gap-20 w-full">
        <div className="flex items-stretch justify-between">
          <h2 className="uppercase">
            Hello! my name is <span className="text-orange-600">Ghazy</span>
          </h2>
          <div className="bg-slate-400 w-48 rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute shadow-2xl -top-10 left-32 rotate-12 w-36 h-36 bg-slate-300 rounded-lg overflow-hidden">
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
        <h2 className="uppercase">
          <span className="text-orange-600">Front End</span>{" "}
          <span className="italic text-slate-500 font-normal fonttime">
            Enthusiast
          </span>
        </h2>
      </div>
    </section>
  );
}
