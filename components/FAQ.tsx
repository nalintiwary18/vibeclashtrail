'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is VibeClash and how is it different from a regular hackathon or ideathon?",
            answer: "VibeClash is not just about coding or pitching ideas—it’s about solving problems creatively with unexpected twists. Unlike traditional hackathons, surprises like themes, constraints, or judge challenges keep participants on their toes.",
        },
        {
            question: "Who can participate?",
            answer: "All students from GGSIPU and affiliated colleges are welcome to participate in the event."
        },
        {
            question: "Is there any registration fee?",
            answer: "No, the event is completely free to attend. Just register on our platform before the deadline."
        },
        {
            question: "What happens on Day 1 and Day 2?",
            answer: "On Day 1, 60 shortlisted teams work on problem statements, and only the top 20–30 move forward. On Day 2 (14th October), finalist teams tackle the same problem statement with exciting twists and surprise challenges."
        },
        {
            question: "Will there be prizes?",
            answer: "Yes! We have exciting prizes for the top performers including cash prizes, certificates, and goodies."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="h-screen flex items-center justify-center z-20 p-8">
            <div className="w-full max-w-4xl">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between"
                            >
                                <h3 className="text-2xl font-semibold text-white pr-4">{faq.question}</h3>
                                <ChevronDown
                                    className={`w-8 h-8 text-white flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 pb-6 text-xl text-white/70 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}