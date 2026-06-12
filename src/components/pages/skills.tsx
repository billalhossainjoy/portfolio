"use client"

import React, { useState, useEffect, useRef } from 'react';
import { backendLibraries, databases, devopsLibraries, frontendLibraries, othersLibraries } from "@/components/icons";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";
import WordReveal from "@/components/word-reveal";

/* ── helpers ───────────────────────────────────────────────────── */

const hexToRgba = (hex: string, opacity: number) => {
    const h = hex.replace("#", "");
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/* ── types ─────────────────────────────────────────────────────── */

interface SkillItem {
    label: string;
    icon: IconType;
    background: string;
    color?: string;
    url: string;
}

/* ── tab definitions ───────────────────────────────────────────── */

const TABS = [
    { id: "frontend",  label: "Frontend",  items: frontendLibraries },
    { id: "backend",   label: "Backend",   items: backendLibraries  },
    { id: "databases", label: "Databases", items: databases         },
    { id: "devops",    label: "DevOps",    items: devopsLibraries   },
    { id: "others",    label: "Others",    items: othersLibraries   },
] as const;

type TabId = typeof TABS[number]["id"];

/* ── skill card ─────────────────────────────────────────────────── */

const SkillCard: React.FC<SkillItem> = ({ label, icon: Icon, background, color, url }) => {
    const iconColor = color ?? background;
    const bgTint    = hexToRgba(background, 0.12);
    const hoverGlow = hexToRgba(background, 0.25);
    const borderTint = hexToRgba(background, 0.35);

    return (
        <a
            href={url}
            target={"_blank"}
            rel={"noopener noreferrer"}
            aria-label={`Learn more about ${label}`}
            className={"group relative flex flex-col items-center gap-3 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1"}
            style={{
                background: bgTint,
                borderColor: borderTint,
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = hoverGlow;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${hexToRgba(background, 0.2)}`;
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = bgTint;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
        >
            {/* Icon circle */}
            <div
                className={"flex items-center justify-center size-12 rounded-xl"}
                style={{ background: hexToRgba(background, 0.2) }}
            >
                <Icon className={"size-6 transition duration-300 group-hover:scale-110"} style={{ color: iconColor }} />
            </div>

            {/* Label */}
            <span className={"text-sm font-medium text-gray-300 group-hover:text-white transition duration-300 text-center leading-tight"}>
                {label}
            </span>
        </a>
    );
};

/* ── main section ───────────────────────────────────────────────── */

const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabId>("frontend");
    // Increment to force re-mount of grid and replay stagger animation on tab change
    const [animKey, setAnimKey] = useState(0);
    // Scroll reveal for header
    const headerRef = useRef<HTMLDivElement>(null);
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setHeaderVisible(true); obs.disconnect(); }
        }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const handleTabChange = (id: TabId) => {
        setActiveTab(id);
        setAnimKey((k) => k + 1);
    };

    const currentItems = TABS.find((t) => t.id === activeTab)?.items ?? [];

    return (
        <section id={"skills"} className={"pt-24 pb-8 px-6"}>
            <div className={"max-w-5xl mx-auto space-y-12"}>

                {/* Header */}
                <div
                    ref={headerRef}
                    className={"text-center space-y-4 transition-all duration-700"}
                    style={{
                        opacity:   headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(32px)",
                    }}
                >
                    <p className={"font-serif bg-gradient-to-r text-3xl from-green-400 to-green-700 inline-block text-transparent bg-clip-text"}>
                        Skills
                    </p>
                    <WordReveal
                        text={"Libraries & Frameworks"}
                        as={"h2"}
                        className={"text-5xl font-bold"}
                        stagger={60}
                    />
                    <p className={"text-lg text-gray-400"}>Tools and technologies I work with day to day.</p>
                </div>

                {/* Tab bar */}
                <div
                    className={"flex justify-center transition-all duration-700"}
                    style={{
                        opacity:   headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                        transitionDelay: "200ms",
                    }}
                >
                    <div className={"inline-flex gap-1 p-1 rounded-xl border border-white/10 bg-white/5"}>
                        {TABS.map(({ id, label, items }) => (
                            <button
                                key={id}
                                type={"button"}
                                onClick={() => handleTabChange(id)}
                                className={twMerge(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                    activeTab === id
                                        ? "bg-white text-gray-900 shadow-sm"
                                        : "text-white/60 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {label}
                                <span className={twMerge(
                                    "ml-2 text-xs px-1.5 py-0.5 rounded-full",
                                    activeTab === id
                                        ? "bg-gray-900/20 text-gray-700"
                                        : "bg-white/10 text-white/50"
                                )}>
                                    {items.length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid — re-keyed on animKey so each tab-switch replays all card animations */}
                <div
                    key={animKey}
                    className={"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3"}
                    style={{ animation: "fadeIn 0.25s ease both" }}
                >
                    {currentItems.map((skill, i) => (
                        <div
                            key={skill.label}
                            className={"animate-flip-up"}
                            style={{ animationDelay: `${i * 35}ms`, animationFillMode: "both" }}
                        >
                            <SkillCard {...skill} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;