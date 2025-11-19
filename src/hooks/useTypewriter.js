
import { useState, useEffect } from 'react';

export const useTypewriter = (text, showContent, speed = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (!showContent) return;

        let index = 0;
        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [showContent, text, speed]);

    return displayText;
};
