import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
    const [selectedTab, setSelectedTab] = useState('web');

    return (
        <section id="skills" className="space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Competências
                </div>
                <h2 className="text-4xl font-bold text-white">Minhas Habilidades Técnicas</h2>
            </div>

            <div className="flex flex-wrap gap-3 border-b border-slate-800 pb-6">
                {[
                    { id: 'web', label: 'Front-End / Web' },
                    { id: 'backend', label: 'Linguagens & Cloud' },
                    { id: 'renewable', label: 'Energias & Fotovoltaica' },
                    { id: 'cybersecurity', label: 'CyberSecurity' },
                    { id: 'soft', label: 'Soft Skills & Liderança' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${selectedTab === tab.id
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                                : 'bg-slate-900/80 backdrop-blur-sm text-slate-400 hover:text-white hover:bg-slate-800/60 hover:scale-105 border border-slate-700'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
                {skillCategories[selectedTab].map((skill, idx) => (
                    <div 
                        key={idx} 
                        className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-xl flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors duration-300">{skill.name}</h4>
                                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full group-hover:bg-cyan-500/20 transition-all duration-300">
                                    {skill.level}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{skill.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}