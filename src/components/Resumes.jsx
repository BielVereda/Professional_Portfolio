import React from 'react';
import codeIcon from '../assets/images/icons/computer.png';
import energyIcon from '../assets/images/icons/solar-panel.png';
import downloadIcon from '../assets/images/icons/download-arrow.png';

export default function Resumes() {
    return (
        <section id="resumes" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Currículos
                </div>
                <h2 className="text-4xl font-bold text-white">Currículos por Área</h2>
                <p className="text-slate-400 text-base max-w-2xl">
                    Currículos separados por área de atuação para manter as carreiras distintas e focadas.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                            <img src={codeIcon} alt="Development" className="w-8 h-8 brightness-0 invert" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Desenvolvimento de Software</h3>
                            <p className="text-sm text-slate-400">Front-end, Back-end e Full Stack</p>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Currículo focado em desenvolvimento web, React, JavaScript, Python e tecnologias de cloud computing com ênfase em desenvolvimento de aplicações modernas.
                    </p>
                    <a
                        href="/cv-development.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 text-sm"
                    >
                        <img src={downloadIcon} alt="Download" className="w-4 h-4 brightness-0" />
                        Baixar Currículo
                    </a>
                </div>

                <div className="group bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                            <img src={energyIcon} alt="Energy" className="w-8 h-8 brightness-0 invert" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Energias Renováveis & Fotovoltaica</h3>
                            <p className="text-sm text-slate-400">Sistemas fotovoltaicos e energia sustentável</p>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Currículo focado em sistemas fotovoltaicos, energias renováveis, dimensionamento de projetos, cloud computing com foco em segurança e cibersegurança aplicada.
                    </p>
                    <a
                        href="/cv-photovoltaic.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 text-sm"
                    >
                        <img src={downloadIcon} alt="Download" className="w-4 h-4 brightness-0" />
                        Baixar Currículo
                    </a>
                </div>
            </div>
        </section>
    );
}
