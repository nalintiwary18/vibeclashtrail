'use client'

import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";

const magnetoBold = localFont({
    src: '../public/fonts/MAGNETOB.woff',
    display: 'swap',
    variable: '--font-magneto-bold'
})

export default function EventTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0
    });

    // Set your event date here
    const eventDate = new Date('2025-10-15T23:59:59');
    const eventDateStr = '15.10.2025';
    const eventVenue = 'GGSIPU';

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={magnetoBold.className}>
            <div className="min-h-min overflow-clip bg-black flex flex-col items-center justify-start relative w-full pt-4 sm:pt-8 pb-1 px-4">
                {/* Title */}
                <h1 className={magnetoBold.className}>
                    <span className="text-gray-200 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Clash Begins in</span>
                </h1>

                {/* Main Timer */}
                <div className="flex justify-center mb-12 sm:mb-16 md:mb-24 mt-8 sm:mt-12 md:mt-16">
                    <div className="relative px-6 sm:px-10 md:px-16 py-6 sm:py-8 md:py-12 inline-block">
                        {/* Left bracket */}
                        <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-8 md:w-12 border-l-4 sm:border-l-8 md:border-l-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-l-xl sm:rounded-l-2xl md:rounded-l-3xl"></div>
                        {/* Right bracket */}
                        <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-8 md:w-12 border-r-4 sm:border-r-8 md:border-r-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-r-xl sm:rounded-r-2xl md:rounded-r-3xl"></div>

                        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 text-white">
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tabular-nums">
                                {String(timeLeft.days).padStart(2, '0')}
                            </div>
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">:</div>
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tabular-nums">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">:</div>
                            <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tabular-nums">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Date and Venue Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-24 lg:gap-48 max-w-4xl mx-auto w-full">
                    {/* Date */}
                    <div className="relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
                        {/* Left bracket */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 border-l-4 sm:border-l-8 md:border-l-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-l-xl sm:rounded-l-2xl md:rounded-l-3xl"></div>
                        {/* Right bracket */}
                        <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 border-r-4 sm:border-r-8 md:border-r-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-r-xl sm:rounded-r-2xl md:rounded-r-3xl"></div>

                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white italic mb-1 sm:mb-2">Date</h3>
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{eventDateStr}</p>
                        </div>
                    </div>

                    {/* Venue */}
                    <div className="relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
                        {/* Left bracket */}
                        <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 border-l-4 sm:border-l-8 md:border-l-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-l-xl sm:rounded-l-2xl md:rounded-l-3xl"></div>
                        {/* Right bracket */}
                        <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-6 md:w-8 border-r-4 sm:border-r-8 md:border-r-12 border-t-4 sm:border-t-8 md:border-t-12 border-b-4 sm:border-b-8 md:border-b-12 border-white rounded-r-xl sm:rounded-r-2xl md:rounded-r-3xl"></div>

                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white italic mb-1 sm:mb-2">Venue</h3>
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{eventVenue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}