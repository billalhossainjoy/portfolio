import React from 'react';
import {FaArrowTrendUp} from "react-icons/fa6";
import {links} from "@/components/links";

const Footer: React.FC = () => {

    return (
        <footer className={" mx-6 z-0"}>
            <div className={"container border-t border-gray-400 mx-auto flex flex-col md:flex-row justify-between h-20 items-center"}>
                <h1 className={"text-sm md:text-lg mt-4 md:mt-0 text-gray-400"}>
                    © 2024. All rights reserved.
                </h1>
                <div className={"flex gap-3 md:gap-4 lg:gap-4 flex-wrap my-2 sm:flex-nowrap sm:my-0"}>
                    {
                        links.map(({label, icon: Icon, link}) => <a href={link} key={label} className={"flex gap-2 justify-center items-center cursor-pointer"}>
                            <span>{<Icon className={"size-4"}/>}</span>
                            <span className={"text-xs sm:text-lg"}>{label}</span>
                            <span>{<FaArrowTrendUp />}</span>

                        </a>)
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;