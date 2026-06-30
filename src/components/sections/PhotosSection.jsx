
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { photos } from '../../data/photos';

const Lightbox = ({ photo, index, total, onClose, onPrev, onNext }) => (
    <div
        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4"
        onClick={onClose}
    >
        <button
            className="absolute top-4 right-4 text-green-400 hover:text-green-200 transition-colors"
            onClick={onClose}
            aria-label="Fermer"
        >
            <X className="w-8 h-8" />
        </button>

        <div
            className="relative flex items-center gap-4 max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
        >
            <button
                className="shrink-0 text-green-400 hover:text-green-200 transition-colors disabled:opacity-20"
                onClick={onPrev}
                disabled={index === 0}
                aria-label="Précédente"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="flex-1 flex flex-col items-center gap-4">
                <img
                    src={photo.src}
                    alt={photo.title || ''}
                    className="max-h-[75vh] w-auto max-w-full object-contain border border-green-500/30"
                />
                {(photo.title || photo.description) && (
                    <div className="text-center">
                        {photo.title && (
                            <p className="text-green-300 font-bold text-sm sm:text-base">
                                {'>'} {photo.title}
                            </p>
                        )}
                        {photo.description && (
                            <p className="text-green-400/60 text-xs sm:text-sm mt-1">{photo.description}</p>
                        )}
                    </div>
                )}
                <p className="text-green-400/40 text-xs">{index + 1} / {total}</p>
            </div>

            <button
                className="shrink-0 text-green-400 hover:text-green-200 transition-colors disabled:opacity-20"
                onClick={onNext}
                disabled={index === total - 1}
                aria-label="Suivante"
            >
                <ChevronRight className="w-10 h-10" />
            </button>
        </div>
    </div>
);

export const PhotosSection = () => {
    const [lightbox, setLightbox] = useState(null);

    const openLightbox = (index) => setLightbox(index);
    const closeLightbox = () => setLightbox(null);
    const prevPhoto = () => setLightbox(i => Math.max(0, i - 1));
    const nextPhoto = () => setLightbox(i => Math.min(photos.length - 1, i + 1));

    return (
        <section className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
                    {'>'} GALERIE_PHOTOS
                    <span className="animate-pulse ml-1">_</span>
                </h2>

                {photos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-24 border border-green-500/20 text-green-400/40">
                        <ImageOff className="w-16 h-16" />
                        <p className="text-sm font-mono">
                            {'>'} Aucune photo trouvée.
                        </p>
                        <p className="text-xs text-green-400/30">
                            Place tes images dans <code className="text-green-400/50">public/photos/</code> et référence-les dans <code className="text-green-400/50">src/data/photos.js</code>
                        </p>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {photos.map((photo, i) => (
                            <div
                                key={i}
                                className="break-inside-avoid border border-green-500/20 overflow-hidden hover:border-green-500 transition-all duration-300 cursor-pointer group"
                                onClick={() => openLightbox(i)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={photo.src}
                                        alt={photo.title || `Photo ${i + 1}`}
                                        loading="lazy"
                                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
                                        {photo.title && (
                                            <p className="text-green-300 text-xs font-bold">{'>'} {photo.title}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {lightbox !== null && (
                <Lightbox
                    photo={photos[lightbox]}
                    index={lightbox}
                    total={photos.length}
                    onClose={closeLightbox}
                    onPrev={prevPhoto}
                    onNext={nextPhoto}
                />
            )}
        </section>
    );
};
