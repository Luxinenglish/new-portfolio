
import React from 'react';
import { projects } from '../../data/projects';

export const ProjectsSection = () => (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center break-words">
                <span className="hidden sm:inline">{'>'} PROJETS_RÉCENTS</span>
                <span className="sm:hidden">{'>'} PROJETS</span>
                <span className="animate-pulse ml-1">_</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="border-2 border-green-500/30 bg-black/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-green-500 hover:scale-105 transition-all duration-300 group"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        <project.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-green-500 group-hover:animate-spin transition-transform" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-green-300 break-words">
                            {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-green-400/70 mb-3 sm:mb-4 leading-relaxed">
                            {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, j) => (
                                <span key={j} className="px-2 py-1 border border-green-500/50 text-xs">
                  {tech}
                </span>
                            ))}
                        </div>
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-green-500 hover:text-green-300 transition-colors relative group"
                        >
                            <span className="relative z-10">{'>'} Voir détails_</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
);