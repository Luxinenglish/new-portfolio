
import { TramFront, Server, Code, Laptop, Globe } from 'lucide-react';

export const projects = [
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
