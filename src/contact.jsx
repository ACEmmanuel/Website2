import React from "react";

const Contact = () => {
    return (
        <>
            <section className="container mx-auto px-10 mt-[5rem] lg:mt-[8rem] mb-8" id="contact">
                <div className="w-full">
                    <div className="underline-head mt-10 text-xl md:text-2xl lg:text-3xl font-bold ">Hire me</div>
                    <p className="mt-1 md:text-lg">Contact me through the following means</p>


                    {/* grid-cols-1 md:grid-cols-2 */}
                    <div className="flex flex-col lg:flex-row justify-items-start items-start mt-8 gap-x-20">
                        <div className="w-[100%] md:w-[55%] lg:pr-7 border-b border-slate-700 pb-8 md:border-none">
                            <form className="space-y-6">
                                <div className="space-y-3">
                                    <label className="label md:text-lg">Name</label>
                                    <input type="text" className="text-box"></input>
                                </div>

                                <div className="space-y-3">
                                    <label className="label md:text-lg">Gmail</label>
                                    <input type="text" className="text-box"></input>
                                </div>
                                
                                <div className="space-y-3">
                                    <label className="label md:text-lg">Message</label>
                                    <textarea name="" id="" cols="30" rows="10" className="w-full border border-slate-700 bg-gray-800 outline-none pl-4 pt-4 resize-none"></textarea>
                                </div>
                                

                                <button className="btn flex items-center md:text-md">Send it <i class='bx bxs-chevrons-right ml-2'></i> </button>
                            </form>
                        </div>

                        <div className="w-[40%] md:w-[45%] font-bold pt-10">
                            <p className="text-sm md:text-lg w-full">Other Methods To Contact Me</p>
                            <div className="text-2xl mt-4 space-x-4"> 
                            <i class='bx bxl-github'></i>
                            <i class='bx bxl-gmail' ></i>
                            <i class='bx bxl-linkedin'></i>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact