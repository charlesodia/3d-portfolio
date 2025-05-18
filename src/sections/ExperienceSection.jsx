import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import { expCards } from "../constants/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lambo from "../components/Models/lambo/lambo.jsx";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    // useGSAP(() => {
    //     gsap.utils.toArray('.timeline-card').forEach((card) => {
    //         gsap.from(card, {
    //             xPercent: -100,
    //             opacity: 0,
    //             transformOrigin: 'left left',
    //             duration: 1,
    //             ease: 'power2.inOut',
    //             scrollTrigger: {
    //                 trigger: card,
    //                 start: 'top 80%'
    //             }
    //         })
    //     });
    //
    //     gsap.to('.timeline', {
    //         transformOrigin: 'bottom bottom',
    //         ease: 'power1.inOut',
    //         scrollTrigger: {
    //             trigger: '.timeline',
    //             start: 'top center',
    //             end: '70% center',
    //             onUpdate: (self) => {
    //                 gsap.to('.timeline', {
    //                     scaleY: 1 - self.progress,
    //                 })
    //             }
    //         }
    //     });
    //
    //     gsap.utils.toArray('.expText').forEach((text) => {
    //         gsap.from(text, {
    //             xPercent: 0,
    //             opacity: 0,
    //             duration: 1,
    //             ease: 'power2.inOut',
    //             scrollTrigger: {
    //                 trigger: text,
    //                 start: 'top 80%'
    //             }
    //         })
    //     });
    //
    // }, []);

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5 underline">
                <TitleHeader
                    title="Projects"
                    sub="💼 My Career Overview" />
            </div>

            {/* Content and Lambo Model */}
            <div className="flex flex-col md:flex-row mt-32 relative justify-center items-center gap-10">

                {/* Text Content */}
                <div className="w-full md:w-2/5 lg:w-2/6 border-5 border-gray-700 rounded-lg p-6 bg-gray-600 bg-opacity-10">
                    {expCards.map((card) => (
                        <div key={card.title} className="expText">
                            <h1 className="font-semibold text-3xl">{card.title}</h1>
                            <p className="my-5 text-white-50">📅 {card.date}</p>
                            <p className="text-[#839cb5] italic">Responsibilities</p>
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                {card.responsibilities.map((responsibility) => (
                                    <li key={responsibility} className="text-lg">
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Lambo Model */}
                <div className="aspect-square w-full md:w-1/4 lg:w-1/5 border-5 border-gray-700 rounded-lg p-6 bg-gray-600 bg-opacity-10 flex items-center justify-center h-103">
                    <Lambo />
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;
