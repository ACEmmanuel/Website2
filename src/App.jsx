import { useState } from "react";
import React from "react";
import Header from "./header"
import Hero from "./hero";
import About from './about';
import Exp from './exp';
import Contact from './contact';
import Project from "./project";
import Test from "./test"


 function App() {

  return (
    <>
        {/* <div class="absolute z-[-99] h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,transparent_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div> */}
        <Header />
        <Hero />
        <About />
        <Exp />
        <Project /> 
        <Contact /> 
        <Test />
    </>
  )
}





export default App
