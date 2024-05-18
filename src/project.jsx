import React from 'react';
import Work from './work';

const Project = () => {
  return (
    <>
        <section class="container mx-auto px-5 mt-[5rem] lg:mt-[8rem] mb-8" id="project" >

        

            <div className="underline-head mt-10 text-2xl lg:text-3xl font-medium font-rale ">Projects</div>
            <p className="mt-1 text-[17px] text-white/80">Here are my current projects you will find more in my github</p>

            <div class="flex flex-col md:flex-row flex-wrap justify-start items-start gap-[2rem] mt-8">

                <Work />
                

            </div>

        </section>
    </>
  )
}

export default Project;


// style={{backgroundImage: 'radial-gradient(circle at center center, #1d337c 0%, #17171f 50%)'}}