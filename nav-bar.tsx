'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

// Load custom Magneto font from public/fonts
const magneto = localFont({
    src: '../public/fonts/MAGNETOB.woff',
    display: 'swap',
    variable: '--font-magneto',
});

interface NavItem {
    name: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('About Us');
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Prize Pool', href: '#registration' },
        { name: 'Contact Us', href: '#contact-us' },
    ];

    const handleItemClick = (item: string) => setActiveItem(item);

    const getNavLinkClasses = (itemName: string) => {
        const baseClasses = `
      ${magneto.className} font-semibold text-white
      px-1 sm:px-3 md:px-4
      py-1 sm:py-2
      rounded-lg cursor-pointer relative
      transition-all duration-200
      text-[clamp(0.35rem,2.5vw,1.1rem)]
      flex items-center justify-center
    `;

        const activeClasses =
            activeItem === itemName
                ? 'after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-white'
                : 'hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-6 hover:after:h-[2px] hover:bg-gray-400';

        return `${baseClasses} ${activeClasses}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            // show navbar only AFTER half of the screen is scrolled
            if (window.scrollY > window.innerHeight / 2) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                showNavbar
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
            } bg-black/80 backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Left Logo */}
                    <div className="w-16 sm:w-24">
                        <Image
                            src="/logo.png"
                            alt="Elysian Logo"
                            width={500}
                            height={500}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className={getNavLinkClasses(item.name)}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleItemClick(item.name);
                                    }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Logo */}
                    <div className="w-24 sm:w-40">
                        <Image
                            src="/Vibe.png"
                            alt="Vibe Logo"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;