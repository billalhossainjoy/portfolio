import React from 'react';
import Image from "next/image";
import {BsArrowDown} from "react-icons/bs";
import tech from "@/assets/images/tech.jpg"
import {links} from "@/components/links";

const Hero: React.FC = () => {

    return (
        <section className={"max-w-7xl mx-auto"} id="public">
            <div className={"flex justify-between items-center"}>
                <div className={"flex flex-col justify-center items-start h-100 gap-6"}>
                    <div className={"relative"}>
                        <div className={"absolute w-80 h-80 bg-green-500 -z-50 mask-[radial-gradient(ellipse_at_center,white_0%,transparent_70%)] opacity-20"} ></div>
                        <h1 className={"font-serif text-5xl"}>Let&apos;s build your app.</h1>
                        <p className={"mt-4 text-white/60 md:text-lg"}>
                            I specialize in transforming designs into functional, high-performing web applications.Let&apos;s discuss your next project.
                        </p>
                    </div>
                    <div className={"flex gap-4"}>
                        <a className={"inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-md"} href={"#projects"}>
                            <span className={"font-semibold "}>Explore My Work</span>
                            <BsArrowDown className={"text-white animate-bounce"} />
                        </a>
                        <a className={"inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-md"} href={"#contact"}>
                            <span>👋</span>
                            <span className={"font-semibold"} >Let&apos;s Connect</span>
                        </a>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <Image src={tech} alt={"tech"} className={"w-60 rounded-2xl"}/>
                    <div>
                        <ul className={"flex gap-3 md:gap-4 lg:gap-4 flex-wrap my-2 sm:flex-nowrap sm:my-0 justify-center py-4"}>
                            {
                                links.map(({label, icon: Icon, link}) => <li key={label} className={"hover:scale-110 transition duration-300"}>
                                    <a href={link} target={"_blank"}>{<Icon className={"size-4"}/>}</a>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;