
import React from 'react';
import { Download, FileText, User, Briefcase, GraduationCap, Code } from 'lucide-react';

const CV_PATH = '/cv.pdf';

const highlights = [
    { icon: User, label: 'Profil', value: 'Étudiant en cybersécurité & développement' },
    { icon: GraduationCap, label: 'Formation', value: 'Informatique / Sécurité' },
    { icon: Briefcase, label: 'Expérience', value: 'CTF, projets personnels, TryHackMe' },
    { icon: Code, label: 'Stack', value: 'Python, React, Linux, Pentesting' },
];

export const CVSection = () => (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 flex flex-col items-center">
        <div className="max-w-2xl w-full mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
                {'>'} CURRICULUM_VITAE
                <span className="animate-pulse ml-1">_</span>
            </h2>

            {/* Carte principale */}
            <div className="border-2 border-green-500/40 bg-black/60 backdrop-blur-sm p-6 sm:p-8 mb-8">
                <div className="flex items-center gap-4 mb-6 border-b border-green-500/20 pb-6">
                    <FileText className="w-10 h-10 text-green-500 shrink-0" />
                    <div>
                        <p className="text-green-300 font-bold text-lg sm:text-xl">Joam Brochard</p>
                        <p className="text-green-400/60 text-sm">CV — Version 2025</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    {highlights.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <div className="flex flex-wrap gap-x-2 text-sm">
                                <span className="text-green-400/50">[{label}]</span>
                                <span className="text-green-300">{value}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href={CV_PATH}
                    download="CV_Joam_Brochard.pdf"
                    className="flex items-center justify-center gap-3 w-full py-3 px-6 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-bold transition-all duration-300 group text-sm sm:text-base"
                >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    {'>'} TÉLÉCHARGER_LE_CV.PDF
                </a>
            </div>

            <p className="text-center text-green-400/40 text-xs">
                {'>'} Fichier PDF — mis à jour 2025
            </p>
        </div>
    </section>
);
