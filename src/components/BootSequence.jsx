
import React from 'react';
import { Terminal } from 'lucide-react';

export const BootSequence = ({ bootSequence }) => (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
            <div className="border-2 border-green-500 bg-black p-4 sm:p-6 md:p-8">
                <div className="mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 animate-pulse" />
                    <span className="text-green-500 font-bold text-sm sm:text-base">SYSTEM BOOT</span>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                    {bootSequence.map((msg, i) => (
                        <div key={i} className="text-green-400 animate-pulse break-words">
                            {msg}
                        </div>
                    ))}
                    <div className="text-green-500 animate-pulse">_</div>
                </div>
            </div>
        </div>
    </div>
);