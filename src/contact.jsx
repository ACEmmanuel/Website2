import React from "react";
import { motion } from "framer-motion";

const Contact = () => {

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
            <motion.section className="container mx-auto px-5 mt-[5rem] lg:mt-[8rem] mb-8" id="contact" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            >
                <div className="w-full">
                    <div className="underline-head mt-10 text-2xl lg:text-3xl font-medium font-rale ">Hire me</div>
                    <p className="mt-1 text-[17px] text-white/80">Contact me through the following means</p>


                    
                    <motion.div className="flex flex-col lg:flex-row justify-items-start items-start mt-8 gap-x-20" variants={itemVariants}>
                        <div className="w-[100%] md:w-[55%] lg:pr-7 border-b border-slate-700 pb-8 md:border-none">


                            <form className="space-y-6" action="https://formspree.io/f/mwkgjqag" method="POST">


                                <div className="space-y-3">
                                    <label className="label ">Name</label>
                                    <input className="text-box" type="text" name="name" placeholder="Enter Your Name..." required></input>
                                </div>

                                <div className="space-y-3">
                                    <label className="label">Gmail</label>
                                    <input className="text-box" type="email" name="email" placeholder="Enter Your Email..." required></input>
                                </div>
                                
                                <div className="space-y-3">
                                    <label className="label" for="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Enter Your Message Here..." cols="30" rows="10" className="w-full border rounded-sm border-slate-700 bg-gray-800 outline-none pl-4 pt-4 resize-none"></textarea>
                                </div>
                            
                                <button className="btn border-4 border-gray-400 hover:border-white/50" type="submit" value="SEND">Send it <i class='bx bxs-chevrons-right ml-2'></i> </button>
                            </form>
                        </div>











                        <div className="w-[100%] md:w-[45%] font-bold pt-10">
                            <p className="text-md md:text-lg w-full">Other Methods To Contact Me</p>
                            <div className="text-2xl mt-4 space-x-4">
                                <a href='https://github.com/ACEmmanuel' target='_blank'>
                                    <i class='bx bxl-github'></i></a> 
                                <a href='https://ahanotuemmanuel7@gmail.com/' target='_blank'>
                                    <i class='bx bxl-gmail' ></i>
                                </a> 
                                <a href='https://www.linkedin.com/in/emmanuel-chidera-b08479245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app' target='_blank'>  
                                    <i class='bx bxl-linkedin'></i>
                                </a> 
                            </div>
                        </div>

                    </motion.div>
                </div>
            </motion.section>
        </>
    )
};

export default Contact


                            // <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">

                            //     <input type="hidden" name="access_key" value="010493d8-a8a5-4340-8df3-cc813b83267d" />

                            //     <div className="space-y-3">
                            //         <label className="label ">Name</label>
                            //         <input className="text-box" type="text" name="name" placeholder="Enter Your Name..." required></input>
                            //     </div>

                            //     <div className="space-y-3">
                            //         <label className="label">Gmail</label>
                            //         <input className="text-box" type="email" name="email" placeholder="Enter Your Email..." required></input>
                            //     </div>
                                
                            //     <div className="space-y-3">
                            //         <label className="label" for="message">Message</label>
                            //         <textarea id="message" name="message" placeholder="Enter Your Message Here..." cols="30" rows="10" className="w-full border border-slate-700 bg-gray-800 outline-none pl-4 pt-4 resize-none"></textarea>
                            //     </div>
                            
                            //     <button className="btn border-4 border-gray-400 hover:border-white/50" type="submit" value="SEND">Send it <i class='bx bxs-chevrons-right ml-2'></i> </button>
                            // </form>