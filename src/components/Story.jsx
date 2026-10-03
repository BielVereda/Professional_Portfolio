import React from 'react';

export default function Story() {
    return (
        <section id="story" className="scroll-mt-28">
            <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Quem Eu Sou
                </div>
                <h2 className="text-4xl font-bold text-white">Minha Trajetória & Visão</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    <p className="group hover:text-slate-200 transition-colors duration-300">
                        Minha paixão pela tecnologia começou com a curiosidade de entender como sistemas, páginas web e softwares funcionavam por trás dos panos. Isso me levou à <strong className="text-white group-hover:text-cyan-400 transition-colors duration-300">Escola SENAI Suíço-Brasileira</strong>, onde me aprofundei em Lógica de Programação, Desenvolvimento Web, Banco de Dados e arquitetura de software no curso <strong className="text-white group-hover:text-cyan-400 transition-colors duration-300">Técnico em Desenvolvimento de Sistemas</strong>.
                    </p>
                    <p className="group hover:text-slate-200 transition-colors duration-300">
                        Em busca de desafios maiores e visão global, iniciei o bacharelado em <strong className="text-white group-hover:text-cyan-400 transition-colors duration-300">Engenharia da Computação pela UNIVESP (EAD)</strong>. Ao mesmo tempo, expandi meus horizontes para o setor de inovação e sustentabilidade ao concluir a formação em <strong className="text-white group-hover:text-cyan-400 transition-colors duration-300">Sistemas Fotovoltaicos (Energias Renováveis)</strong>, tornando-me competidor da <strong className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">WorldSkills São Paulo (Modalidade #62)</strong>.
                    </p>
                    <p className="group hover:text-slate-200 transition-colors duration-300">
                        Fora do ambiente acadêmico, dou aulas de violão e guitarra para crianças na igreja às segundas-feiras e participo da banda durante os cultos, tocando violão, guitarra e baixo, além de cantar.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                    <div className="text-6xl font-bold text-cyan-400 mb-2">3+</div>
                    <div className="text-sm text-slate-300">Anos de Experiência</div>
                    <div className="text-xs text-slate-500 mt-1">em Desenvolvimento & Energias</div>
                </div>
            </div>
        </section>
    );
}