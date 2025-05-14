export default function Section2() {
    return (
        <section className="min-h-screen mx-4 py-9 border-b">
            <div className="flex">
                <div className="w-full md:w-1/2 ml-auto flex gap-2 *:w-1/2">
                    <div>
                        <div className="mb-10">
                            <span className="text-gray-500">About Me</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                I{"'"}m a software engineer based in Indonesia. Mainly work on
                                building website, web app, and mobile app. With more than 2+
                                work experiences, I{"'"}ve worked with some IT company and also
                                tech teams to develop intuitive, high-performing and beneficial
                                products using modern technologies.
                            </p>
                            <p>
                                I have capabilities to work as Front-End Developer, Back-End
                                Developer and also Mobile Developer. Always to keep my code as
                                clean as possible, and got higher maintainability rate.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10">
                            <span className="text-gray-500">What i do</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                I specialize in full-stack development, with an emphasis on
                                creating responsive and dynamic applications. On the web, I
                                build fast, interactive interfaces using tools like React or Angular and
                                Tailwind CSS. On mobile, I develop cross-platform apps using
                                React Native or Flutter, ensuring native performance and a consistent user
                                experience. I’m also experienced in backend development, working
                                with APIs and databases using laravel, express JS, spring, and .NET.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex mt-40">
                <div className="w-1/2 flex items-end gap-4">
                    <div className="h-32 w-32 bg-white/50" />
                    <div className="flex flex-col items-center gap-4">
                        <h2>Current Work</h2>
                        <div className="flex gap-4">
                            <div className="h-16 w-16 bg-white/50" />
                            <div className="h-16 w-16 bg-white/50" />
                            <div className="h-16 w-16 bg-white/50" />
                            <div className="h-16 w-16 bg-white/50" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2>Project Name</h2>
                </div>
            </div>
        </section>
    );
}
