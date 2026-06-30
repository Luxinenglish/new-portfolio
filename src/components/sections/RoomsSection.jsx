
import React, { useState } from 'react';
import { Terminal, Globe, Link as LinkIcon, Flag, BookOpen } from 'lucide-react';
import { rooms } from '../../data/rooms';
import { challenges } from '../../data/challenges';
import { getWriteupById } from '../../data/writeups';
import { WriteupModal } from '../WriteupModal';

const DIFFICULTY_COLOR = {
    'Very Easy':  'text-blue-400 border-blue-400/30',
    'Very-Easy':  'text-blue-400 border-blue-400/30',
    'Easy':       'text-green-400 border-green-400/30',
    'Medium':     'text-yellow-400 border-yellow-400/30',
    'Hard':       'text-orange-400 border-orange-400/30',
    'Very Hard':  'text-red-400 border-red-400/30',
};

export const RoomsSection = () => {
    const [openWriteup, setOpenWriteup] = useState(null);

    return (
        <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-16">
            <div className="max-w-7xl mx-auto">

                <header className="mb-8 sm:mb-10">
                    <div className="flex items-center gap-3">
                        <Terminal className="w-6 h-6 text-green-500" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-300">
                            Rooms &amp; Challenges
                        </h2>
                    </div>
                </header>

                <main className="space-y-12">

                    {/* ── Rooms TryHackMe ── */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-4 font-mono">
                            $ ls rooms/
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {rooms.map((r) => {
                                const Icon = r.platformIcon || Globe;
                                return (
                                    <article
                                        key={r.id}
                                        className="min-h-[120px] sm:min-h-[140px] border-2 border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 rounded-lg hover:scale-[1.02] transition-transform duration-200 flex backdrop-blur-sm"
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
                                                <span className="text-xs text-green-500/80 ml-3 shrink-0">{r.platform}</span>
                                            </div>
                                            <p className="text-green-400/80 text-xs sm:text-sm mt-2">{r.desc}</p>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {r.tags.map((t) => (
                                                    <span key={t} className="text-xs px-2 py-1 border border-green-500/30 rounded">{t}</span>
                                                ))}
                                            </div>
                                            <div className="mt-3 sm:mt-4 flex items-center gap-3">
                                                {r.link && (
                                                    <a
                                                        href={r.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs sm:text-sm text-green-500 hover:text-green-300 flex items-center gap-2"
                                                    >
                                                        <LinkIcon className="w-4 h-4" /> View room
                                                    </a>
                                                )}
                                                {r.link && (
                                                    <button
                                                        onClick={() => navigator.clipboard?.writeText(r.link)}
                                                        aria-label={`Copy link for ${r.title}`}
                                                        className="text-xs sm:text-sm text-green-500/80 hover:text-green-300"
                                                    >
                                                        Copy link
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    {/* ── CTF Challenges ── */}
                    <section>
                        <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-1 font-mono flex items-center gap-2">
                            <Flag className="w-5 h-5 text-green-500" />
                            $ cat ctf/challenges.log
                        </h3>
                        <p className="text-xs text-green-400/40 font-mono mb-5 ml-7">
                            {challenges.length} challenges résolus — cliquez sur "Read writeup" pour voir la solution détaillée
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {challenges.map((c) => {
                                const diffClass = DIFFICULTY_COLOR[c.difficulty] ?? 'text-green-400 border-green-400/30';
                                const wu = c.writeupId ? getWriteupById(c.writeupId) : null;

                                return (
                                    <article
                                        key={c.id}
                                        className="border-2 border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 rounded-lg hover:-translate-y-1 transition-transform duration-200 backdrop-blur-sm flex flex-col"
                                    >
                                        <div className="flex items-start justify-between gap-2 mb-2">
                                            <h4 className="font-bold text-green-300 text-sm sm:text-base leading-tight">
                                                {c.title.trim()}
                                            </h4>
                                            <span className={`shrink-0 text-xs font-mono px-1.5 py-0.5 border rounded ${diffClass}`}>
                                                {c.difficulty}
                                            </span>
                                        </div>

                                        <p className="text-green-400/70 text-xs sm:text-sm leading-relaxed flex-1">
                                            {c.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {c.tags.map((t) => (
                                                <span key={t} className="text-xs px-2 py-0.5 border border-green-500/25 rounded text-green-400/60">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 flex items-center gap-3 flex-wrap">
                                            {wu ? (
                                                <button
                                                    onClick={() => setOpenWriteup(wu)}
                                                    className="flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold transition-all duration-200"
                                                >
                                                    <BookOpen className="w-3.5 h-3.5" />
                                                    Read writeup
                                                </button>
                                            ) : (
                                                <span className="text-xs text-green-400/25 italic font-mono">— pas de writeup</span>
                                            )}

                                            {c.link && (
                                                <a
                                                    href={c.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-green-500/60 hover:text-green-300 flex items-center gap-1 transition-colors"
                                                >
                                                    <LinkIcon className="w-3 h-3" /> Challenge
                                                </a>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                </main>
            </div>

            {openWriteup && (
                <WriteupModal
                    writeup={openWriteup}
                    onClose={() => setOpenWriteup(null)}
                />
            )}
        </section>
    );
};
