import { getAbout } from "@/lib/content";
import AboutClient from "./about-client";

export default function About() {
    const { description } = getAbout();
    return <AboutClient description={description} />;
}
