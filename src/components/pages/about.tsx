import React from 'react';

const About: React.FC = () => {
    return (
        <section id={"about"} className={"pt-20"}>
            <div className={"max-w-7xl mx-auto"}>
               <div className={"flex"}>
                   <div className={"space-y-6 w-full px-3 md:w-2/3 mx-auto"}>
                       <h1 className={"text-4xl font-bold text-center"}>Hi there! This is <span className={"bg-gradient-to-r from-green-400 to-green-700 text-transparent bg-clip-text"}>Billal Hossain</span> and I&apos;m a Fullstack Developer.</h1>
                       <p className={"text-lg text-gray-400 leading-8 text-center"}>
                           I am Billal Hossain. I&apos;m a computer engineer and I&apos;ve always been passionate about technology and eduction. A full stack engineering is not a short journey, it&apos;s like a part of our life, always thing&apos;s happens to learn and implement in work as needed and i enjoy that.
                       </p>
                   </div>
                   <div>
                       <div>
                           {/*<Image src={""} alt={"profile"} />*/}
                       </div>
                   </div>
               </div>
            </div>
        </section>
    );
};

export default About;