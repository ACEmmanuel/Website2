import {React, useState, useEffect} from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
    };

      
      
    return (
        <>  
            <header className="bg-[#17171ff] sticky top-0 z-10">
                <div className="container mx-auto relative ">
                    <div className="flex justify-between items-center py-8 px-8 z-10 backdrop-blur">
                        
                            <h2 className="text-xl md:text-2xl"><span className="font-bold ">ACE</span>mmanuel</h2>
                        
                        <nav className="">
                            <ul className="hidden gap-8 md:flex text-md">
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#home">Home</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#about">About</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#project">Portfolio</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#contact">Contact</a></li>
                            </ul>


                            
                            <div className="">
                                {isMenuOpen ? <span className="md:hidden" onClick={toggleMenu}> <i class='bx bx-x text-2xl'></i> </span> :  <span className="md:hidden" onClick={toggleMenu}> <i class='bx bx-menu text-2xl' ></i> </span>}
                                
                                {isMenuOpen && (
                                    <div className="modal text-center">
                                        <div><i class='bx bx-x-circle text-[4rem] absolute top-2 right-2' onClick={closeMenu}></i></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#home" className="uppercase">Home</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#about" className="uppercase">About</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#project" className="uppercase">Portfolio</a></div>
                                        <br />
                                        <div onClick={toggleMenu}><a href="#contact" className="uppercase">Contact</a></div>
                                    </div>
                                )}

                            </div>
                            {/* <div className="absolute bottom-0 left-0 w-full h-[400rem] ">
                                {active && (
                                    <div className="modal">
                                        <div>Modal</div>
                                    </div>
                                )}
                            </div> */}
                        </nav>
                        {/* <div className="hidden lg:block bg-blue-500 px-4 py-3 rounded-full text-white font-bold hover:bg-blue-300">Download CV</div> */}
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;

// 111A2E
{/* <header className={header ? 'bg-[#111a2ef1] text-white': 'bg-transparent sticky top-0 text-black' }></header> */}