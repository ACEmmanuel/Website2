import React from "react";

const Exp = () => {
    return (
        <>
            <section className="container mx-auto mt-[6rem] lg:mt-[10rem]" id="exp">
                <div className="w-full px-10">
                    <h1 className="underline-head text-xl md:text-2xl lg:text-3xl font-bold ">My Experience</h1>
                    <p className="md:text-lg mt-2">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

                                {/* double column */}
                    <div className="flex flex-wrap justify-start items-center lg:flex-row mt-8 gap-x-28">


                                {/* first section */}
                        <div className="md:w-1/2 max-w-sm mt-4 ">
                            <div className="centerly underline-head1 ">EDUCATION</div>
                            <br />  
                                <div className="parent border-l-2 border-slate-300 pl-[2.5rem] md:pl-[4rem] text-gray-100"> 
                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Universal Secondary School</h1>
                                                <div className="italic text-md">  <i class='bx bx-calendar mr-3 text-xl'></i> 2012 - 2015</div>
                                                <div className="italic text-md pt-2">Initial Study</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">Ethiope Secondary School</h1>
                                                <div className="italic text-md">  <i class='bx bx-calendar mr-3 text-xl'></i> 2016 - 2017</div>
                                                <div className="italic text-md pt-2">Switched school due to financial reasons</div>
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

 
                                {/* second section */}
                                
                        <div className="md:w-1/2 max-w-sm mt-4 mb-8">
                            <div className="centerly underline-head1">EXPERIENCE</div>
                            <i class='bx bxs-briefcase-alt-2 mr-3 text-xl'></i>
                            <br />
                                <div className="parent border-l-2 border-slate-300 pl-[2.5rem] md:pl-[4rem] text-gray-100 "> 
                                    <div className="content rounded-lg mb-4">
                                        <div className="parent bg-[blue]">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">ACEmmanuel</h1>
                                                <div className="italic text-md font-bold">  <i class="fa-solid fa-bars mr-3"></i> 2018 - 2024</div>
                                                <div className="italic text-md pt-2">Studied at federal poly oko</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">ACEmmanuel</h1>
                                                <div className="italic text-md font-bold">  <i class="fa-solid fa-bars mr-3"></i> 2018 - 2024</div>
                                                <div className="italic text-md pt-2">Studied at federal poly oko</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content rounded-lg mb-4">
                                        <div className="parent border border-slate-700 bg-gray-800">
                                            <div className="contentLine px-8 py-4">
                                                <h1 className="font-bold text-lg max-text-lg">ACEmmanuel</h1>
                                                <div className="italic text-md font-bold">  <i class="fa-solid fa-bars mr-3"></i> 2018 - 2024</div>
                                                <div className="italic text-md pt-2">Studied at federal poly oko</div>
                                            </div>
                                        </div>
                                    </div>


                            </div>
                        </div>


                </div>
            </div>
        </section>
        </>
    )
}


export default Exp;