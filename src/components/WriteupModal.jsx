
import React, { useEffect, useRef } from 'react';
import { X, Clock, Calendar, Tag, ExternalLink } from 'lucide-react';

const DIFFICULTY_COLOR = {
    'Very Easy':  'text-blue-400',
    'Very-Easy':  'text-blue-400',
    'Easy':       'text-green-400',
    'Medium':     'text-yellow-400',
    'Hard':       'text-orange-400',
    'Very Hard':  'text-red-400',
};

const renderInline = (text) => {
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={i} className="text-green-200 font-bold">{part.slice(2, -2)}</strong>;
        if (part.startsWith('*') && part.endsWith('*'))
            return <em key={i} className="text-green-300 italic">{part.slice(1, -1)}</em>;
        if (part.startsWith('`') && part.endsWith('`'))
            return <code key={i} className="bg-black/70 border border-green-500/30 px-1 py-0.5 text-xs font-mono text-green-300 rounded">{part.slice(1, -1)}</code>;
        return part;
    });
};

const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const out = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Image: ![alt](src)
        const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            const [, alt, src] = imgMatch;
            out.push(
                <div key={key++} className="my-4 border border-green-500/20 overflow-hidden">
                    <img
                        src={src}
                        alt={alt}
                        className="w-full object-contain max-h-[400px] bg-black/40"
                        loading="lazy"
                    />
                    {alt && (
                        <p className="text-xs text-green-400/40 font-mono text-center py-1 px-2 border-t border-green-500/10">
                            {alt}
                        </p>
                    )}
                </div>
            );
            i++;
            continue;
        }

        if (line.trimStart().startsWith('```')) {
            const lang = line.trim().slice(3).trim();
            const code = [];
            i++;
            while (i < lines.length && !lines[i].trimStart().startsWith('```')) {
                code.push(lines[i]);
                i++;
            }
            out.push(
                <div key={key++} className="my-3">
                    {lang && (
                        <span className="block text-xs text-green-400/40 font-mono mb-1">[{lang}]</span>
                    )}
                    <pre className="bg-black/80 border border-green-500/20 p-3 text-xs sm:text-sm text-green-200 overflow-x-auto font-mono whitespace-pre leading-relaxed">
                        {code.join('\n')}
                    </pre>
                </div>
            );
            i++;
            continue;
        }

        if (line.startsWith('#### ')) {
            out.push(<h5 key={key++} className="text-sm font-bold text-green-200/80 mt-3 mb-1">{line.slice(5)}</h5>);
        } else if (line.startsWith('### ')) {
            out.push(<h4 key={key++} className="text-sm sm:text-base font-bold text-green-200 mt-4 mb-1">> {line.slice(4)}</h4>);
        } else if (line.startsWith('## ')) {
            out.push(<h3 key={key++} className="text-base sm:text-lg font-bold text-green-300 mt-5 mb-1 border-l-2 border-green-500 pl-2">{line.slice(3)}</h3>);
        } else if (line.startsWith('# ')) {
            out.push(<h2 key={key++} className="text-lg sm:text-xl font-bold text-green-400 mt-5 mb-2 border-b border-green-500/30 pb-1">{line.slice(2)}</h2>);
        } else if (line.startsWith('- ') || line.startsWith('✅') || line.startsWith('❌')) {
            out.push(
                <p key={key++} className="text-xs sm:text-sm text-green-400/80 leading-relaxed ml-2">
                    {renderInline(line)}
                </p>
            );
        } else if (line.trim() === '') {
            out.push(<div key={key++} className="h-2" />);
        } else {
            out.push(
                <p key={key++} className="text-xs sm:text-sm text-green-400/80 leading-relaxed">
                    {renderInline(line)}
                </p>
            );
        }

        i++;
    }

    return out;
};

export const WriteupModal = ({ writeup, onClose }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const diffColor = DIFFICULTY_COLOR[writeup.difficulty] ?? 'text-green-400';

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
            onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col border-2 border-green-500/60 bg-[#020c02] shadow-[0_0_40px_rgba(34,197,94,0.15)]">

                {/* Header */}
                <div className="shrink-0 flex items-start justify-between gap-4 p-4 sm:p-5 border-b border-green-500/20 bg-black/60">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 text-xs font-mono">
                            <span className="text-green-400/40">[WRITEUP]</span>
                            <span className={diffColor}>{writeup.difficulty}</span>
                            <span className="text-green-400/30">·</span>
                            <span className="text-green-400/50">{writeup.platform}</span>
                        </div>
                        <h2 className="text-sm sm:text-base md:text-lg font-bold text-green-300 break-words">
                            {writeup.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-green-400/40 font-mono">
                            {writeup.date && (
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" /> {writeup.date}
                                </span>
                            )}
                            {writeup.readTime && (
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {writeup.readTime}
                                </span>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Fermer"
                        className="shrink-0 mt-0.5 text-green-400/40 hover:text-green-300 transition-colors"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                {/* Tags */}
                {writeup.tags?.length > 0 && (
                    <div className="shrink-0 flex flex-wrap gap-1.5 px-4 sm:px-5 pt-3">
                        {writeup.tags.map((t) => (
                            <span key={t} className="text-xs px-2 py-0.5 border border-green-500/25 text-green-400/60 font-mono">
                                <Tag className="w-2.5 h-2.5 inline mr-1 -mt-px" />{t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-0.5">
                    {renderContent(writeup.content)}
                </div>

                {/* Footer */}
                <div className="shrink-0 border-t border-green-500/20 px-4 sm:px-5 py-3 flex items-center justify-between bg-black/60">
                    <a
                        href={writeup.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-green-500/70 hover:text-green-300 transition-colors font-mono"
                    >
                        <ExternalLink className="w-3.5 h-3.5" /> Challenge original
                    </a>
                    <button
                        onClick={onClose}
                        className="text-xs px-3 py-1.5 border border-green-500/30 text-green-400/60 hover:border-green-400 hover:text-green-200 transition-colors font-mono"
                    >
                        [ESC] Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};
