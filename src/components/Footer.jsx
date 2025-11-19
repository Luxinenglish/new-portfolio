
import React from 'react';

export const Footer = () => (
    <footer className="relative w-full mt-auto">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="180"
            viewBox="0 0 1200 180"
            role="img"
            aria-label="Sol enneigé"
            className="w-full h-auto"
        >
            <defs>
                <linearGradient id="snowGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#ffffff"/>
                    <stop offset="1" stopColor="#f0f6ff"/>
                </linearGradient>
                <linearGradient id="shadeGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#ffffff" stopOpacity="0.98"/>
                    <stop offset="1" stopColor="#e9f1ff" stopOpacity="1"/>
                </linearGradient>
                <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
                    <feOffset in="blur" dx="0" dy="6" result="off"/>
                    <feMerge>
                        <feMergeNode in="off"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <rect x="0" y="0" width="1200" height="80" fill="none"/>
            <g filter="url(#softShadow)">
                <path d="M0 70 C120 50 260 55 420 75 C560 95 700 55 860 75 C980 90 1100 65 1200 80 L1200 180 L0 180 Z" fill="url(#snowGrad)"/>
            </g>
            <path d="M0 80 C160 65 300 72 420 88 C560 103 700 78 860 93 C980 105 1100 85 1200 95" fill="none" stroke="#f7fbff" strokeWidth="2" opacity="0.85"/>
            <g opacity="0.9">
                <ellipse cx="120" cy="115" rx="12" ry="4" fill="#ffffff" opacity="0.8"/>
                <ellipse cx="260" cy="120" rx="8" ry="3" fill="#ffffff" opacity="0.75"/>
                <ellipse cx="480" cy="118" rx="10" ry="4" fill="#ffffff" opacity="0.78"/>
                <ellipse cx="740" cy="117" rx="9" ry="3.5" fill="#ffffff" opacity="0.76"/>
                <ellipse cx="980" cy="112" rx="14" ry="5" fill="#ffffff" opacity="0.82"/>
                <ellipse cx="600" cy="200" rx="540" ry="18" fill="#cfdff7" opacity="0.06"/>
                <ellipse cx="600" cy="160" rx="540" ry="18" fill="#cfdff7" opacity="0.06"/>
            </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10" style={{ marginTop: '50px' }}>
            <p className="text-gray-600 text-xs sm:text-sm padding-bottom-4">
                © 2025 Lux_ - Fait avec ❤️ et beaucoup de ☕
            </p>
        </div>
    </footer>
);