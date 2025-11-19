
import React from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { NAV_SECTIONS } from '../utils/constants';

export const Navigation = ({
                               currentSection,
                               mobileMenuOpen,
                               setMobileMenuOpen,
                               handleNavigate
                           }) => (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-green-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <button
                    type="button"
                    onClick={() => handleNavigate('home')}
                    className="flex items-center gap-2 text-green-500"
                    aria-label="Home"
                >
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                    <span className="text-lg sm:text-xl md:text-2xl font-bold glitch" data-text="[HACKER]">
            [Lux_]
          </span>
                </button>

                <div className="hidden md:flex gap-4 lg:gap-6">
                    {NAV_SECTIONS.map(section => (
                        <button
                            key={section}
                            onClick={() => handleNavigate(section)}
                            className={`relative hover:text-green-300 transition-all hover:scale-110 group text-sm lg:text-base ${
                                currentSection === section ? 'text-green-300 border-b-2 border-green-500' : ''
                            }`}
                        >
                            <span className="relative z-10">{'>'} {section.toUpperCase()}</span>
                            <span className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/20 transition-all duration-300 -z-10 scale-0 group-hover:scale-100"></span>
                        </button>
                    ))}
                </div>

                <button
                    className="md:hidden text-green-500 hover:text-green-300 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden border-t border-green-500/30 py-4 space-y-2 bg-black/95">
                    {NAV_SECTIONS.map(section => (
                        <button
                            key={section}
                            onClick={() => handleNavigate(section)}
                            className={`block w-full text-left px-4 py-3 hover:bg-green-500/10 transition-all ${
                                currentSection === section ? 'text-green-300 bg-green-500/20 border-l-4 border-green-500' : ''
                            }`}
                        >
                            {'>'} {section.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}
        </div>
    </nav>
);