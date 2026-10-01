import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Header({ setMobileOpen }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="fixed top-0 left-0 right-0 lg:right-20 bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800 z-40 px-6 py-4 flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-4">
                <img 
                    src={logo} 
                    alt="Logo Gabriel Vereda" 
                    className="w-10 h-10 object-contain"
                />
                <div className="hidden sm:block">
                    <h1 className="text-lg font-bold text-white">Gabriel Vereda</h1>
                    <p className="text-xs text-slate-400">Desenvolvedor Web</p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-slate-900/80 border border-slate-700 text-slate-200 text-sm px-4 py-2 pl-10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 w-48 sm:w-64"
                    />
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <button 
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                        <span className="block w-6 h-0.5 bg-current transition-all duration-300"></span>
                        <span className="block w-6 h-0.5 bg-current transition-all duration-300"></span>
                        <span className="block w-6 h-0.5 bg-current transition-all duration-300"></span>
                    </div>
                </button>
            </div>
        </header>
    );
}
