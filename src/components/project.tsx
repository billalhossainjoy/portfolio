import React from 'react';
import Image, {StaticImageData} from "next/image";
import {AiFillCheckCircle} from "react-icons/ai";
import {FaArrowTrendUp} from "react-icons/fa6";
import {BsGithub} from "react-icons/bs";

type Props = {
    dateTitle: string;
    title: string;
    desriptions: string[];
    link?: string;
    img: StaticImageData;
    github?: string;
    index: number;
};

const Project: React.FC<Props> = ({index, dateTitle, title, link, desriptions, img, github}) => {
    return (
        <div className={"mx-5 md:mx-10 sticky h-full"} style={{
            top: `calc(64px + ${index * 20}px)`
        }}>
            <div className={"max-w-7xl mx-auto rounded-4xl border border-white bg-gray-900 backdrop-blur-xs"}>
                <div className={`flex py-10 px-5 md:py-15 md:px-10 lg:px-20 gap-20 flex-col ${index%2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={"w-full lg:w-3/4 text-left space-y-6"}>
                        <h6 className={"font-serif bg-gradient-to-r text-xl from-green-400 to-green-700 inline-flex text-transparent bg-clip-text"}>{dateTitle}</h6>
                        <h1 className={"text-3xl font-bold"}>{title}</h1>
                        <hr/>
                        <div className={"flex flex-col gap-3"}>
                            {desriptions.map((d, i) => <p key={i} className={"flex gap-3"}>
                                <AiFillCheckCircle className={"size-6"}/>
                                <span className={" w-full"}>{d}</span>
                            </p>)}
                        </div>
                        <div className={"flex flex-col gap-3 md:flex-row"}>
                            {
                                link && <a target={"_blank"} href={link} className={"cursor-pointer py-3 px-5 flex gap-3 justify-center items-center border-green-500 border rounded-lg bg-green-500/5"}>
                                    <span className={"bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"}>Visit Live Site</span> <FaArrowTrendUp className={"size-5 text-green-500"} />
                                </a>
                            }
                            {
                                github && <a target={"_blank"} href={github} className={"text-lg capitalize bg-white text-gray-900 py-3 px-5 rounded-lg flex justify-center items-center gap-2"}>
                                    <BsGithub className={"size-5 text-gray-900"} /> <span>Github</span>
                                </a>
                            }
                        </div>
                    </div>
                    <div className={"w-1/2 hidden lg:block"}>
                        <Image src={img} alt={"project image"} className={'rounded-lg'}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;