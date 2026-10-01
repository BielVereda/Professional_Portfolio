import React from 'react';
import githubIcon from '../assets/images/icons/github.png';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Portfólio Prático
                </div>
                <h2 className="text-4xl font-bold text-white">Projetos & Trabalhos</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {projectsData.map((proj, idx) => (
                    <div 
                        key={idx} 
                        className="group bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                    >
                        <div>
                            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider group-hover:text-cyan-300 transition-colors duration-300">{proj.type}</span>
                            <h3 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors duration-300">{proj.title}</h3>
                            <p className="text-slate-400 text-sm mt-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{proj.description}</p>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {proj.techs.map((t, i) => (
                                    <span 
                                        key={i} 
                                        className="bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-medium px-2.5 py-1 rounded-full group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/80 text-xs font-semibold">
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group-hover:scale-105 transform"
                            >
                                <img src={githubIcon} alt="GitHub" className="w-4 h-4 brightness-0 invert" /> Abrir repositório
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}