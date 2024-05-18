import React from "react";
import Header from "./header";
import { useState } from "react";

const Hero = () => {
    return (
        <>
            {/* <Header /> */}
                <div className="container flex flex-wrap mx-auto  px-3 items-center justify-center h-[90vh]" id="home">
                    <div className="mx-auto text-center ">
                            <h1 className="text-[3.5rem] leading-none lg:text-7xl capitalize cursor-pointer font-medium font-rale">Bring your design to life</h1>
                            <p className="text-[17px] lg:text-[20px] mt-4">Frontend Web Developer specializing in websites and web apps.</p>

                            <div className="flex md:flex-row justify-center mt-[1.2rem] lg:mt-[2rem]"> 
                                <a href="#contact"> <div className="btn border-4 border-gray-400 hover:border-white">Hire Me</div> </a>
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