
import React from 'react';

export const MatrixRain = ({ matrixRain, isWinter }) => (
    <div className="fixed inset-0 opacity-50 pointer-events-none">
        {isWinter ? matrixRain.map((f, i) => (
            <div
                key={i}
                className="absolute text-white"
                style={{
                    left: `${f.x}%`,
                    top: `${f.y}%`,
                    fontSize: `${f.size}px`,
                    transform: 'translateX(-50%)',
                    pointerEvents: 'none'
                }}
                aria-hidden="true"
            >
                ❄
            </div>
        )) : matrixRain.map((y, i) => (
            <div
                key={i}
                className="absolute text-green-500 text-xs"
                style={{
                    left: `${(i / matrixRain.length) * 100}%`,
                    top: `${y}%`,
                    transform: 'translateY(-100%)'
                }}
            >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
        ))}
    </div>
);