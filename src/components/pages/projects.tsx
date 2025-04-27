import React from 'react';
import Project from "@/components/project";
import {projects} from "@/components";

const Projects: React.FC = () => {


    return (
        <section className={"space-y-20 text-center mb-40 z-50 pt-20"} id="projects">
            <div className={"text-center space-y-6"}>
                <h1 className={"font-serif bg-gradient-to-r text-3xl from-green-400 to-green-700 inline-flex text-transparent bg-clip-text"}>Project&apos;s</h1>
                <h2 className={"text-5xl"}>Featured Projects</h2>
                <p className={"text-lg text-gray-400"}>Some demo of projects for only showcase.</p>
            </div>
            <div className={"flex flex-col gap-4"}>
                {
                    projects.map((project, index) => <Project key={index} index={index} {...project}/>)
                }
            </div>
        </section>
    );
};

export default Projects;