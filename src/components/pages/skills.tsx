import React from 'react';
import {backendLibraries, databases, frontendLibraries, othersLibraries} from "@/components/icons";

const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const Skills: React.FC = () => {

    return (
        <section className={"space-y-6 text-center z-50 pt-20"}>
            <div className={"text-center space-y-6"}>
                <h1 className={"font-serif bg-gradient-to-r text-3xl from-green-400 to-green-700 inline-flex text-transparent bg-clip-text"}>Skill&apos;s</h1>
                <h2 className={"text-5xl"}>Library and Framework&apos;s</h2>
                <p className={"text-lg text-gray-400"}>I am working on these libraries and frameworks.</p>
            </div>

             {/*frontend*/}
            <div className={"space-y-6"}>
                <h1 className={"font-serif text-xl inline-flex"}>Frontend</h1>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap duration-300 transition"}>
                        {
                            frontendLibraries.map(({icon: Icon, background, color, url}, index) => (<a key={index} href={url}>
                                <Icon className={`rounded-full py-2 size-8 sm:size-10 md:size-12 hover:scale-110`} style={{background: hexToRgba(background, 0.3) , color: color ?? background}}/>
                            </a>))
                        }
                    </div>
                </div>
            </div>

             {/*frontend*/}
            <div className={"space-y-6"}>
                <h1 className={"font-serif text-xl inline-flex"}>Backend</h1>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap duration-300 transition"}>
                        {
                            backendLibraries.map(({icon: Icon, background, color, url}, index) => (<a key={index} href={url}>
                                <Icon className={`rounded-full py-2 size-8 sm:size-10 md:size-12 hover:scale-110`} style={{background: hexToRgba(background, 0.3) , color: color ?? background}}/>
                            </a>))
                        }
                    </div>
                </div>
            </div>
             {/*Database*/}
            <div className={"space-y-6"}>
                <h1 className={"font-serif text-xl inline-flex"}>Database&apos;s</h1>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap duration-300 transition"}>
                        {
                            databases.map(({icon: Icon, background, color, url}, index) => (<a key={index} href={url}>
                                <Icon className={`rounded-full py-2 size-8 sm:size-10 md:size-12 hover:scale-110`} style={{background: hexToRgba(background, 0.3) , color: color ?? background}}/>
                            </a>))
                        }
                    </div>
                </div>
            </div>

             {/*other skills*/}
            <div className={"space-y-6"}>
                <h1 className={"font-serif text-xl inline-flex"}>Other Skill&apos;s</h1>
                <div className={"container mx-auto"}>
                    <div className={"flex justify-center gap-2 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap duration-300 transition"}>
                        {
                            othersLibraries.map(({icon: Icon, background, color, url}, index) => (<a key={index} href={url}>
                                <Icon className={`rounded-full py-2 size-8 sm:size-10 md:size-12 hover:scale-110`} style={{background: hexToRgba(background, 0.3) , color: color ?? background}}/>
                            </a>))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;