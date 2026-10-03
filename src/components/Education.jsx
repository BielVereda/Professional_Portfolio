import React from 'react';

export default function Education() {
    return (
        <section id="education" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Formação Acadêmica
                </div>
                <h2 className="text-4xl font-bold text-white">Minha Jornada de Estudos</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl relative overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-300"></div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300">Ensino Superior</span>
                    <h3 className="text-xl font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors duration-300">Bacharelado em Engenharia da Computação</h3>
                    <p className="text-slate-400 text-sm mt-1 group-hover:text-slate-300 transition-colors duration-300">UNIVESP (EAD) | 1º Semestre em andamento | Conclusão: 2031</p>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Formação focada em fundamentos de arquitetura de computadores, matemática aplicada, algoritmos e engenharia de software.</p>
                </div>

                <div className="group bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl relative overflow-hidden hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-300"></div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-300">Formação Técnica</span>
                    <h3 className="text-xl font-bold text-white mt-4 group-hover:text-cyan-400 transition-colors duration-300">Técnico em Desenvolvimento de Sistemas</h3>
                    <p className="text-slate-400 text-sm mt-1 group-hover:text-slate-300 transition-colors duration-300">Escola SENAI Suíço-Brasileira | 4º Semestre em andamento| Conclusão: Dez/2026</p>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">Foco prático em desenvolvimento web front-end, lógica de programação, modelagem de banco de dados e testes de software.</p>
                </div>
            </div>
        </section>
    );
}