import React from 'react';
import {FaArrowTrendUp} from "react-icons/fa6";

const Contact: React.FC = () => {
    return (
        <section className={" my-20"} id={'contact'}>
           <div className={"max-w-7xl bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-2xl p-10 flex flex-col md:flex-row gap-5 justify-between items-start md:items-center"}>
               <div>
                   <h1 className={"text-2xl text-black font-bold"}>If you have any queries you can ask.</h1>
               </div>
               <button className={"cursor-pointer bg-black text-white rounded-lg py-3 px-6 flex gap-2 justify-center items-center"}>
                   Contact Me <FaArrowTrendUp />
               </button>
           </div>
        </section>
    );
};

export default Contact;