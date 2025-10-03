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
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Prize Pool', href: '#registration' },
        { name: 'Contact Us', href: '#contact-us' },
    ];

    const handleItemClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        item: string,
        href: string
    ) => {
        e.preventDefault();
        setActiveItem(item);
        setMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = 80;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    };

    const getNavLinkClasses = (itemName: string) => {
        const baseClasses = `
      ${magneto.className} font-semibold text-white
      px-4 py-3 md:px-4 md:py-2
      rounded-lg cursor-pointer relative
      transition-all duration-300
      text-base md:text-base
      flex items-center
      text-left md:text-center
      whitespace-nowrap
      w-full md:w-auto
    `;
        const activeClasses =
            activeItem === itemName
                ? 'bg-white/20 md:bg-transparent md:after:block md:after:absolute md:after:bottom-0 md:after:left-1/2 md:after:-translate-x-1/2 md:after:w-6 md:after:h-[2px] md:after:bg-white'
                : 'hover:bg-white/10 md:hover:bg-transparent md:hover:after:block md:hover:after:absolute md:hover:after:bottom-0 md:hover:after:left-1/2 md:hover:after:-translate-x-1/2 md:hover:after:w-6 md:hover:after:h-[2px] md:hover:after:bg-gray-400';

        return `${baseClasses} ${activeClasses}`;
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > window.innerHeight / 2) {
                        setShowNavbar(true);
                    } else {
                        setShowNavbar(false);
                    }

                    const sections = navItems.map((item) => ({
                        id: item.href.replace('#', ''),
                        name: item.name,
                    }));

                    const scrollPosition = window.scrollY + 150;

                    for (let i = sections.length - 1; i >= 0; i--) {
                        const section = document.getElementById(sections[i].id);
                        if (section) {
                            const sectionTop = section.offsetTop;
                            const sectionBottom = sectionTop + section.offsetHeight;

                            if (
                                scrollPosition >= sectionTop &&
                                scrollPosition < sectionBottom
                            ) {
                                setActiveItem(sections[i].name);
                                break;
                            }
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* NAVBAR */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    showNavbar
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0'
                } bg-black/80 backdrop-blur-md`}
            >
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16 md:h-20">
                        {/* Left Logo */}
                        <div className="flex-shrink-0 w-20 md:w-40">
                            <Image
                                src="/logo.png"
                                alt="Elysian Logo"
                                width={300}
                                height={300}
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Desktop Navigation Links */}
                        <ul className="hidden md:flex items-center justify-center gap-6 flex-grow">
                            {navItems.map((item, index) => (
                                <li key={index} className="text-center">
                                    <a
                                        href={item.href}
                                        className={getNavLinkClasses(item.name)}
                                        onClick={(e) =>
                                            handleItemClick(e, item.name, item.href)
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
              <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
              ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`}
                            ></span>
                        </button>

                        {/* Right Logo - Desktop only */}
                        <div className="hidden md:block flex-shrink-0 w-40">
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

            {/* MOBILE SIDE MENU + OVERLAY OUTSIDE NAV */}
            {/* Side Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-950 z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${
                    mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Close button */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white text-2xl focus:outline-none"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Vibe Logo */}
                    <div className="px-6 pb-4">
                        <Image
                            src="/Vibe.png"
                            alt="Vibe Logo"
                            width={200}
                            height={200}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Nav Links */}
                    <ul className="flex flex-col gap-2 px-4 mt-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
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
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
