
import { useState, useEffect } from 'react';
import { BOOT_MESSAGES } from '../utils/constants';

export const useBootSequence = () => {
    const [bootSequence, setBootSequence] = useState([]);
    const [showLux, setShowLux] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        let messageIndex = 0;
        const bootTimer = setInterval(() => {
            if (messageIndex < BOOT_MESSAGES.length) {
                setBootSequence(prev => [...prev, BOOT_MESSAGES[messageIndex]]);
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

    return { bootSequence, showLux, showContent };
};
