import messengerImage from "@/assets/projects/messenger.png"
import gaiImage from "@/assets/projects/gai.png"
import socialApp from "@/assets/projects/SocialApp.png"
import gql from "@/assets/projects/gql.png"
import chatty from "@/assets/projects/chatty.png"

export const projects = [
    {
        dateTitle: "2025",
        title: "Social Platform",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        descriptions: [
            "A fully type-safe social media application built with Next.js, featuring secure authentication, registration and login.",
            "Users can create posts with images and video, enjoy infinite scrolling, like and comment, and receive real-time notifications for likes, comments and new followers.",
            "Rich profile management, including updates to profile picture, display name and bio.",
            "Direct messaging with media sharing so users can interact with one another seamlessly.",
        ],
        link: "https://nextjs-social-app-paradox.vercel.app",
        img: socialApp,
        imgAlt: "Screenshot of the Social Platform app showing a post feed with likes and comments",
        github: "https://github.com/billalhossainjoy/nextjs_social_app"
    },
    {
        dateTitle: "2024",
        title: "CFM — Clearance Form Management System",
        tags: ["NestJS", "React", "Prisma", "Cloudflare"],
        descriptions: [
            "A full-stack application that manages student records and issues clearance forms to all graduating students.",
            "Built with a NestJS backend for a robust, scalable API.",
            "React-powered admin panel for managing data with ease.",
            "Prisma ORM for type-safe database access.",
            "Deployed on Vercel and served through Cloudflare.",
        ],
        link: "http://gai.gov.bd",
        img: gaiImage,
        imgAlt: "Screenshot of the CFM clearance form management dashboard",
        github: "https://github.com/billalhossainjoy/gai-clearance-form.git"
    },
    {
        dateTitle: "2025",
        title: "Messenger",
        tags: ["Next.js", "NextAuth", "Pusher", "Cloudinary"],
        descriptions: [
            "A fully type-safe Next.js messaging application with email and Google authentication powered by NextAuth.",
            "Real-time chat built with Pusher.",
            "Media and file uploads handled through Cloudinary.",
            "Prisma ORM for reliable database operations.",
        ],
        link: "https://nextjs-messenger.vercel.app/",
        img: messengerImage,
        imgAlt: "Screenshot of the Messenger app showing a real-time chat conversation",
        github: "https://github.com/billalhossainjoy/nextjs-messenger"
    },
    {
        dateTitle: "2024",
        title: "GQL — GraphQL Transaction Management",
        tags: ["React", "GraphQL", "MongoDB", "Node.js"],
        descriptions: [
            "A MERN-stack transaction management application built on GraphQL.",
            "Uses database transactions to safely manipulate data across multiple tables.",
        ],
        link: "http://graph-ql-transaction-app.vercel.app",
        img: gql,
        imgAlt: "Screenshot of the GraphQL transaction management dashboard with charts",
        github: "https://github.com/billalhossainjoy/GraphQL_Transaction-app.git"
    },
    {
        dateTitle: "2025",
        title: "Chatty — Real-time Chat over WebSockets",
        tags: ["Next.js", "WebSockets", "Cloudinary", "Prisma"],
        descriptions: [
            "A type-safe Next.js chat application with secure authentication and registration.",
            "Real-time messaging powered by native WebSockets for instant delivery.",
            "Media and file uploads handled through Cloudinary.",
            "Prisma ORM for efficient database operations.",
        ],
        img: chatty,
        imgAlt: "Screenshot of the Chatty app showing a real-time chat interface",
        github: "https://github.com/billalhossainjoy/nextjs-messenger"
    },
]


