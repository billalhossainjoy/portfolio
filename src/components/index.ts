import messengerImage from "@/assets/projects/messenger.png"
import gaiImage from "@/assets/projects/gai.png"
import socialApp from "@/assets/projects/SocialApp.png"
import gql from "@/assets/projects/gql.png"
import chatty from "@/assets/projects/chatty.png"

export const projects = [
    {
        dateTitle: "2025",
        title: "Social Platform.",
        desriptions: [
            "Complete type safe Next.js Social media application with login, registration Authentication.",
            "User can post with image, video etc. View infinity Scrolling and like, comment in post. Notifications for like, comment, following.",
            "Profile Update with features available like change profile picture, name bio etc.",
            "User send messages, share media files and interact any users.",
        ],
        link: "https://nextjs-social-app-paradox.vercel.app",
        img: socialApp,
        github: "https://github.com/billalhossainjoy/nextjs_social_app"
    },
    {
        dateTitle: "2024",
        title: "CFM ( Clearance Form Management system ).",
        desriptions: [
            "Complete full Stack application handle students data and provide clearance form all passed students.",
            "Using nest.js to make server.",
            "Using React to make Admin panel.",
            "Prisma orm for Database.",
            "Hosted on vercel via cloudflare"
        ],
        link: "http://gai.gov.bd",
        img: gaiImage,
        github: "https://github.com/billalhossainjoy/gai-clearance-form.git"
    },
    {
        dateTitle: "2025",
        title: "Messenger.",
        desriptions: [
            "Complete TypeSafe Next.js messenger application with login, registration, google provider etc using Next Auth ." ,
            "Real-time Chat feature using pusher.js ." ,
            "File upload using cloudinary." ,
            "Using prisma orm to execution Database executions."
        ],
        link: "https://nextjs-messenger.vercel.app/",
        img: messengerImage,
        github: "https://github.com/billalhossainjoy/nextjs-messenger"
    },
    {
        dateTitle: "2024",
        title: "GQL ( GraphQL Transaction Management ).",
        desriptions: [
            "Complete MERN stack Transaction management app using GraphQL.",
            "Using transactions to handle multiple tables data manipulation."
        ],
        link: "http://graph-ql-transaction-app.vercel.app",
        img: gql,
        github: "https://github.com/billalhossainjoy/GraphQL_Transaction-app.git"
    },
    {
        dateTitle: "2025",
        title: "Chatty! ( Chat App using Web-Socket ).",
        desriptions: [
            "Complete TypeSafe Next.js messenger application with login, registration, google provider etc using Next Auth .",
            "Real-time Chat feature using pusher.js .",
            "File upload using cloudinary.",
            "Using prisma orm to execution Database executions."
        ],
        img: chatty,
        github: "https://github.com/billalhossainjoy/nextjs-messenger"
    },

]


