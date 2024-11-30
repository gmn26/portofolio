import { FaArrowRight } from "react-icons/fa";

export default function Section2() {
    return <section className="justify-stretch">
        <div className="w-[45%]">
            <h2 className="text-8xl">About <span className="text-orange-600">Me</span> ?</h2>
        </div>
        <div className="flex flex-col justify-between">
            <div className="text-3xl">
                <p>
                    I am a programmer that currently focused on software development. Mainly i do web development but i also doing mobile development.
                </p>
                <br />
                <p>
                    For website development i could do both side, front-end and also back-end development or simply you can call it as a fullstack developer. I got 1+ year experience as web developer if it count base on when i do it as a professional. Here is some of my web project if you guys wanna <a className="flex items-center gap-3">see more <FaArrowRight size={24} className="translate-y-1" /></a>
                </p>
                <br />
                <p>
                    I also a mobile developer that more focus on development using flutter. With almost 1 year of experience, i already made some small scale project as my portfolio. Here is some of my <a className="flex items-center gap-3">mobile app project <FaArrowRight size={24} className="translate-y-1 " /></a>
                </p>
            </div>
            <div>
                <span className="text-3xl">Which one you got more interest?</span>
            </div>
        </div>
    </section>
}