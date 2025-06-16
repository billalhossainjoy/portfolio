import {
    FaReact, FaNodeJs, FaDocker, FaLinux, FaCloudflare, FaGitAlt
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
    SiNestjs, SiPrisma, SiMongodb, SiExpress, SiApollographql,
    SiExpo, SiReactquery, SiPusher, SiSocketdotio, SiCloudinary,
    SiArduino, SiShadcnui, SiNginx, SiJest, SiRedis, SiGithubactions, SiRedux
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import {IconType} from "react-icons";


interface SkillIconOptions {
    label: string,
    icon: IconType,
    background: string,
    color?: string,
    url: string
}

export const frontendLibraries: SkillIconOptions[] = [
    { label: "React", icon: FaReact, background: "#61DBFB", url: "https://react.dev/" },
    { label: "Tailwind CSS", icon: BiLogoTailwindCss, background: "#06B6D4", url: "https://tailwindcss.com/" },
    { label: "React Query", icon: SiReactquery, background: "#FF4154", url: "https://tanstack.com/query/latest" },
    { label: "Shadcn UI", icon: SiShadcnui, background: "#000000", color: "white", url: "https://ui.shadcn.com/" },
    { label: "Jest", icon: SiJest, background: "#C21325", color: "white", url: "https://jestjs.io/" },
    { label: "Next.js", icon: TbBrandNextjs, background: "#000000", color: "white", url: "https://nextjs.org/" },
    { label: "TypeScript", icon: BiLogoTypescript, background: "#3178C6", url: "https://www.typescriptlang.org/" },
    { label: "Expo", icon: SiExpo, background: "#000020", color: "white", url: "https://expo.dev/" },
    { label: "Redux", icon: SiRedux, background: "#764ABC", color: "white", url: "https://redux.js.org/" },
];

export const backendLibraries: SkillIconOptions[] = [
    { label: "Node.js", icon: FaNodeJs, background: "#339933", url: "https://nodejs.org/" },
    { label: "Express.js", icon: SiExpress, background: "#000000", color: "white", url: "https://expressjs.com/" },
    { label: "Socket.io", icon: SiSocketdotio, background: "#010101", color: "white", url: "https://socket.io/" },
    { label: "NestJS", icon: SiNestjs, background: "#E0234E", url: "https://nestjs.com/" },
    { label: "TypeScript", icon: BiLogoTypescript, background: "#3178C6", url: "https://www.typescriptlang.org/" },
    { label: "Apollo GraphQL", icon: SiApollographql, background: "#311C87", url: "https://www.apollographql.com/" },
    { label: "Nginx", icon: SiNginx, background: "#009639", color: "white", url: "https://www.nginx.com/" },
    { label: "GraphQL", icon: GrGraphQl, background: "#E10098", url: "https://graphql.org/" },
    { label: "Jest", icon: SiJest, background: "#C21325", color: "white", url: "https://jestjs.io/" },
    { label: "Prisma", icon: SiPrisma, background: "white", url: "https://www.prisma.io/" },
];

export const databases: SkillIconOptions[] = [
    { label: "MongoDB", icon: SiMongodb, background: "#47A248", url: "https://www.mongodb.com/" },
    { label: "PostgreSQL", icon: DiPostgresql, background: "#336791", color: "white", url: "https://www.postgresql.org/" },
    { label: "Redis", icon: SiRedis, background: "#DC382D", color: "white", url: "https://redis.io/" }
];

export const othersLibraries: SkillIconOptions[] =  [
    { label: "Pusher", icon: SiPusher, background: "#0D99FF", color: "white", url: "https://pusher.com/" },
    { label: "Docker", icon: FaDocker, background: "#2496ED", url: "https://www.docker.com/" },
    { label: "Linux", icon: FaLinux, background: "#FCC624", url: "https://www.linux.org/" },
    { label: "Cloudflare", icon: FaCloudflare, background: "#F38020", url: "https://www.cloudflare.com/" },
    { label: "Cloudinary", icon: SiCloudinary, background: "#3448C5", color: "white", url: "https://cloudinary.com/" },
    { label: "Arduino", icon: SiArduino, background: "#00979D",color: "white", url: "https://www.arduino.cc/" },
    { label: "Git", icon: FaGitAlt, background: "#F05032", url: "https://git-scm.com/" },
    { label: "CI/CD", icon: SiGithubactions, background: "#2088FF", color: "white", url: "https://github.com/features/actions" }
];
