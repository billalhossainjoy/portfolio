"use client"

import React from 'react';
import {scroller} from "@/utils";

const Header: React.FC = () => {
    return (
        <header className={"flex justify-center items-center sticky top-3 z-50"}>
            <nav className={"flex gap-1 p-0.5 border border-white/15 rounded-full mx-2 bg-white/15 backdrop-blur-xs"}>
                <a className={"nav-item cursor-pointer"} onClick={() => scroller("public")}>Home</a>
                <a className={"nav-item cursor-pointer"} onClick={() => scroller("about")}>About</a>
                <a className={"nav-item cursor-pointer"} onClick={() => scroller("projects")}>Project</a>
                <a className={"nav-item cursor-pointer bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"} onClick={() => scroller("contact")}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;