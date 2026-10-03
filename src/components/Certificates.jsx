import React from 'react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {certificatesData.map((cert, idx) => (
                    <div 
                        key={idx} 
                        className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 p-4 rounded-xl flex flex-col justify-between gap-3 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-xl text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">✓</span>
                            <div>
                                <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">{cert.name}</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5 group-hover:text-slate-400 transition-colors duration-300">{cert.issuer} • <span className="text-cyan-400/80 group-hover:text-cyan-400 transition-colors duration-300">{cert.category}</span></p>
                            </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                            {cert.files?.length ? cert.files.map((file) => (
                                <a
                                    key={file.path}
                                    href={encodeURI(`/certificates/${file.path}`)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                                >
                                    {file.label ?? 'Visualizar certificado'}
                                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                                </a>
                            )) : (
                                <span className="text-xs text-slate-500">Certificado ainda não disponível</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}