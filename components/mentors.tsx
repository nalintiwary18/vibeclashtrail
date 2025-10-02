"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useEffect, useState } from "react"

const mentors = [
    {
        name: "Dr. Neeta Singh",
        image: "/Team/neetamaam.webp",
        position: "Assistant professor",
    },
    {
        name: "Dr. Amar Arora",
        image: "/Team/amarsir.webp",
        position: "Assistant professor",
    },
]

export default function MentorSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="px-4 sm:px-6 md:px-8 z-20 py-8 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-800 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-4xl w-full">
                        {mentors.map((mentor, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-600 ease-out ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <Card className="bg-transparent hover:bg-transparent transition-all duration-300 ease-out group border-0 shadow-none rounded-xl sm:rounded-2xl overflow-clip">
                                    <CardContent className="p-0">
                                        <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden rounded-xl sm:rounded-2xl">
                                            <Image
                                                src={mentor.image || "/placeholder.svg"}
                                                alt={mentor.name}
                                                fill
                                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-4 sm:p-6 md:p-8 text-center">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 sm:mb-3 tracking-wide">{mentor.name}</h3>
                                            <p className="text-gray-400 font-light text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">{mentor.position}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}