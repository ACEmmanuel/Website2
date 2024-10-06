import React from "react";
import { motion } from "framer-motion";

const About = () => {

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

    return(
        <>
             
            <motion.section class="container mx-auto px-5 mt-[4rem] lg:mt-[4rem] mb-8 " id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            >

                <div className="underline-head mt-10 text-2xl lg:text-3xl font-medium font-rale">About Me</div>
                <p className="mt-1 text-[17px] text-white/80">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

                <div class="flex flex-col md:flex-row  w-full gap-14 mt-8">
                        <div className=" max-w-[20rem]">
                            <img src="./web-dev.jpg" className="rounded-md"/>
                        </div>
                        <div className="max-w-sm lg:max-w-xl text-left flex flex-col justify-center">
                            <div className="mb-3 font-rale capitalize text-lg font-bold">
                                A dedicated front-end Developer based in anambra, nigeria.
                            </div>
                            <div className="text-balance lg:mb-16 mb-5">
                                I'm a Junior Front-End Developer from Anambra, Delta State. Skilled in HTML, CSS, JavaScript, React, and Tailwind, I specialize in creating responsive websites for seamless user experiences. 
                                <br />
                                I focus on writing clean, efficient code and enjoy collaborating with diverse teams to build outstanding web applications.

                                
                            </div>

                            <motion.div className="hidden flex-wrap gap-5 mt-2 items-center lg:flex" 
                            variants={itemVariants}
                            >
                                <p className="md:text-lg font-bold uppercase border-r pr-5">Tech Stack</p>

                                <div><i class='bx bxl-html5 text-3xl'></i></div>
                                <div><i class='bx bxl-css3 text-3xl' ></i></div>
                                <div><i class='bx bxl-javascript text-3xl'></i></div>
                                <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                                <div><i class='bx bxl-react text-3xl' ></i></div>
                                <div><i class='bx bxl-nodejs text-3xl' ></i></div>
                                <div><i class='bx bxl-typescript text-3xl' ></i></div>
                            </motion.div>
                        </div>
                </div> 
                    <motion.div className="flex flex-wrap gap-5 mt-3 md:mt-8 items-center lg:hidden p-auto"
                    variants={itemVariants}
                    >
                                <p className="text-md font-bold uppercase border-r pr-5 md:text-lg">Tech Stack</p>

                                <div><i class='bx bxl-html5 text-3xl'></i></div>
                                <div><i class='bx bxl-css3 text-3xl' ></i></div>
                                <div><i class='bx bxl-javascript text-3xl'></i></div>
                                <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                                <div><i class='bx bxl-react text-3xl' ></i></div>
                                <div><i class='bx bxl-nodejs text-3xl' ></i></div>
                                <div><i class='bx bxl-typescript text-3xl' ></i></div>
                        </motion.div>
            </motion.section>
        </>
    )
}

export default About;
