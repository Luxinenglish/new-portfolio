
export const challenges = [
    {
        id: 'c1',
        title: 'HTML - boutons désactivés',
        difficulty: 'Very-Easy',
        desc: 'Ce formulaire est désactivé et ne peut pas être utilisé. À vous de trouver le moyen de l\'utiliser tout de même.',
        tags: ['Web', 'HTML', 'Form'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives',
        writeupId: 'wu3'
    },
    {
        id: 'c2',
        title: 'Javascript - Authentification',
        difficulty: 'Very-Easy',
        desc: 'Identifier comment est gérée l\'authentification.',
        tags: ['Web', 'JavaScript', 'Auth'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification',
        writeupId: 'wu4'
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
        id: 'c3a',
        title: 'Javascript - Obfuscation 2',
        difficulty: 'Very-Easy',
        desc: 'Déobfusquez le code JavaScript pour trouver le mot de passe permettant de valider l\'épreuve.',
        tags: ['Web', 'JavaScript', 'Obfuscation'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-2',
    },
    {
        id: 'c4',
        title: 'XSS - Stockée 1',
        difficulty: 'Medium',
        desc: 'Volez le cookie de session de l\'administrateur et utilisez-le pour valider l\'épreuve.',
        tags: ['Web', 'XSS'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1',
        writeupId: 'wu5'
    },
    {
        id: 'c5',
        title: 'SQL injection - Authentification',
        difficulty: 'Medium',
        desc: 'Retrouvez le mot de passe de l\'administrateur.',
        tags: ['Web', 'SQL', 'Server'],
        link: 'https://www.root-me.org/fr/Challenges/Web-Serveur/SQL-injection-Authentification'
    },
    {
        id: 'c6',
        title: 'FTP - Authentification',
        difficulty: 'Very-Easy',
        desc: 'Un échange authentifié de fichier réalisé grâce au protocole FTP. Retrouvez le mot de passe utilisé.',
        tags: ['Network', 'FTP', 'Auth'],
        link: 'https://www.root-me.org/fr/Challenges/Reseau/FTP-Authentification'
    },
    {
        id: 'c7',
        title: 'Twitter Secret Messages',
        difficulty: 'Very-Easy',
        desc: 'Nous soupçonnons que ce tweet cache un lieu de rendez-vous. Aidez-nous à le retrouver.',
        tags: ['Steganography', 'Crypto', 'Social Media'],
        link: 'https://www.root-me.org/fr/Challenges/Steganographie/Twitter-Secret-Messages'
    },
    {
        id: 'c8',
        title: 'Catch Me If You Can',
        difficulty: 'Easy',
        desc: 'Des images de caméras de surveillance de 2022 montrent l\'acolyte Phicer quitter un restaurant. Identifiez le nom de cet établissement.',
        tags: ['OSINT', 'Geolocation', 'Image Analysis'],
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/osint/catchmeifyoucan.html',
        writeupId: 'wu6'
    },
    {
        id: 'c9',
        title: 'Order',
        difficulty: 'Medium',
        desc: 'Un message chiffré avec XOR à clé répétitive a été intercepté. Chaque message commence par ORDER:. Retrouvez la clé et déchiffrez le message.',
        tags: ['Crypto', 'XOR', 'Known-Plaintext'],
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/crypto/order.html',
        writeupId: 'wu7'
    },
    {
        id: 'c10',
        title: 'Online Notepad Service',
        difficulty: 'Medium',
        desc: 'Accédez à des notes protégées sur un service en ligne. Exploitez une faiblesse d\'autorisation dans l\'API REST pour lire les notes d\'autres utilisateurs.',
        tags: ['Web', 'IDOR', 'API', 'Basic Auth'],
        link: 'https://github.com/APLOSN/TeamBurton/blob/main/Writeup/Hackfinity2025/Web/online-notepad.html',
        writeupId: 'wu8'
    },
    {
        id: 'c11',
        title: 'Cbizarre [1/2]',
        difficulty: 'Easy',
        desc: 'La fusée demande un flag oublié. Plongez dans les méandres du programme pour voir s\'il est vraiment nécessaire d\'avoir un mot de passe.',
        tags: ['Reverse', 'Ghidra', 'Pastebin'],
        link: 'https://pastebin.com/raw/n8CXuwE0',
        writeupId: 'wu9'
    }
];
