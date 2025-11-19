// ==============================================
// src/components/sections/RoomsSection.jsx
// ==============================================

import React from 'react';
import { Terminal, Code, Globe, Link as LinkIcon } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { challenges } from '../../data/challenges';

export const RoomsSection = () => (
    <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <header className="mb-8 sm:mb-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Terminal className="w-6 h-6 text-green-500" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-300">
                            Rooms &amp; Challenges
                        </h2>
                    </div>
                </div>
                <p className="text-sm text-green-400/80 mt-3 max-w-3xl">
                    Cards list of rooms published on different platforms and challenges solved with links and short descriptions.
                </p>
            </header>

            <main className="space-y-8 sm:space-y-10">
                <section>
                    <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-4">$ ls rooms/</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {rooms.map((r) => {
                            const Icon = r.platformIcon || Globe;
                            return (
                                <article
                                    key={r.id}
                                    className="min-h-[120px] sm:min-h-[140px] border-2 border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 rounded-lg hover:scale-102 transition-transform duration-200 flex"
                                >
                                    <div className="flex-shrink-0 flex items-start">
                                        <div className="p-2 sm:p-3 bg-green-500/10 border border-green-500/20 rounded">
                                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-400" />
                                        </div>
                                    </div>
                                    <div className="flex-1 ml-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-bold text-green-300 text-sm sm:text-base md:text-lg">
                                                {r.title}
                                            </h4>
                                            <span className="text-xs text-green-500/80 ml-3">{r.platform}</span>
                                        </div>
                                        <p className="text-green-400/80 text-xs sm:text-sm mt-2">{r.desc}</p>

                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {r.tags.map((t) => (
                                                <span key={t} className="text-xs px-2 py-1 border border-green-500/30 rounded">
                          {t}
                        </span>
                                            ))}
                                        </div>

                                        <div className="mt-3 sm:mt-4 flex items-center gap-3">
                                            <a
                                                href={r.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs sm:text-sm text-green-500 hover:text-green-300 flex items-center gap-2"
                                            >
                                                <LinkIcon className="w-4 h-4" /> View room
                                            </a>
                                            <button
                                                onClick={() => navigator.clipboard?.writeText(r.link)}
                                                aria-label={`Copy link for ${r.title}`}
                                                className="text-xs sm:text-sm text-green-500/80 hover:text-green-300"
                                            >
                                                Copy link
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section>
                    <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-4">$ cat challenges.log</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {challenges.map((c) => (
                            <article
                                key={c.id}
                                className="min-h-[120px] sm:min-h-[140px] border-2 border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 rounded-lg transform transition-transform duration-200 hover:-translate-y-1 sm:hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="pr-3 flex-1">
                                        <h4 className="font-bold text-green-300 text-sm sm:text-base">{c.title}</h4>
                                        <p className="text-green-400/80 text-xs sm:text-sm mt-1">{c.desc}</p>
                                    </div>
                                    <div className="text-xs sm:text-sm text-green-500/90 whitespace-nowrap">
                                        {c.difficulty}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {c.tags.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 border border-green-500/30 rounded">
                      {t}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-3 sm:mt-4">
                                    <a
                                        href={c.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-500 hover:text-green-300"
                                    >
                                        <Code className="w-4 h-4" /> Read writeup / repo
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    </section>
);