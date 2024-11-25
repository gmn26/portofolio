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
            <span className="bg-orange-600 text-black font-normal">
                Ghazy
            </span>
            {" "}
            Web Developer from Indonesia.
        </div>
    </section>;
}
