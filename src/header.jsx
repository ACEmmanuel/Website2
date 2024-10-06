import { React, useState, useEffect } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
    };

    // Close menu function
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
    };

    // Scroll effect for blur
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="bg-[#17171ff] sticky top-0 z-10">
                <div className="container mx-auto relative">
                    <div className={`flex justify-between items-center py-8 px-8 z-10 ${isScrolled ? 'backdrop-blur' : ''}`}>
                        <h2 className="text-xl md:text-2xl">
                            <span className="font-bold">ACE</span>mmanuel
                        </h2>

                        <nav className="">
                            <ul className="hidden gap-8 md:flex text-md">
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#home">Home</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#about">About</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#project">Portfolio</a></li>
                                <li className="hover:text-blue-400 cursor-pointer font-bold"><a href="#contact">Contact</a></li>
                            </ul>

                            <div className="">
                                {isMenuOpen ? (
                                    <span className="md:hidden" onClick={toggleMenu}>
                                        <i className='bx bx-x text-2xl'></i>
                                    </span>
                                ) : (
                                    <span className="md:hidden" onClick={toggleMenu}>
                                        <i className='bx bx-menu text-2xl'></i>
                                    </span>
                                )}

                                {isMenuOpen && (
                                    <div className="modal text-center">
                                        <div>
                                            <i className='bx bx-x-circle text-[4rem] absolute top-2 right-2' onClick={closeMenu}></i>
                                        </div>
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
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
