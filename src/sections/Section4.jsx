import { useState } from "react";
import react from "../assets/react.svg";
import typescript from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.svg";
import bootstrap from "../assets/bootstrap.svg";
import angular from "../assets/angular.svg";
import next from "../assets/next.svg";
import laravel from "../assets/laravel.svg";
import php from "../assets/php.svg";
import express from "../assets/express.svg";
import spring from "../assets/spring.svg";
import mysql from "../assets/mysql.svg";
import node from "../assets/node.svg";
import postgresql from "../assets/postgresql.svg";
import mongodb from "../assets/mongodb.svg";
import prisma from "../assets/prisma.svg";
import flutter from "../assets/flutter.svg";

export default function Section4() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const items = ['FRONT-END', 'BACK-END', 'MOBILE'];
    return (
        <section className="min-h-screen mx-4 py-9 border-b">
            <h2 className="text-center text-7xl md:text-9xl">TECH STACK</h2>
            <div className="hidden md:flex justify-between font-bold mt-16 text-5xl lg:text-6xl xl:text-7xl">
                {items.map((text, index) => (
                    <p
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`transition duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'blur-sm opacity-40' : ''
                            }`}
                    >
                        {text}
                    </p>
                ))}
            </div>
            <div className="hidden md:block relative min-h-96 *:absolute *:w-16">
                <div className={`absolute w-16 top-[5%] left-[5%] rotate-[3deg] floating-effect ${hoveredIndex == 1 && "blur"}`}>
                    <img src={react} alt="React" />
                </div>
                <div className={`absolute w-16 top-[15%] left-[25%] -rotate-[8deg] floating-effect ${hoveredIndex == 1 && "blur"}`}>
                    <img src={typescript} alt="Type Script" />
                </div>
                <div className={`absolute w-16 top-[10%] right-[10%] rotate-[5deg] floating-effect ${hoveredIndex == 1 && "blur"}`}>
                    <img src={tailwind} alt="Tailwind" />
                </div>
                <div className={`absolute w-16 top-[30%] left-[10%] -rotate-[12deg] floating-effect ${(hoveredIndex == 1 || hoveredIndex == 2) && "blur"}`}>
                    <img src={bootstrap} alt="Bootstrap" />
                </div>
                <div className={`absolute w-16 top-[35%] right-[15%] rotate-[10deg] floating-effect ${(hoveredIndex == 1 || hoveredIndex == 2) && "blur"}`}>
                    <img src={angular} alt="Angular" />
                </div>
                <div className={`absolute w-16 top-[25%] left-[50%] rotate-[6deg] floating-effect ${(hoveredIndex == 1 || hoveredIndex == 2) && "blur"}`}>
                    <img src={next} alt="Next" />
                </div>
                <div className={`absolute w-16 top-[50%] left-[20%] -rotate-[9deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={laravel} alt="Laravel" />
                </div>
                <div className={`absolute w-16 top-[48%] right-[10%] rotate-[7deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={php} alt="PHP" />
                </div>
                <div className={`absolute w-16 top-[60%] left-[35%] -rotate-[6deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={express} alt="Express" />
                </div>
                <div className={`absolute w-16 top-[65%] right-[20%] rotate-[6deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={spring} alt="Spring" />
                </div>
                <div className={`absolute w-16 top-[55%] left-[60%] -rotate-[11deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={mysql} alt="MySQL" />
                </div>
                <div className={`absolute w-16 top-[72%] right-[30%] rotate-[11deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={node} alt="Node" />
                </div>
                <div className={`absolute w-16 bottom-[20%] left-[10%] -rotate-[4deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={postgresql} alt="PostgreSQL" />
                </div>
                <div className={`absolute w-16 bottom-[25%] right-[5%] rotate-[9deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={mongodb} alt="MongoDB" />
                </div>
                <div className={`absolute w-16 bottom-[10%] left-[30%] -rotate-[5deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 2) && "blur"}`}>
                    <img src={prisma} alt="Prisma" />
                </div>
                <div className={`absolute w-16 bottom-[5%] right-[20%] rotate-[7deg] floating-effect ${(hoveredIndex == 0 || hoveredIndex == 1) && "blur"}`}>
                    <img src={flutter} alt="Flutter" />
                </div>
            </div>
        </section>
    )
}