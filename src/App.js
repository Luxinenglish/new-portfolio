/* TODO Importer React Icons*/
/* TODO ajouter discord aux reseau sur la page home*/
/* TODO fix les 2/3 erreurs qui se prommenent*/
/* TODO ajouter Twitter aux reseau sur la page home (nouveau logo)*/
/* TODO Optimiser en mettant sur plusieurs pages*/


import React, { useState, useEffect } from 'react';
import { Terminal, Code, Globe, Mail, Github, Linkedin, Cpu, Shield, Zap, Menu, X, Server, Laptop, Laptop2, TramFront, TramFrontIcon, Link as LinkIcon } from 'lucide-react';

export default function HackerPortfolio() {
    const [displayText, setDisplayText] = useState('');
    const [currentSection, setCurrentSection] = useState('home');
    const [matrixRain, setMatrixRain] = useState([]);
    const [bootSequence, setBootSequence] = useState([]);
    const [showLux, setShowLux] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const fullText = '> Initializing neural interface...';
    const month = new Date().getMonth();
    const isWinter = month === 10 || month === 11 || month === 0; // November, December, January
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
        if (isWinter) {
            // Snowflake particles
            const flakes = Array.from({ length: columns }).map(() => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 8 + Math.random() * 14,
                speed: 0.2 + Math.random() * 1.2
            }));
            setMatrixRain(flakes);
            const interval = setInterval(() => {
                setMatrixRain(prev =>
                    prev.map(f => {
                        const ny = f.y + f.speed;
                        if (ny > 110) {
                            return {
                                x: Math.random() * 100,
                                y: -10,
                                size: 8 + Math.random() * 14,
                                speed: 0.2 + Math.random() * 1.2
                            };
                        }
                        return { ...f, y: ny };
                    })
                );
            }, 50);
            return () => clearInterval(interval);
        } else {
        const drops = Array(columns).fill(0).map(() => Math.random() * 100);
        setMatrixRain(drops);
        const interval = setInterval(() => {
            setMatrixRain(prev => prev.map(y => (y > 100 ? 0 : y + 1)));
        }, 50);
        return () => clearInterval(interval);
        }
    }, [isWinter]);

    const projects = [
        {
            title: 'TCL - App [Private Repo] (not-official)',
            desc: 'Web App qui permet de voir en direct les emplacements de transports lyonnais',
            tech: ['React', 'Tailwind CSS', 'API TCL'],
            href: 'https://github.com/Luxinenglish/tcl_app',
            icon: TramFront
        },
        {
            title: 'auto-deploy-nginx-website',
            desc: 'un simple script pour deployer un site web avec nginx',
            tech: ['Python'],
            href: 'https://github.com/Luxinenglish/auto-deploy-nginx-website',
            icon: Server
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
            icon: Server
        },
        {
            title: 'Russian Roulette Game',
            desc: 'Jeu de roulette russe qui supprime ton os',
            tech: ['python'],
            href: 'https://github.com/Luxinenglish/roullette-russe',
            icon: Laptop
        },
        {
            title: 'APLOSN',
            desc: "Association pour la promotion du libre de l'open source, et de la souvraineté numérique. Dont je suis le président",
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

    const rooms = [
      {
        id: 'r1',
        title: 'Basic pentesting',
        platform: 'TryHackMe',
        platformIcon: Server,
        desc: 'This is a machine that allows you to practise web app hacking and privilege escalation\n',
        tags: ['BruteForce', 'Privesc', 'Scan'],
        link: 'https://tryhackme.com/room/basicpentestingjt'
      },
      {
        id: 'r2',
        title: 'Offensive Security Intro',
        platform: 'TryHackMe',
        platformIcon: Terminal,
        desc: 'Hack your first website (legally in a safe environment) and experience an ethical hacker\'s job.',
        tags: ['Web', 'Auth'],
        link: 'https://tryhackme.com/room/offensivesecurityintro'
      },
      {
        id: 'r3',
        title: 'Dig Dug',
        platform: 'TryHackMe',
        platformIcon: Shield,
        desc: 'Turns out this machine is a DNS server - it\'s time to get your shovels out!',
        tags: ['DNS'],
        link: 'https://www.root-me.org/en/rooms/linux-privesc'
      },
        {
            id: 'r4',
            title: 'Neighbor',
            platform: 'TryHackMe',
            platformIcon: Laptop2,
            desc: 'Check out our new cloud service, Authentication Anywhere. Can you find other user\'s secrets?',
            tags: ['Auth', 'Cloud'],
        }
    ];

    const challenges = [
      {
        id: 'c1',
        title: 'HTML - boutons désactivés',
        difficulty: 'Very-Easy',
        desc: 'Ce formulaire est désactivé et ne peut pas être utilisé. À vous de trouver le moyen de l’utiliser tout de même.\n' +
            '\n',
        tags: ['Web', 'HTML', 'Form'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives'
      },
      {
        id: 'c2',
        title: 'Javascript - Authentification\n',
        difficulty: 'Very-Easy',
        desc: 'identifier comment est gérer l’authentification',
        tags: ['Web', 'JavaScript', 'Auth'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification'
      },
        {
            id: 'c3',
            title: 'Javascript - Obfuscation 1',
            difficulty: 'Very-Easy',
            desc: 'Utilisation de la méthode unescape() pour décoder la chaîne de caractère hexadécimale.',
            tags: ['Web', 'JavaScript', 'Obfuscation'],
            link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-1?action_solution=voir&debut_affiche_solutions=0#pagination_affiche_solutions',

        },
        {
            id: "c3a",
            title: 'Javascript - Obfuscation 2',
            difficulty: 'Very-Easy',
            desc: 'Déobfusquez le code JavaScript pour trouver le mot de passe permettant de valider l’épreuve.',
            tags: ['Web', 'JavaScript', 'Obfuscation'],
            link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-2',
        },
      {
        id: 'c4',
        title: 'XSS - Stockée 1\n',
        difficulty: 'Easy',
        desc: 'Volez le cookie de session de l’administrateur et utilisez le pour valider l’épreuve.',
        tags: ['Web', 'XSS'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1'
      }
    ];
    return (
        <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
            {/* Boot Sequence */}
            {!showLux && !showContent && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full">
                        <div className="border-2 border-green-500 bg-black p-4 sm:p-6 md:p-8">
                            <div className="mb-4 flex items-center gap-2">
                                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse" />
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
                    <div className="fixed inset-0 opacity-50 pointer-events-none">
                        {isWinter ? matrixRain.map((f, i) => (
                            <div
                                key={i}
                                className="absolute text-white"
                                style={{
                                    left: `${f.x}%`,
                                    top: `${f.y}%`,
                                    fontSize: `${f.size}px`,
                                    transform: 'translateX(-50%)',
                                    pointerEvents: 'none'
                                }}
                                aria-hidden="true"
                            >
                                ❄
                            </div>
                        )) : matrixRain.map((y, i) => (
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
                                <button type="button" onClick={() => handleNavigate('home')} className="flex items-center gap-2 text-green-500" aria-label="Home">
                                        <Terminal className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                                        <span className="text-lg sm:text-xl md:text-2xl font-bold glitch" data-text="[HACKER]">[Lux_]</span>
                                </button>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex gap-4 lg:gap-6">
                                    {['home', 'projects', 'skills', 'whoami', 'rooms'].map(section => (
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
                                    {['home', 'projects', 'skills', 'whoami', 'rooms'].map(section => (
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
                                        Étudiant à <a href="https://ecolelamache.org">L'école la mache</a> en terminale pro CIEL. Passionné par le développement web, la cybersécurité...
                                        J'aimerais plus tard devenir pentester. Je suis actuellement à la recherche d'un stage de 6 semaines : du <strong>24 novembre au 20 janvier.</strong>
                                    </p>

                                    <img src="https://github-readme-activity-graph.vercel.app/graph?username=luxinenglish&bg_color=000201&color=4ade80&line=4ade80&point=1c71d8&area=true&hide_border=true" className="w-full mb-6 sm:mb-8" alt="GitHub Activity Graph" />

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                                        <button
                                            onClick={() => handleNavigate('projects')}
                                            className="relative px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base"
                                        >
                                            <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                            <Zap className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                                            <span className="relative z-10">VOIR MES PROJETS</span>
                                        </button>
                                        <a href="mailto:j.brochard@aplosn.fr" className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base">
                                            <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:scale-110 transition-transform" />
                                            <span className="relative z-10">CONTACT</span>
                                        </a>
                                        <a href="https://aplosn.fr" className="relative px-4 py-2.5 sm:px-6 sm:py-3 bg-green-500 text-black hover:bg-green-400 transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-xs sm:text-sm md:text-base">
                                            <span className="absolute inset-0 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                            <span className="relative z-10">Mon asso</span>
                                        </a>
                                    </div>

                                    <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                                        {[
                                            { Icon: Github, label: 'GitHub', href: 'https://github.com/luxinenglish'},
                                            { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/joam-brochard-290a2b2a0' },
                                            { Icon: Mail, label: 'Email', href: 'mailto:j.brochard@aplosn.fr' }
                                        ].map(({ Icon, label, href }, i) => (
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Whoami Section */}
                    {currentSection === 'whoami' && (
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
                                                <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 translate-x-3 w-24 sm:w-32 h-auto z-10" style={{ transform: 'translateX(-105%) translateY(80%) rotate(-35deg) scale(1.2)' }}>
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
                                            className="border-2 border-green-500/30 bg-black/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 hover:border-green-500 hover:scale-105 transition-all duration-300 group"
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
                                            <a href={project.href} target="_blank" rel="noopener noreferrer" className="block mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-green-500 hover:text-green-300 transition-colors relative group">
                                                <span className="relative z-10">{'>'} Voir détails_</span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                                            </a>
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
                                        <div key={i} className="border border-green-500/30 bg-black/50 p-3 sm:p-4 md:p-5 hover:border-green-500 transition-all  backdrop-blur-sm">
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
{currentSection === 'rooms' && (
<section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <header className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-green-500" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-300">Rooms &amp; Challenges</h2>
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
                    <h4 className="font-bold text-green-300 text-sm sm:text-base md:text-lg">{r.title}</h4>
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
                <div className="text-xs sm:text-sm text-green-500/90 whitespace-nowrap">{c.difficulty}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border border-green-500/30 rounded">{t}</span>
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
)}
            {/* Snow Footer */}
                <footer className="relative w-full mt-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="180" viewBox="0 0 1200 180" role="img" aria-label="Sol enneigé" className="w-full h-auto">
                <defs>
                <linearGradient id="snowGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#ffffff"/>
                <stop offset="1" stopColor="#f0f6ff"/>
                </linearGradient>
                <linearGradient id="shadeGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.98"/>
                <stop offset="1" stopColor="#e9f1ff" stopOpacity="1"/>
                </linearGradient>
                <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
                <feOffset in="blur" dx="0" dy="6" result="off"/>
                <feMerge>
                <feMergeNode in="off"/>
                <feMergeNode in="SourceGraphic"/>
                </feMerge>
                </filter>
                </defs>
                <rect x="0" y="0" width="1200" height="80" fill="none"/>
                <g filter="url(#softShadow)">
                <path d="M0 70 C120 50 260 55 420 75 C560 95 700 55 860 75 C980 90 1100 65 1200 80 L1200 180 L0 180 Z" fill="url(#snowGrad)"/>
                </g>
                <path d="M0 80 C160 65 300 72 420 88 C560 103 700 78 860 93 C980 105 1100 85 1200 95" fill="none" stroke="#f7fbff" strokeWidth="2" opacity="0.85"/>
                <g opacity="0.9">
                <ellipse cx="120" cy="115" rx="12" ry="4" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="260" cy="120" rx="8" ry="3" fill="#ffffff" opacity="0.75"/>
                <ellipse cx="480" cy="118" rx="10" ry="4" fill="#ffffff" opacity="0.78"/>
                <ellipse cx="740" cy="117" rx="9" ry="3.5" fill="#ffffff" opacity="0.76"/>
                <ellipse cx="980" cy="112" rx="14" ry="5" fill="#ffffff" opacity="0.82"/>
                <ellipse cx="600" cy="200" rx="540" ry="18" fill="#cfdff7" opacity="0.06"/>
                <ellipse cx="600" cy="160" rx="540" ry="18" fill="#cfdff7" opacity="0.06"/>
                </g>
                </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10" style={{ marginTop: '50px' }}>
                        <p className="text-gray-600 text-xs sm:text-sm padding-bottom-4">
                            © 2025 Lux_ - Fait avec ❤️ et beaucoup de ☕
                        </p>
                    </div>
                </footer>
                </>
            )}
        </div>
    );
}