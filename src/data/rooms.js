
import { Server, Terminal, Shield, Laptop2 } from 'lucide-react';

export const rooms = [
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