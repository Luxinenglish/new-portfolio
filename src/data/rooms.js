
import { Server, Terminal, Shield, Laptop2 } from 'lucide-react';

export const rooms = [
    {
        id: 'r1',
        title: 'Basic pentesting',
        platform: 'TryHackMe',
        platformIcon: Server,
        desc: 'Il s\'agit d\'une machine qui vous permet de vous entraîner au piratage d\'applications web et à l\'élévation de privilèges.\n',
        tags: ['BruteForce', 'Privesc', 'Scan'],
        link: 'https://tryhackme.com/room/basicpentestingjt'
    },
    {
        id: 'r2',
        title: 'Offensive Security Intro',
        platform: 'TryHackMe',
        platformIcon: Terminal,
        desc: 'Piratez votre premier site web (légalement et dans un environnement sécurisé) et découvrez le métier de hacker éthique.',
        tags: ['Web', 'Auth'],
        link: 'https://tryhackme.com/room/offensivesecurityintro'
    },
    {
        id: 'r3',
        title: 'Dig Dug',
        platform: 'TryHackMe',
        platformIcon: Shield,
        desc: 'Il s\'avère que cette machine est un serveur DNS - il est temps de sortir les pelles!',
        tags: ['DNS'],
        link: 'https://www.root-me.org/en/rooms/linux-privesc'
    },
    {
        id: 'r4',
        title: 'Neighbor',
        platform: 'TryHackMe',
        platformIcon: Laptop2,
        desc: 'Découvrez notre nouveau service cloud, Authentication Anywhere. Saurez-vous trouver les secrets des autres utilisateurs ?',
        tags: ['Auth', 'Cloud'],
    }
];
