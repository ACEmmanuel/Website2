import React from 'react';
import Work from './work';
import { motion } from "framer-motion";

const Project = () => {

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
        <motion.section class="container mx-auto px-5 mt-[5rem] lg:mt-[8rem] mb-8" id="project" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        >

        

            <div className="underline-head mt-10 text-2xl lg:text-3xl font-medium font-rale ">Projects</div>
            <p className="mt-1 text-[17px] text-white/80">Here are my current projects you will find more in my github</p>

            <motion.div class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-[2rem] mt-8" variants={itemVariants}>

                <Work />
                

            </motion.div>

        </motion.section>
    </>
  )
}

export default Project;


// style={{backgroundImage: 'radial-gradient(circle at center center, #1d337c 0%, #17171f 50%)'}}