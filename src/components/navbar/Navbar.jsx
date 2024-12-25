import React, { useState } from 'react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const handleMouseEnter = (setState) => {
        clearTimeout(hoverTimeout); // Cancel any pending close operation
        setState(true);
    };

    const handleMouseLeave = (setState) => {
        setHoverTimeout(setTimeout(() => setState(false), 100)); // Reduce delay closing to 100ms
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-blue-500 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-5 py-3">
                {/* Logo and Text Section */}
                <div className="flex items-center gap-4">
                    <a href="/">
                        <img src="/kws-logo.png" alt="Logo" className="h-16 w-auto" />
                    </a>
                    <span className="text-2xl font-bold text-blue-500">
                        Kokan Welfare Society, Kuwait
                    </span>
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-8 items-center list-none m-0 p-0">
                    <li className="relative cursor-pointer">
                        <a href="/" className="hover:text-blue-500 transition-colors duration-300">HOME</a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setAboutDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setAboutDropdownOpen)}
                    >
                        <span className="hover:text-blue-500 transition-colors duration-300">ABOUT US</span>
                        {aboutDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/about/who-we-are" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/president-message" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            President's Message
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/vision-mission" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Our Vision Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about/executive-committee" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Executive Committee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setDropdownOpen)}
                    >
                        <span className="hover:text-blue-500 transition-colors duration-300">DOWNLOAD</span>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/downloads/sovenirs" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Sovenirs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/downloads/konkan-mela" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Kokan Mela
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/contact" className="hover:text-blue-500 transition-colors duration-300">CONTACT US</a>
                    </li>
                    <li
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(setMediaDropdownOpen)}
                        onMouseLeave={() => handleMouseLeave(setMediaDropdownOpen)}
                    >
                        <span className="hover:text-blue-500 transition-colors duration-300">MEDIA</span>
                        {mediaDropdownOpen && (
                            <div className="absolute left-0 mt-1 bg-white border border-gray-300 shadow-lg w-48">
                                <ul className="list-none m-0 p-0">
                                    <li>
                                        <a href="/media/photo-gallery" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/media/video-gallery" className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                                            Video Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/login" className="hover:text-blue-500 transition-colors duration-300">LOGIN</a>
                    </li>
                    <li className="relative cursor-pointer">
                        <a href="/register" className="hover:text-blue-500 transition-colors duration-300">REGISTER</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
