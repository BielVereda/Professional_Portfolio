import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleCertificates = useMemo(() => {
        return Array.from({ length: Math.min(2, certificatesData.length) }, (_, offset) => {
            const certIndex = (activeIndex + offset) % certificatesData.length;
            return {
                cert: certificatesData[certIndex],
                certIndex
            };
        });
    }, [activeIndex]);

    const handlePrevious = () => {
        setActiveIndex((current) => (current - 1 + certificatesData.length) % certificatesData.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % certificatesData.length);
    };

    return (
        <section id="certificates" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Reconhecimentos
                </div>
                <h2 className="text-4xl font-bold text-white">Certificados & WorldSkills</h2>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/40 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/30 shrink-0 animate-pulse">
                    <span className="text-4xl font-bold">WS</span>
                </div>
                <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest animate-gradient-text">Destaque de Alta Performance</span>
                    <h3 className="text-2xl font-bold text-white mt-1">Competidor WorldSkills São Paulo (Modalidade #62)</h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        Seleção para representar a instituição nos exames práticos de dimensionamento, montagem e análise técnica de sistemas de Energias Renováveis sob rígidos padrões internacionais.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/40 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/30 shrink-0">
                    <span className="text-2xl font-bold">OLISP</span>
                </div>
                <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Reconhecimento</span>
                    <h3 className="text-2xl font-bold text-white mt-1">3º lugar na OLISP</h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        Competição da SEDUC-SP que incentiva a competência leitora e a interpretação textual.
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-end gap-3 text-sm text-slate-400">
                <span aria-live="polite">{activeIndex + 1} / {certificatesData.length}</span>
                <button
                    type="button"
                    onClick={handlePrevious}
                    aria-label="Certificado anterior"
                    className="p-2 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                >
                    <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Próximo certificado"
                    className="p-2 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
                >
                    <ChevronRight size={18} aria-hidden="true" />
                </button>
            </div>

            <div
                key={activeIndex}
                className="animate-certificate-transition relative mx-auto h-[360px] w-full max-w-[1200px] overflow-hidden"
            >
                {visibleCertificates.map(({ cert, certIndex }, index) => {
                    const isActive = index === 0;
                    const offset = index * 28;
                    const scale = 1 - index * 0.02;
                    const opacity = isActive ? 1 : 0.9;

                    return (
                        <div
                            key={`${cert.name}-${certIndex}`}
                            className="absolute inset-x-0 top-0 mx-auto w-full max-w-[1180px]"
                            style={{
                                transform: `translateY(${offset}px) scale(${scale})`,
                                opacity,
                                zIndex: 30 - index,
                                pointerEvents: isActive ? 'auto' : 'none',
                                filter: isActive ? 'none' : 'blur(0.1px)'
                            }}
                        >
                            <div className="group bg-slate-900/85 backdrop-blur-sm border border-slate-800/80 p-5 rounded-2xl shadow-xl shadow-cyan-500/5 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl text-cyan-400 shrink-0 mt-1">✓</span>

                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-3xl font-bold text-white leading-snug break-words">
                                            {cert.name}
                                        </h4>
                                        <p className="mt-3 text-lg text-slate-500">
                                            {cert.issuer} • <span className="text-cyan-400">{cert.category}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    {cert.files?.length ? (
                                        <a
                                            href={encodeURI(`/certificates/${cert.files[0].path}`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                                        >
                                            Visualizar certificado
                                            <span aria-hidden="true">→</span>
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-3 text-2xl font-semibold text-cyan-400">
                                            Visualizar certificado
                                            <span aria-hidden="true">→</span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}