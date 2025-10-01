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
        <section className="px-4 z-20">
            <div className="max-w-7xl mx-auto">
                <div
                    className={`text-center mb-20 transition-all duration-800 ease-out ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                </div>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
                        {mentors.map((mentor, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-600 ease-out ${
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <Card className="bg-transparent hover:bg-transparent transition-all duration-300 ease-out group border-0 shadow-none rounded-2xl overflow-clip">
                                    <CardContent className="p-0">
                                        <div className="relative w-full h-72 overflow-hidden">
                                            <Image
                                                src={mentor.image || "/placeholder.svg"}
                                                alt={mentor.name}
                                                fill
                                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-8 text-center">
                                            <h3 className="text-3xl font-medium text-white mb-3 tracking-wide">{mentor.name}</h3>
                                            <p className="text-gray-400 font-light text-sm uppercase tracking-widest mb-4">{mentor.position}</p>
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
