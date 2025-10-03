'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

// Load custom Magneto font
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

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string, href: string) => {
        e.preventDefault();
        setActiveItem(item);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = 80; // Adjust based on your navbar height
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    const getNavLinkClasses = (itemName: string) => {
        const baseClasses = `
      ${magneto.className} font-semibold text-white
      px-1.5 sm:px-3 md:px-4
      py-1 sm:py-2
      rounded-lg cursor-pointer relative
      transition-all duration-200
      text-[9px] sm:text-sm md:text-base
      flex items-center justify-center
      text-center
      whitespace-nowrap
    `;
        const activeClasses =
            activeItem === itemName
                ? 'after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-white'
                : 'hover:after:block hover:after:absolute hover:after:bottom-0 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-6 hover:after:h-[2px] hover:after:bg-gray-400';

        return `${baseClasses} ${activeClasses}`;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 2) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

            // Update active item based on scroll position
            const sections = navItems.map(item => ({
                id: item.href.replace('#', ''),
                name: item.name
            }));

            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveItem(sections[i].name);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            } bg-black/80 backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14 sm:h-20">
                    {/* Left Logo - smaller on mobile */}
                    <div className="flex-shrink-0 w-16 sm:w-30 md:w-40">
                        <Image
                            src="/logo.png"
                            alt="Elysian Logo"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Navigation Links - centered with flex-grow */}
                    <ul className="flex items-center justify-center gap-1 sm:gap-4 md:gap-6 flex-grow px-1">
                        {navItems.map((item, index) => (
                            <li key={index} className="text-center flex-shrink-0">
                                <a
                                    href={item.href}
                                    className={getNavLinkClasses(item.name)}
                                    onClick={(e) => handleItemClick(e, item.name, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Logo - hidden on mobile */}
                    <div className="hidden sm:block flex-shrink-0 w-24 sm:w-40 md:w-40">
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
