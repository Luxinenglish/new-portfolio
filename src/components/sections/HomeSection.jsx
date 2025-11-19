
import React from 'react';
import { Zap, Mail, Github, Linkedin, TwitterIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

const iconMap = {
    Github,
    Linkedin,
    Mail,
    TwitterIcon
};

export const HomeSection = ({ displayText, handleNavigate }) => (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <div className="max-w-5xl w-full">
            <div className="border-2 border-green-500/30 bg-black/50 p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm hover:border-green-500 transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                    <div className="text-green-500 mb-2 text-xs sm:text-sm md:text-base break-words overflow-hidden">
                        {displayText}<span className="animate-pulse">_</span>
                    </div>
                    <div className="text-xs sm:text-sm text-green-600 break-words">
                        <span className="hidden sm:inline">System Status: ONLINE | Encryption: ACTIVE | Firewall: ENABLED</span>
                        <span className="sm:hidden">Status: ONLINE | Secure</span>
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 glitch break-words" data-text="CYBER DEV">
                    Lux_
                </h1>
                <span className="hidden sm:inline">Am I a black hat or a black cat?</span>

                <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-green-300 mb-4 sm:mb-6 break-words leading-relaxed">
                    {'<'} Full Stack Developer | Security Enthusiast | AI Explorer {'>'}
                </h2>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-400/80 mb-6 sm:mb-8 leading-relaxed">
                    Étudiant à <a href="https://ecolelamache.org">L'école la mache</a> en terminale pro CIEL. Passionné par le développement web, la cybersécurité...
                    J'aimerais plus tard devenir pentester. Je suis actuellement à la recherche d'un stage de 6 semaines : du <strong>24 novembre au 20 janvier.</strong>
                </p>

                <img
                    src="https://github-readme-activity-graph.vercel.app/graph?username=luxinenglish&bg_color=000201&color=4ade80&line=4ade80&point=1c71d8&area=true&hide_border=true"
                    className="w-full mb-6 sm:mb-8"
                    alt="GitHub Activity Graph"
                />

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <button
                        onClick={() => handleNavigate('projects')}
                        className="relative px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                    >
                        <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                        <span className="relative z-10">VOIR MES PROJETS</span>
                    </button>
                    <a
                        href="mailto:j.brochard@aplosn.fr"
                        className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                    >
                        <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:scale-110 transition-transform" />
                        <span className="relative z-10">CONTACT</span>
                    </a>
                    <a
                        href="https://aplosn.fr"
                        className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                    >
                        <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        <span className="relative z-10">Mon asso</span>
                    </a>
                </div>

                <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                    {SOCIAL_LINKS.map(({ label, href, icon }, i) => {
                        const Icon = iconMap[icon];
                        return (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative border border-green-500/50 p-2.5 sm:p-3 hover:bg-green-500/20 transition-all group overflow-hidden"
                                aria-label={label}
                            >
                                <span className="absolute inset-0 bg-green-500/30 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
);