import { useState } from "react";

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
        </section>
    )
}