import React from 'react';
import Header from "@/components/pages/header";
import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Footer from "@/components/pages/footer";
import BottomEffect from "@/components/bottomEffect";
import Skills from "@/components/pages/skills";
import Contact from "@/components/pages/contact";
import About from "@/components/pages/about";

const Home: React.FC = () => {
    return (
        <div className={"relative"}>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <BottomEffect />
        </div>
    );
};

export default Home;