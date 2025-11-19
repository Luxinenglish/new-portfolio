// ==============================================
// src/App.jsx - Fichier principal
// ==============================================

import React, { useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { LuxAnimation } from './components/LuxAnimation';
import { MatrixRain } from './components/MatrixRain';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeSection } from './components/sections/HomeSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { WhoamiSection } from './components/sections/WhoamiSection';
import { RoomsSection } from './components/sections/RoomsSection';
import { useBootSequence } from './hooks/useBootSequence';
import { useTypewriter } from './hooks/useTypewriter';
import { useMatrixRain } from './hooks/useMatrixRain';
import { FULL_TEXT } from './utils/constants';

export default function HackerPortfolio() {
    const [currentSection, setCurrentSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const month = new Date().getMonth();
    const isWinter = month === 10 || month === 11 || month === 0 || month === 1;

    const { bootSequence, showLux, showContent } = useBootSequence();
    const displayText = useTypewriter(FULL_TEXT, showContent);
    const matrixRain = useMatrixRain(isWinter);

    const handleNavigate = (section) => {
        setCurrentSection(section);
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
            {/* Boot Sequence */}
            {!showLux && !showContent && (
                <BootSequence bootSequence={bootSequence} />
            )}

            {/* Lux_ Animation */}
            {showLux && !showContent && (
                <LuxAnimation />
            )}

            {showContent && (
                <>
                    {/* Matrix Rain / Snow Effect */}
                    <MatrixRain matrixRain={matrixRain} isWinter={isWinter} />

                    {/* Scanline Effect */}
                    <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse" />

                    {/* Navigation */}
                    <Navigation
                        currentSection={currentSection}
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                        handleNavigate={handleNavigate}
                    />

                    {/* Sections */}
                    {currentSection === 'home' && (
                        <HomeSection
                            displayText={displayText}
                            handleNavigate={handleNavigate}
                        />
                    )}

                    {currentSection === 'projects' && <ProjectsSection />}

                    {currentSection === 'skills' && <SkillsSection />}

                    {currentSection === 'whoami' && <WhoamiSection />}

                    {currentSection === 'rooms' && <RoomsSection />}

                    {/* Footer */}
                    <Footer />
                </>
            )}
        </div>
    );
}