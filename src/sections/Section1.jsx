import ghazy from "../assets/ghazy.jpeg";

export default function Section1() {
    return (
        <section className="flex justify-end relative gap-5 mx-4 py-9 h-screen border-b">
            <div className="absolute right-0 top-0 custom-shape min-w-[400px] md:w-1/2 h-[calc(100%-2em)] bg-yellow-500">
                <img src={ghazy} alt="Ghazy" className="object-cover object-[50%_65%] w-full h-full" />
            </div>
            <div className="absolute left-5 bottom-10 flex flex-col">
                <h1 className="font-bold">Hi! I{"'"}m Ghazy.</h1>
                <h2>Software Engineer</h2>
            </div>
        </section>
    );
}
