
import React from 'react';
import { Terminal } from 'lucide-react';

export const WhoamiSection = () => (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
            <div className="border-2 border-green-500/30 bg-black/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <div className="mb-6 sm:mb-8 flex items-center gap-2 border-b border-green-500/30 pb-2">
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse" />
                    <span className="text-green-500 font-bold text-sm sm:text-base">root@lux_:~$</span>
                    <span className="text-green-400 text-sm sm:text-base">whoami</span>
                </div>

                {/* Profile Picture with Christmas Hat */}
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                    <div className="lg:w-1/3 flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Christmas Hat SVG */}
                            <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-auto z-10" style={{ transform: 'translateX(-105%) translateY(80%) rotate(-35deg) scale(1.2)' }}>
                                <svg viewBox="0 0 371 255.44" className="w-full h-auto drop-shadow-lg" style={{ transform: 'scale(1.2)', transformOrigin: '50% 50%' }}>
                                    <path fill="#f91c1c" d="M363.94,178.43c-5.59-8.39-14.15-14.06-25.48-16.89-4.55-15.15-26.18-78.29-82.99-128.32C231.71,12.29,190.6-6.81,146.5,2.35c-49.91,10.37-78.9,51.88-94.44,84.93l-8.61,16.86c-2.63-1.35-5.59-2.08-8.68-2.08-9.61,0-17.59,7.14-18.9,16.39-9,1.54-15.87,9.39-15.87,18.82,0,4.14,1.33,8.09,3.72,11.32-2.39,3.24-3.72,7.18-3.72,11.33,0,8.94,6.19,16.47,14.5,18.53,1.63,8.88,9.43,15.63,18.78,15.63,4.36,0,8.52-1.5,11.85-4.13,3.32,2.63,7.48,4.13,11.84,4.13,8.31,0,15.45-5.36,18.04-12.88,9.19-1.37,16.26-9.32,16.26-18.88,0-3.91-1.2-7.66-3.36-10.8,2.84-3.38,4.46-7.71,4.46-12.26,0-2.38-.44-4.66-1.24-6.76,4.64-7.35,19.91-29.23,37.68-30-7.36,19.03-15.65,43.79-17.69,63.24-4.3,2.09-8.18,4.45-11.53,7.09-9.12,7.16-14.23,16.06-15.19,26.45-.89,3.85-5.37,27.46,13.42,41.82,13.27,10.14,51.25,14.34,130.48,14.34,2.17,0,4.38,0,6.62-.01,59.08-.17,105.44-1.25,120.15-13.24,7.32-5.98,12.23-14.55,14.59-25.5.45-1.87,5-22.12-5.72-38.26Z"/>
                                    <path fill="#fff" d="M358.97,214.11c-.02.07-.04.13-.05.19-1.82,8.48-5.45,14.99-10.81,19.36-12.85,10.49-73.25,10.66-113.22,10.77-49.01.15-115.85-.96-130.39-12.07-14.2-10.85-9.54-30.01-9.33-30.82.08-.31.07-11.3,11.21-20.06,3.28-2.58,7.26-4.91,11.91-7,.18-.06.34-.14.51-.22,23.31-10.24,63.26-14.45,117.1-12.21,49.93,2.07,94.34,9.07,94.82,9.15,1.06.18,16.25,1.64,24.02,13.27,8.33,12.46,4.26,29.49,4.23,29.64ZM76.76,155.66c-1.56-1.08-2.46-2.89-2.37-4.79.09-1.89,1.16-3.61,2.82-4.54,2.57-1.43,4.16-4.14,4.16-7.07,0-4.46-3.63-8.09-8.09-8.09-.28,0-.61.03-1.02.08-1.86.23-3.7-.49-4.9-1.92-1.2-1.43-1.59-3.37-1.04-5.16.24-.77.36-1.58.36-2.39,0-4.46-3.63-8.09-8.09-8.09-2.86,0-5.54,1.54-6.99,4.03-1.01,1.74-2.88,2.79-4.89,2.73s-3.83-1.2-4.75-2.99c-1.4-2.71-4.15-4.4-7.19-4.4-4.46,0-8.09,3.63-8.09,8.09,0,.55.06,1.1.17,1.64.36,1.79-.18,3.64-1.45,4.94-1.27,1.31-3.1,1.9-4.89,1.59-.53-.1-.99-.14-1.42-.14-4.46,0-8.09,3.63-8.09,8.09,0,2.71,1.36,5.23,3.63,6.74,1.53,1.02,2.45,2.74,2.45,4.58s-.92,3.56-2.45,4.58c-2.27,1.51-3.63,4.03-3.63,6.75,0,4.45,3.63,8.08,8.09,8.08l.41-.02c1.62-.09,3.18.54,4.29,1.72,1.1,1.17,1.64,2.77,1.46,4.38-.04.34-.06.64-.06.91,0,4.46,3.63,8.09,8.09,8.09,2.91,0,5.62-1.58,7.05-4.14.98-1.73,2.81-2.8,4.8-2.8s3.82,1.07,4.79,2.8c1.44,2.56,4.14,4.14,7.05,4.14,4.27,0,7.81-3.34,8.06-7.6.09-1.52.8-2.93,1.97-3.9,1.16-.98,2.68-1.42,4.19-1.24.38.05.71.07.99.07,4.46,0,8.09-3.63,8.09-8.09,0-2.65-1.32-5.14-3.51-6.66Z"/>
                                    <path fill="#f91c1c" d="M326.17,159.39c-28.36-4.1-142.89-18.79-203.32,1.59,5.52-34.11,28.04-82.6,28.29-83.13,1.29-2.75.1-6.02-2.65-7.31-.76-.35-1.55-.52-2.33-.52-2.07,0-4.05,1.18-4.98,3.18-.39.82-3.71,7.97-8.03,18.45-23.03-2.42-41.54,20.42-49.24,31.77-1.88-1.27-3.99-2.21-6.26-2.74-.58-10.02-8.91-17.99-19.06-17.99-.71,0-1.41.04-2.11.12l5.42-10.61c.02-.06.05-.11.07-.16C82.72,47.89,112.72,20.6,148.74,13.12c40.13-8.33,77.69,9.19,99.46,28.36,48.84,43.01,70.99,97.51,77.97,117.91Z"/>
                                </svg>
                            </div>

                            <img
                                src="https://cdn.discordapp.com/avatars/786144801456259092/a_ae7b71bb9b330e81be977120b4986f81.gif"
                                alt="Lux_ Profile"
                                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover"
                            />
                            <div className="absolute inset-0 bg-green-500/0 "></div>
                        </div>

                    </div>
                </div>

                <div className="lg:w-2/3 space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base font-mono">
                    <div className="text-green-400 leading-relaxed">
                        <p className="mb-4">
                            <span className="text-green-500">{'>'}</span> <span className="text-green-300 font-bold">Lux_</span> (Joam Brochard)
                        </p>
                        <p className="mb-4">
                            <span className="text-green-500">{'>'}</span> Étudiant en terminale CIEL à <a href="https://ecolelamache.org" className="text-green-300 hover:text-green-200 underline">l'École La Mache</a>
                        </p>
                    </div>

                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ cat passions.txt</h3>
                        <ul className="space-y-2 text-green-400/90">
                            <li><span className="text-green-500">•</span> Développement web (Full Stack)</li>
                            <li><span className="text-green-500">•</span> Cybersécurité & Ethical Hacking</li>
                            <li><span className="text-green-500">•</span> Intelligence Artificielle</li>
                            <li><span className="text-green-500">•</span> Open Source & Souveraineté numérique</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ cat objectifs.txt</h3>
                        <p className="text-green-400/90 leading-relaxed">
                            Devenir pentester professionnel. Actuellement à la recherche d'un stage de 6 semaines pour approfondir mes compétences en sécurité informatique.
                        </p>
                    </div>
                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ cat events.iso</h3>
                        <p className="text-green-400/90 leading-relaxed">
                            J'ai participé à plusieurs événements liés à la cybersécurité:
                            <br />
                            - LeHack 2024 <a href="https://lehack.org/2024" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                            <br />
                            - GreHack 2024 <a href="https://www.grehack.fr/2024/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                            <br />
                            - Tour de france Cyber 2024 <a href="https://tdfcyber.fr/rcyberara2024/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                            <br />
                            - Tour de france Cyber 2025 <a href="https://tdfcyber.fr/rcyberara2025/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                            <br />
                            - LeHack 2025 <a href="https://lehack.org/2025" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                            <br />
                            - GreHack 2025 <a href="https://www.grehack.fr/2025/" target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-200 underline">page de l'événement</a>
                        </p>
                    </div>

                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ ls -la associations/</h3>
                        <div className="text-green-400/90">
                            <p className="mb-2">
                                <span className="text-green-500">drwxr-xr-x</span> <a href="https://aplosn.fr" className="text-green-300 hover:text-green-200 underline">APLOSN</a>
                            </p>
                            <p className="text-xs sm:text-sm pl-8 text-green-400/70">
                                Association pour la Promotion du Libre, de l'Open Source et de la Souveraineté Numérique
                            </p>
                        </div>
                    </div>

                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ echo $STAGE_RECHERCHE</h3>
                        <div className="bg-green-500/10 border border-green-500/30 p-3 sm:p-4 rounded">
                            <p className="text-green-300 font-semibold mb-2">🔍 Stage recherché :</p>
                            <p className="text-green-400/90 mb-1">
                                <span className="text-green-500">Période :</span> 24 novembre 2025 - 20 janvier 2026 (6 semaines)
                            </p>
                            <p className="text-green-400/90">
                                <span className="text-green-500">Domaine :</span> Cybersécurité, Pentesting, Développement
                            </p>
                        </div>
                    </div>
                    <div className="border-l-2 border-green-500/50 pl-4">
                        <h3 className="text-green-300 font-bold mb-3 text-sm sm:text-base md:text-lg">$ ls comptes/</h3>
                        <p>liens vers mes differents comptes :</p>
                        <ul className="space-y-2 text-green-400/90">
                            <li>
                                <p>• <a href="https://www.root-me.org/Lux-802245" className="text-green-300 hover:text-green-200 underline">
                                    <span className="text-green-500"></span>Root-Me
                                </a></p>
                            </li>
                            <li>
                                <p>• <a href="https://ctf.hackthebox.com/team/overview/158330" className="text-green-300 hover:text-green-200 underline">
                                    <span className="text-green-500"></span>HackTheBox
                                </a></p>
                            </li>
                            <div className="w-full">
                                <iframe
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4379325"
                                    title="TryHackMe Badges"
                                    className="border-0 w-full h-24 sm:h-32 md:h-40"
                                    style={{ minHeight: '80px' }}
                                    loading="lazy"
                                />
                            </div>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-green-500/30">
                        <p className="text-green-500 text-xs sm:text-sm">
                            <span className="animate-pulse">root@lux_:~$</span> <span className="text-green-400">_</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);