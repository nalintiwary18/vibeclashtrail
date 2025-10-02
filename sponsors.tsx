"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const sponsors = [
    {
        name: "unStop",
        image: "/Sponsors/unstop.png",
    },
    {
        name: "GDG Delhi",
        image: "/Sponsors/GDGD.png",
    },
    {
        name: "GDG Noida",
        image: "/Sponsors/GDGN.png",
    }
]

export default function SponsorsSection() {
    const infiniteSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors]

    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden">
                    <div className="flex animate-infinite-scroll space-x-4 sm:space-x-6">
                        {infiniteSponsors.map((sponsor, index) => (
                            <Card
                                key={`${sponsor.name}-${index}`}
                                className="flex-shrink-0 w-40 h-36 sm:w-48 sm:h-44 md:w-56 md:h-52 bg-transparent border-0 transition-all duration-300 group flex items-center justify-center"
                            >
                                <CardContent className="p-1 w-full h-full flex items-center justify-center bg-transparent">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={sponsor.image || "/placeholder.svg"}
                                            alt={sponsor.name}
                                            width={100}
                                            height={100}
                                            className="object-contain transition-transform duration-300 group-hover:scale-105 max-w-full max-h-full"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 4));
                    }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                    width: max-content;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}