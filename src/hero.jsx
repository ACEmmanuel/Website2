import React from "react";
import Header from "./header";
import { useState } from "react";

const Hero = () => {
    return (
        <>
            <Header />
                <div className="container flex flex-wrap mx-auto md:flex-row  px-8 items-center justify-center h-[90vh]">
                    <div className="w-full text-center">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-none capitalize cursor-pointer font-bold">Bringing your design to life</h1>
                            <p className="text-md md:text-md lg:text-xl mt-6 md:px-8">Frontend Web Developer specializing in websites and web apps. Explore my work and reach out for job opportunities.</p>
                            <div className="flex md:flex-row flex-column flex-wrap gap-3 justify-center lg:mt-[4rem] mt-[3rem] "> 
                            <a href="./man.jpg" download="ACEmmanuel CV"> <div className="btn">Download CV</div> </a>
                                <div className="btn-bdr">Hire Me</div>
                            </div>  
                    </div>  
                    {/* <div className="max-w-md lg:w-[40%]" >
                        <img src="/kkk.png" alt=" profile" className="rounded-lg ml-auto aspect-square object-cover object-left" />
                    </div> */}
                </div>
                
        </>
    )
}


export default Hero;


 {/* <a href="./man.jpg" download="ACE CV"><div className="bg-blue-600 font-bold px-8 py-[.7rem] md:py-[1rem] rounded-sm text-white hover:bg-blue-400 text-center cursor-pointer text-sm md:text-md lg:text-xl">Download CV</div></a> 
    <div className="border border-blue-600 font-bold px-8 py-[.7rem] md:py-[1rem] rounded-sm text-white hover:bg-blue-600 cursor-pointer hover:text-[#17171f] text-centercursor-pointer text-sm md:text-md lg:text-xl">Hire Me</div>  */}