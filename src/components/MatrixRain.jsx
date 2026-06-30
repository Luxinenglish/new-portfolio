
import React, { useEffect, useRef } from 'react';

export const MatrixRain = ({ isWinter }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        if (isWinter) {
            const count = window.innerWidth < 640 ? 30 : 60;
            const flakes = Array.from({ length: count }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: 8 + Math.random() * 14,
                speed: 0.5 + Math.random() * 1.5,
                opacity: 0.3 + Math.random() * 0.7
            }));

            const draw = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                flakes.forEach(f => {
                    ctx.globalAlpha = f.opacity;
                    ctx.font = `${f.size}px serif`;
                    ctx.fillStyle = '#ffffff';
                    ctx.fillText('❄', f.x, f.y);
                    f.y += f.speed;
                    if (f.y > canvas.height + 20) {
                        f.x = Math.random() * canvas.width;
                        f.y = -20;
                        f.size = 8 + Math.random() * 14;
                        f.speed = 0.5 + Math.random() * 1.5;
                    }
                });
                ctx.globalAlpha = 1;
                animationId = requestAnimationFrame(draw);
            };
            draw();
        } else {
            const fontSize = 14;
            const columns = Math.floor(canvas.width / fontSize);
            const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
            let lastTime = 0;

            const draw = (timestamp) => {
                if (timestamp - lastTime >= 60) {
                    lastTime = timestamp;
                    ctx.fillStyle = 'rgba(0,0,0,0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = '#22c55e';
                    ctx.font = `${fontSize}px monospace`;
                    for (let i = 0; i < drops.length; i++) {
                        const char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
                        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i]++;
                    }
                }
                animationId = requestAnimationFrame(draw);
            };
            draw(0);
        }

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, [isWinter]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ opacity: 0.5, zIndex: 0 }}
            aria-hidden="true"
        />
    );
};
