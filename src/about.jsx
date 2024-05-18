import React from "react";

const About = () => {
    return(
        <>
             
            <section class="container mx-auto px-5 mt-[4rem] lg:mt-[4rem] mb-8 " id="about">

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

                                {/* A dedicated Front-end Developer based in Anambra, Delta State As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, and Tailwind;
                                <br />
                                I excel in designing and maintaining responsive websites that offer a smooth user experience.
                                <br />
                                My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code utilizing cutting-edge development tools and techniques.
                                <br />
                                I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications. */}
                            </div>

                            <div className="hidden flex-wrap gap-5 mt-2 items-center lg:flex">
                                <p className="md:text-lg font-bold uppercase border-r pr-5">Tech Stack</p>

                                <div><i class='bx bxl-html5 text-3xl'></i></div>
                                <div><i class='bx bxl-css3 text-3xl' ></i></div>
                                <div><i class='bx bxl-javascript text-3xl'></i></div>
                                <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                                <div><i class='bx bxl-react text-3xl' ></i></div>
                                <div><i class='bx bxl-nodejs text-3xl' ></i></div>
                                <div><i class='bx bxl-typescript text-3xl' ></i></div>
                            </div>
                        </div>
                </div> 
                    <div className="flex flex-wrap gap-5 mt-3 md:mt-8 items-center lg:hidden p-auto">
                                <p className="text-md font-bold uppercase border-r pr-5 md:text-lg">Tech Stack</p>

                                <div><i class='bx bxl-html5 text-3xl'></i></div>
                                <div><i class='bx bxl-css3 text-3xl' ></i></div>
                                <div><i class='bx bxl-javascript text-3xl'></i></div>
                                <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                                <div><i class='bx bxl-react text-3xl' ></i></div>
                                <div><i class='bx bxl-nodejs text-3xl' ></i></div>
                                <div><i class='bx bxl-typescript text-3xl' ></i></div>
                        </div>
            </section>
        </>
    )
}

export default About;












       






















{/*
                <div className="flex flex-wrap items-center justify-center lg:text-lg text-center mt-10 md:space-x-10">
                   
                    <div className="flex flex-col mb-8 lg:w-1/3 max-w-[18rem] rounded-md bg-gray-600 overflow-hidden">
                        <img src="/web-dev.jpg" alt=" profile" className="h-[17rem] object-cover"/>
                        <div className="relative py-4 px-3">
                                <span className="badge">js</span>
                                <span  className="badge">jdsssss</span>
                                <span className="badge">js</span>

                            <h2 className="mt-4 font-bold text-xl">
                                WEB DESIGNER
                            </h2>
                            <p className="text-[1.1rem]">A web dev that is good at what he does</p>
                        </ div>
                    </div>

                    <div className="flex flex-col mb-8 lg:w-1/3 max-w-[18rem] rounded-md bg-gray-600 overflow-hidden">
                        <img src="/web-dev.jpg" alt=" profile" className="h-[17rem] object-cover"/>
                        <div className="relative py-4 px-3">
                                <span className="badge">js</span>
                                <span  className="badge">jdsssss</span>
                                <span className="badge">js</span>

                            <h2 className="mt-4 font-bold text-xl">
                                WEB DESIGNER
                            </h2>
                            <p className="text-[1.1rem]">A web dev that is good at what he does</p>
                        </ div>
                    </div>

                    <div className="flex flex-col mb-8 lg:w-1/3 max-w-[18rem] rounded-md bg-gray-600 overflow-hidden">
                        <img src="/web-dev.jpg" alt=" profile" className="h-[17rem] object-cover"/>
                        <div className="relative py-4 px-3">
                                <span className="badge">js</span>
                                <span  className="badge">jdsssss</span>
                                <span className="badge">js</span>

                            <h2 className="mt-4 font-bold text-xl">
                                WEB DESIGNER
                            </h2>
                            <p className="text-[1.1rem]">A web dev that is good at what he does</p>
                        </ div>
                    </div>

                    
                    
                </div> */}