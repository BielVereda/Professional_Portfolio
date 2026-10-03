import React from 'react';

export default function Volunteering() {
    return (
        <section id="volunteering" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Impacto Social
                </div>
                <h2 className="text-4xl font-bold text-white">Atuação Voluntária & Liderança</h2>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl space-y-6 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="group">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">Educador Infantojuvenil & Músico Voluntário</h3>
                    <p className="text-xs text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors duration-300">Atividades Comunitárias e Sociais</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-300 list-none">
                    <li className="flex items-start gap-3 group hover:text-slate-200 transition-colors duration-300">
                        <span className="text-cyan-400 mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                        <span>Aulas de violão e guitarra para crianças na igreja, às segundas-feiras, com planejamento didático e acompanhamento do aprendizado.</span>
                    </li>
                    <li className="flex items-start gap-3 group hover:text-slate-200 transition-colors duration-300">
                        <span className="text-cyan-400 mt-1 group-hover:scale-125 transition-transform duration-300">•</span>
                        <span>Participação na banda da igreja durante os cultos, tocando violão, guitarra e baixo, além de cantar.</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}