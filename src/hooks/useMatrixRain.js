
import { useState, useEffect } from 'react';

export const useMatrixRain = (isWinter) => {
    const [matrixRain, setMatrixRain] = useState([]);

    useEffect(() => {
        const columns = window.innerWidth < 640 ? 30 : 50;

        if (isWinter) {
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

    return matrixRain;
};