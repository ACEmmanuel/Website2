import React from "react";
import { motion } from "framer-motion";

const Exp = () => {

     // Define animation variants for staggered children
     const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Time between each child's animation
            delayChildren: 0.3,   // Delay before the first child starts
        },
        },
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <>
            <motion.section className="container mx-auto mt-[6rem] lg:mt-[10rem]" id="exp"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            >
                <div className="w-full px-5">
                    <h1 className="underline-head mt-10 text-2xl lg:text-3xl font-medium font-rale">My Experience</h1>
                    <p className="mt-1 text-[17px] text-white/80">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

                                {/* double column */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start items-start mt-14" 
                    variants={itemVariants}
                    >


                                {/* first section */}
                        <div className=" max-w-[25rem] ">
                            <div className="centerly underline-head1 ">EDUCATION</div>
                            <br />  
                                <div className="parent border-l-2 border-slate-300 pl-[2.2rem] md:pl-[4rem] text-gray-100"> 
                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Universal Secondary & Primary School</h1>
                                                <div className="italic text-md">  <i class='bx bx-calendar mr-3 text-xl'></i> 2012 - 2015</div>
                                                <div className="italic text-md pt-2">Nusrey and Primary Schooling</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Ethiope Secondary School</h1>
                                                <div className="italic text-md">  <i class='bx bx-calendar mr-3 text-xl'></i> 2016 - 2017</div>
                                                <div className="italic text-md pt-2">Secondary schooling</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Federal Polytechnic Oko</h1>
                                                <div className="italic text-md ">  <i class='bx bx-calendar mr-3 text-xl'></i> 2018 - 2024</div>
                                                <div className="italic text-md pt-2">Estate Management and valuation</div>
                                            </div>
                                        </div>
                                    </div>


                            </div>    
                        </div>

                        {/* <br /> */}
 
                                {/* second section */}
                                
                        <div className=" max-w-[25rem]">
                            <div className="centerly underline-head1">EXPERIENCES</div>
                            <br />
                                <div className="parent border-l-2 border-slate-300 pl-[2.2rem] md:pl-[4rem] text-gray-100 "> 
                                    <div className="content rounded-lg mb-4">
                                        <div className="parent bg-[blue]">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Graphic Design Manager</h1>
                                                <div className="italic text-md">  <i class='bx bxs-briefcase-alt-2 mr-3 text-xl'></i> 2017 - 2018</div>
                                                <div className="italic text-md pt-2">TT&T Enterprise</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Graphic Designer</h1>
                                                <div className="italic text-md ">  <i class='bx bxs-briefcase-alt-2 mr-3 text-xl'></i> 2020 - 2024</div>
                                                <div className="italic text-md pt-2">MoreLife Exchange</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Front-End Web Developer</h1>
                                                <div className="italic text-md ">  <i class='bx bxs-briefcase-alt-2 mr-3 text-xl'></i> 2022 - 2024</div>
                                                <div className="italic text-md pt-2">ACE graphic</div>
                                            </div>
                                        </div>
                                    </div>


                            </div>
                        </div>


                </motion.div>
            </div>
        </motion.section>
        </>
    )
}


export default Exp;