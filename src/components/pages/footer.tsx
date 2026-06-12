"use client";

import React from 'react';
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { email, links } from "@/components/links";
import { scroller } from "@/utils";

const NAV_LINKS = [
    { label: "Home",       id: "public"     },
    { label: "About",      id: "about"      },
    { label: "Skills",     id: "skills"     },
    { label: "Experience", id: "experience" },
    { label: "Projects",   id: "projects"   },
    { label: "Contact",    id: "contact"    },
];

const ICON_MAP: Record<string, React.ReactNode> = {
    GitHub:   <BsGithub   className={"size-4"} />,
    LinkedIn: <BsLinkedin className={"size-4"} />,
    Facebook: <BsFacebook className={"size-4"} />,
};

const Footer: React.FC = () => {
    return (
        <footer className={"relative bg-gray-950 border-t border-white/10 mt-10 overflow-hidden"}>
            {/* Subtle glow */}
            <div
                aria-hidden="true"
                className={"pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.04] blur-3xl"}
                style={{ background: "linear-gradient(to top, #4ade80, transparent)" }}
            />

            <div className={"relative max-w-6xl mx-auto px-6 pt-14 pb-8 space-y-12"}>

                {/* Top row */}
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-10"}>

                    {/* Brand */}
                    <div className={"space-y-4"}>
                        <div className={"flex items-center gap-3"}>
                            <div className={"size-10 rounded-xl bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-sm font-bold text-gray-900"}>
                                BH
                            </div>
                            <span className={"font-bold text-white text-lg"}>Billal Hossain</span>
                        </div>
                        <p className={"text-sm text-gray-400 leading-relaxed max-w-xs"}>
                            Full-Stack Developer crafting high-performing web and mobile applications with modern technologies.
                        </p>
                        <a
                            href={`mailto:${email}`}
                            className={"inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition duration-300"}
                        >
                            <HiMail className={"size-4"} />
                            {email}
                        </a>
                    </div>

                    {/* Quick nav */}
                    <div className={"space-y-4"}>
                        <h4 className={"text-xs font-semibold text-gray-500 uppercase tracking-widest"}>Navigation</h4>
                        <ul className={"space-y-2.5"}>
                            {NAV_LINKS.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        type={"button"}
                                        onClick={() => scroller(id)}
                                        className={"text-sm text-gray-400 hover:text-white transition duration-300 hover:translate-x-1 inline-flex items-center gap-1.5 group"}
                                    >
                                        <span className={"size-1 rounded-full bg-green-500/50 group-hover:bg-green-400 transition duration-300"} />
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className={"space-y-4"}>
                        <h4 className={"text-xs font-semibold text-gray-500 uppercase tracking-widest"}>Connect</h4>
                        <ul className={"space-y-3"}>
                            {links.map(({ label, link }) => (
                                <li key={label}>
                                    <a
                                        href={link}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        aria-label={label}
                                        className={"inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition duration-300 group"}
                                    >
                                        <span className={"size-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition duration-300"}>
                                            {ICON_MAP[label]}
                                        </span>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className={"h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"} />

                {/* Bottom row */}
                <div className={"flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600"}>
                    <p>© {new Date().getFullYear()} Billal Hossain. All rights reserved.</p>
                    <p className={"flex items-center gap-1.5"}>
                        Built with
                        <span className={"text-green-500/80"}>Next.js</span>·
                        <span className={"text-blue-400/80"}>TypeScript</span>·
                        <span className={"text-cyan-400/80"}>Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
