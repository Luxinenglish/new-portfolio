
import React from 'react';
import { skills } from '../../data/skills';

export const SkillsSection = () => (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center break-words">
                <span className="hidden sm:inline">{'>'} COMPÉTENCES_TECHNIQUES</span>
                <span className="sm:hidden">{'>'} COMPÉTENCES</span>
                <span className="animate-pulse ml-1">_</span>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {skills.map((skill, i) => (
                    <div
                        key={i}
                        className="border border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 hover:border-green-500 transition-all backdrop-blur-sm"
                    >
                        <div className="flex justify-between mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">
                            <span className="text-green-300 font-semibold">{skill.name}</span>
                            <span className="text-green-500 font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-2 sm:h-2.5 md:h-3 bg-green-900/30 border border-green-500/50 relative overflow-hidden">
                            <div
                                className="h-full bg-green-500 transition-all duration-1000 ease-out"
                                style={{
                                    width: `${skill.level}%`,
                                    animation: 'slideIn 1s ease-out'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
