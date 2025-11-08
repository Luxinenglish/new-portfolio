import React, { useState, useEffect } from 'react';
import { Terminal, Code, Globe, Mail, Github, Linkedin, Cpu, Shield, Zap, Menu, X } from 'lucide-react';

export default function HackerPortfolio() {
    const [displayText, setDisplayText] = useState('');
    const [currentSection, setCurrentSection] = useState('home');
    const [matrixRain, setMatrixRain] = useState([]);
    const [bootSequence, setBootSequence] = useState([]);
    const [showLux, setShowLux] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const fullText = '> Initializing neural interface...';

    const bootMessages = [
        '> SYSTEM BOOT SEQUENCE INITIATED...',
        '> Loading kernel modules... [OK]',
        '> Initializing firewall... [OK]',
        '> Establishing secure connection... [OK]',
        '> Decrypting neural interface... [OK]',
        '> Loading portfolio data... [OK]',
        '> Mounting file systems... [OK]',
        '> Starting network protocols... [OK]',
        '> SYSTEM READY - Welcome, User',
        '> Access granted. Launching interface...'
    ];

    useEffect(() => {
        let messageIndex = 0;
        const bootTimer = setInterval(() => {
            if (messageIndex < bootMessages.length) {
                setBootSequence(prev => [...prev, bootMessages[messageIndex]]);
                messageIndex++;
            } else {
                clearInterval(bootTimer);
                setTimeout(() => {
                    setShowLux(true);
                    setTimeout(() => setShowContent(true), 3000);
                }, 500);
            }
        }, 300);

        return () => clearInterval(bootTimer);
    }, []);

    useEffect(() => {
        if (!showContent) return;
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, [showContent]);

    useEffect(() => {
        const columns = window.innerWidth < 640 ? 30 : 50;
        const drops = Array(columns).fill(0).map(() => Math.random() * 100);
        setMatrixRain(drops);

        const interval = setInterval(() => {
            setMatrixRain(prev => prev.map(y => (y > 100 ? 0 : y + 1)));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const projects = [
        {
            title: 'Facial Recognition',
            desc: 'Système de reconnaissance faciale pour identifier les individus en temps réel.',
            tech: ['Python'],
            href: '#',
            icon: Cpu
        },
        {
            title: 'Minecraft Launcher',
            desc: 'Un lanceur personnalisé pour Minecraft.',
            tech: ['Java', 'JavaFX'],
            href: 'https://github.com/Luxinenglish/Launcher?search=1',
            icon: Code
        },
        {
            title: 'script auto deploy nginx proxy',
            desc: 'Script bash pour déployer automatiquement un proxy Nginx avec SSL.',
            tech: ['Bash', 'Nginx'],
            href: 'https://github.com/Luxinenglish/auto-deploy-nginx-proxy',
            icon: Globe
        },
        {
            title: 'Russian Roulette Game',
            desc: 'Jeu de roulette russe qui supprime ton os',
            tech: ['python'],
            href: '#',
            icon: Shield
        },
        {
            title: 'APLOSN',
            desc: "Association pour la promotion du libre de l'open source, et de la souvraineté numérique.",
            tech: ['React', 'Tailwind CSS'],
            href: 'https://aplosn.fr',
            icon: Globe
        }
    ];

    const skills = [
        { name: 'JavaScript', level: 10 },
        { name: 'Python', level: 65 },
        { name: 'Java', level: 9 },
        { name: 'HTML & CSS', level: 50 },
        { name: 'Bash Scripting', level: 40 },
        { name: 'Cybersecurity Basics', level: 30 }
    ];

    const handleNavigate = (section) => {
        setCurrentSection(section);
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
            {/* Boot Sequence */}
            {!showLux && !showContent && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full">
                        <div className="border-2 border-green-500 bg-black p-4 sm:p-6 md:p-8">
                            <div className="mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-gr-500 animate-pulse" />
                                <span className="text-green-500 font-bold text-sm sm:text-base">SYSTEM BOOT</span>
                            </div>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                                {bootSequence.map((msg, i) => (
                                    <div key={i} className="text-green-400 animate-pulse break-words">
                                        {msg}
                                    </div>
                                ))}
                                <div className="text-green-500 animate-pulse">_</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Lux_ Animation */}
            {showLux && !showContent && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden px-4">
                    <div className="text-center">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-green-500 lux-animation">
                            <span className="lux-u-zoom">Lux_</span>
                        </h1>
                    </div>
                </div>
            )}

            {showContent && (
                <>
                    {/* Matrix Rain Effect */}
                    <div className="fixed inset-0 opacity-50 pointer-events-none">
                        {matrixRain.map((y, i) => (
                            <div
                                key={i}
                                className="absolute text-green-500 text-xs"
                                style={{
                                    left: `${(i / matrixRain.length) * 100}%`,
                                    top: `${y}%`,
                                    transform: 'translateY(-100%)'
                                }}
                            >
                                {String.fromCharCode(0x30A0 + Math.random() * 96)}
                            </div>
                        ))}
                    </div>

                    {/* Scanline Effect */}
                    <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />

                    {/* Navigation */}
                    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/30 z-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                                {/* Logo */}
                                <a href={"https://portfolio.pixelserver.fr"}><div className="flex items-center gap-2 text-green-500">
                                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                                    <span className="text-lg sm:text-xl md:text-2xl font-bold glitch" data-text="[HACKER]">[Lux_]</span>
                                </div></a>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex gap-4 lg:gap-6">
                                    {['home', 'projects', 'skills', /*'contact'*/].map(section => (
                                        <button
                                            key={section}
                                            onClick={() => handleNavigate(section)}
                                            className={`relative hover:text-green-300 transition-all hover:scale-110 group text-sm lg:text-base ${
                                                currentSection === section ? 'text-green-300 border-b-2 border-green-500' : ''
                                            }`}
                                        >
                                            <span className="relative z-10">{'>'} {section.toUpperCase()}</span>
                                            <span className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/20 transition-all duration-300 -z-10 scale-0 group-hover:scale-100"></span>
                                        </button>
                                    ))}
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    className="md:hidden text-green-500 hover:text-green-300 transition-colors"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            {mobileMenuOpen && (
                                <div className="md:hidden border-t border-green-500/30 py-4 space-y-2 bg-black/95">
                                    {['home', 'projects', 'skills', /*'contact'*/].map(section => (
                                        <button
                                            key={section}
                                            onClick={() => handleNavigate(section)}
                                            className={`block w-full text-left px-4 py-3 hover:bg-green-500/10 transition-all ${
                                                currentSection === section ? 'text-green-300 bg-green-500/20 border-l-4 border-green-500' : ''
                                            }`}
                                        >
                                            {'>'} {section.toUpperCase()}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Hero Section */}
                    {currentSection === 'home' && (
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
                                        Étudiant à <a href={"https://ecolelamache.org"}>L'école la mache</a> en términale pro CIEL. Passionné par le développement web, la cybersécurité...
                                        J'aimerais plus tard devenir pentester. Je suis actuellement à la recherche d'un stage de 6 semaines : du <strong>24 novembre au 20 janvier.</strong>

                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                                        <button
                                            onClick={() => handleNavigate('projects')}
                                            className="relative px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                                        >
                                            <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                                            <span className="relative z-10">VOIR MES PROJETS</span>
                                        </button>
                                        <button
                                            /*onClick={() => handleNavigate('contact')}*/
                                            className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                                        >
                                            <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:scale-110 transition-transform" />
                                            <a href={"mailto:j.brochard@aplosn.fr"}><span className="relative z-10">CONTACT</span></a>
                                        </button>
                                        <button
                                            /*onClick={() => handleNavigate('contact')}*/
                                            className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                                        >
                                            <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                            <a href={"https://aplosn.fr"}><span className="relative z-10">Mon asso</span></a>
                                        </button>
                                    </div>

                                    <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                                        {[
                                            { Icon: Github, label: 'GitHub', href: 'https://github.com/luxinenglish'},
                                            { Icon: Linkedin, label: 'LinkedIn', href: 'www.linkedin.com/in/joam-brochard-290a2b2a0' },
                                            { Icon: Mail, label: 'Email', href: 'mailto:j.brochard@aplosn.fr' }
                                        ].map(({ Icon, label, href }, i) => (
                                            <a
                                                key={i}
                                                href={href || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative border border-green-500/50 p-2.5 sm:p-3 hover:bg-green-500/20 transition-all group overflow-hidden"
                                                aria-label={label}
                                            >
                                                <span className="absolute inset-0 bg-green-500/30 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Projects Section */}
                    {currentSection === 'projects' && (
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
                                            className="border-2 border-green-500/30 bg-black/50 p-4 sm:p-5 md:p-6 hover:border-green-500 hover:scale-105 transition-all duration-300 group"
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        >
                                            <project.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-green-500 group-hover:animate-spin transition-transform" />
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-green-300 break-words">{project.title}</h3>
                                            <p className="text-xs sm:text-sm md:text-base text-green-400/70 mb-3 sm:mb-4 leading-relaxed">{project.desc}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, j) => (
                                                    <span key={j} className="px-2 py-1 border border-green-500/50 text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <button className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-green-500 hover:text-green-300 transition-colors relative group">
                                                <span className="relative z-10">{'>'} Voir détails_</span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Skills Section */}
                    {currentSection === 'skills' && (
                        <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center break-words">
                                    <span className="hidden sm:inline">{'>'} COMPÉTENCES_TECHNIQUES</span>
                                    <span className="sm:hidden">{'>'} COMPÉTENCES</span>
                                    <span className="animate-pulse ml-1">_</span>
                                </h2>

                                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                    {skills.map((skill, i) => (
                                        <div key={i} className="border border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 hover:border-green-500 transition-all">
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
                    )}
{/*
                     Contact Section
                    {currentSection === 'contact' && (
                        <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center break-words">
                                    <span className="hidden sm:inline">{'>'} ÉTABLIR_CONNEXION</span>
                                    <span className="sm:hidden">{'>'} CONTACT</span>
                                    <span className="animate-pulse ml-1">_</span>
                                </h2>

                                <div className="border-2 border-green-500/30 bg-black/50 p-4 sm:p-6 md:p-8 lg:p-10">
                                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                        <div>
                                            <label className="block mb-2 text-green-500 text-xs sm:text-sm md:text-base font-semibold">{'>'} NOM:</label>
                                            <input
                                                type="text"
                                                className="w-full bg-black border border-green-500/50 p-2.5 sm:p-3 md:p-4 text-green-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all text-xs sm:text-sm md:text-base"
                                                placeholder="Entrez votre nom..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-green-500 text-xs sm:text-sm md:text-base font-semibold">{'>'} EMAIL:</label>
                                            <input
                                                type="email"
                                                className="w-full bg-black border border-green-500/50 p-2.5 sm:p-3 md:p-4 text-green-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all text-xs sm:text-sm md:text-base"
                                                placeholder="votre@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-green-500 text-xs sm:text-sm md:text-base font-semibold">{'>'} MESSAGE:</label>
                                            <textarea
                                                className="w-full bg-black border border-green-500/50 p-2.5 sm:p-3 md:p-4 text-green-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all h-24 sm:h-32 md:h-40 text-xs sm:text-sm md:text-base resize-none"
                                                placeholder="Votre message..."
                                            />
                                        </div>

                                        <button className="relative w-full bg-green-500 text-black py-2.5 sm:py-3 md:py-4 hover:bg-green-400 transition-all duration-300 font-bold group overflow-hidden text-xs sm:text-sm md:text-base">
                                            <span className="absolute inset-0 bg-green-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                {'>'} TRANSMETTRE_MESSAGE
                                                <Zap className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-90 transition-transform duration-300" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>*/}

                </>
            )}

            <style jsx>{`
                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }

                .glitch {
                    animation: glitch 0.3s infinite;
                }

                .glitch:hover {
                    animation: glitch 0.1s infinite;
                }

                @keyframes luxFade {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                        text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e;
                    }
                    20% {
                        opacity: 1;
                        transform: scale(1);
                        text-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e, 0 0 60px #22c55e, 0 0 80px #22c55e;
                    }
                    70% {
                        opacity: 1;
                        transform: scale(1);
                        text-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e, 0 0 60px #22c55e, 0 0 80px #22c55e;
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1);
                        text-shadow: 0 0 5px #22c55e;
                    }
                }

                @keyframes zoomIntoU {
                    0% {
                        transform: scale(1);
                        text-shadow: 0 0 20px #22c55e, 0 0 40px #22c55e;
                    }
                    50% {
                        transform: scale(1.5);
                        text-shadow: 0 0 40px #22c55e, 0 0 80px #22c55e, 0 0 120px #22c55e;
                    }
                    100% {
                        transform: scale(50);
                        text-shadow: 0 0 100px #22c55e, 0 0 200px #22c55e, 0 0 300px #22c55e;
                        opacity: 0;
                    }
                }

                @keyframes slideIn {
                    from {
                        width: 0;
                    }
                }

                .lux-animation {
                    animation: luxFade 3s ease-in-out forwards;
                }

                .lux-u-zoom {
                    display: inline-block;
                    animation: zoomIntoU 3s ease-in-out 0s forwards;
                }

                @media (max-width: 640px) {
                    .glitch {
                        animation: glitch 0.5s infinite;
                    }
                }
            `}</style>
        </div>
    );
}