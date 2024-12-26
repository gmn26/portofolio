import { IoDownload } from "react-icons/io5";

export default function Section1() {
    return <section className="flex gap-5 *:h-full">
        <div className="w-1/3 flex flex-col justify-stretch">
            <img src="https://placehold.co/600x400" alt="Foto Aing" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta asperiores ea ad.</span>
            <br />
            <a href="" className="flex items-center gap-1">Download CV <IoDownload /></a>
        </div>
        <div className="w-2/3 text-7xl font-bold leading-tight uppercase">Hello, my name is {" "}
            <span className="relative text-black font-normal">
                Ghazy
                <div className="bg-orange-600 absolute top-6 bottom-4 left-0 right-0 2xl:top-10 2xl:bottom-7 lg:left-1 lg:right-1 -z-10 " />
            </span>
            {" "}
            Web Developer from Indonesia.
        </div>
    </section>;
}
