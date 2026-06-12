import {
    FaReact, FaNodeJs, FaDocker, FaLinux, FaCloudflare, FaGitAlt, FaAws,
} from "react-icons/fa";
import {
    TbBrandNextjs, TbBrandAzure,
} from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import {
    SiNestjs, SiPrisma, SiMongodb, SiExpress, SiApollographql,
    SiExpo, SiReactquery, SiPusher, SiSocketdotio, SiCloudinary,
    SiArduino, SiShadcnui, SiNginx, SiJest, SiRedis, SiGithubactions, SiRedux, SiAppwrite,
    SiHono, SiSqlite, SiOpenai, SiSupabase,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { IconType } from "react-icons";

export interface SkillIconOptions {
    label: string;
    icon: IconType;
    background: string;
    color?: string;
    url: string;
}

/* ── Frontend ──────────────────────────────────────────────────── */

export const frontendLibraries: SkillIconOptions[] = [
    { label: "React",       icon: FaReact,           background: "#61DBFB",                  url: "https://react.dev/"                       },
    { label: "Next.js",     icon: TbBrandNextjs,     background: "#404040", color: "#ffffff", url: "https://nextjs.org/"                      },
    { label: "TypeScript",  icon: BiLogoTypescript,  background: "#3178C6",                  url: "https://www.typescriptlang.org/"           },
    { label: "Tailwind CSS",icon: BiLogoTailwindCss, background: "#06B6D4",                  url: "https://tailwindcss.com/"                  },
    { label: "React Query", icon: SiReactquery,      background: "#FF4154",                  url: "https://tanstack.com/query/latest"         },
    { label: "Shadcn UI",   icon: SiShadcnui,        background: "#404040", color: "#ffffff", url: "https://ui.shadcn.com/"                   },
    { label: "Redux",       icon: SiRedux,           background: "#764ABC", color: "#ffffff", url: "https://redux.js.org/"                    },
    { label: "Expo",        icon: SiExpo,            background: "#404040", color: "#ffffff", url: "https://expo.dev/"                        },
    { label: "Jest",        icon: SiJest,            background: "#C21325", color: "#ffffff", url: "https://jestjs.io/"                       },
];

/* ── Backend ───────────────────────────────────────────────────── */

export const backendLibraries: SkillIconOptions[] = [
    { label: "Node.js",       icon: FaNodeJs,        background: "#339933",                  url: "https://nodejs.org/"                      },
    { label: "NestJS",        icon: SiNestjs,        background: "#E0234E",                  url: "https://nestjs.com/"                      },
    { label: "Express.js",   icon: SiExpress,        background: "#404040", color: "#ffffff", url: "https://expressjs.com/"                   },
    { label: "Hono",          icon: SiHono,          background: "#E36002", color: "#ffffff", url: "https://hono.dev/"                        },
    { label: "GraphQL",       icon: GrGraphQl,       background: "#E10098",                  url: "https://graphql.org/"                     },
    { label: "Apollo GraphQL",icon: SiApollographql, background: "#311C87", color: "#ffffff", url: "https://www.apollographql.com/"           },
    { label: "Prisma",        icon: SiPrisma,        background: "#5A67D8", color: "#ffffff", url: "https://www.prisma.io/"                   },
    { label: "Socket.io",     icon: SiSocketdotio,   background: "#404040", color: "#ffffff", url: "https://socket.io/"                       },
    { label: "Appwrite",      icon: SiAppwrite,      background: "#F02E65", color: "#ffffff", url: "https://appwrite.io/"                     },
    { label: "Supabase",      icon: SiSupabase,      background: "#3ECF8E", color: "#ffffff", url: "https://supabase.com/"                    },
];

/* ── Databases ─────────────────────────────────────────────────── */

export const databases: SkillIconOptions[] = [
    { label: "PostgreSQL", icon: DiPostgresql, background: "#336791", color: "#ffffff", url: "https://www.postgresql.org/"  },
    { label: "MongoDB",    icon: SiMongodb,    background: "#47A248",                  url: "https://www.mongodb.com/"      },
    { label: "Redis",      icon: SiRedis,      background: "#DC382D", color: "#ffffff", url: "https://redis.io/"            },
    { label: "SQLite",     icon: SiSqlite,     background: "#003B57", color: "#ffffff", url: "https://www.sqlite.org/"      },
];

/* ── DevOps ────────────────────────────────────────────────────── */

export const devopsLibraries: SkillIconOptions[] = [
    { label: "AWS",            icon: FaAws,           background: "#FF9900", color: "#000000", url: "https://aws.amazon.com/"               },
    { label: "Azure",          icon: TbBrandAzure,    background: "#0078D4", color: "#ffffff", url: "https://azure.microsoft.com/"          },
    { label: "Docker",         icon: FaDocker,        background: "#2496ED",                  url: "https://www.docker.com/"               },
    { label: "Nginx",          icon: SiNginx,         background: "#009639", color: "#ffffff", url: "https://www.nginx.com/"                },
    { label: "Cloudflare",     icon: FaCloudflare,    background: "#F38020",                  url: "https://www.cloudflare.com/"           },
    { label: "GitHub Actions", icon: SiGithubactions, background: "#2088FF", color: "#ffffff", url: "https://github.com/features/actions"   },
    { label: "Linux",          icon: FaLinux,         background: "#FCC624",                  url: "https://www.linux.org/"                },
];

/* ── Others ────────────────────────────────────────────────────── */

export const othersLibraries: SkillIconOptions[] = [
    { label: "Cursor",     icon: VscCode,        background: "#7C3AED", color: "#ffffff", url: "https://cursor.sh/"                 },
    { label: "Codex",      icon: SiOpenai,     background: "#412991", color: "#ffffff", url: "https://openai.com/blog/openai-codex"},
    { label: "Git",        icon: FaGitAlt,     background: "#F05032",                  url: "https://git-scm.com/"               },
    { label: "Cloudinary", icon: SiCloudinary, background: "#3448C5", color: "#ffffff", url: "https://cloudinary.com/"            },
    { label: "Pusher",     icon: SiPusher,     background: "#0D99FF", color: "#ffffff", url: "https://pusher.com/"                },
    { label: "Arduino",    icon: SiArduino,    background: "#00979D", color: "#ffffff", url: "https://www.arduino.cc/"            },
];
