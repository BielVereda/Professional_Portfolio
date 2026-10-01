import React from 'react';
import linkedinIcon from '../assets/images/icons/linkedin.png';
import githubIcon from '../assets/images/icons/github.png';
import instagramIcon from '../assets/images/icons/instagram.png';
import whatsappIcon from '../assets/images/icons/whatsapp.png';
import emailIcon from '../assets/images/icons/email.png';

export default function Hero() {
    return (
        <section id="home" className="flex flex-col items-start gap-8 pt-8 scroll-mt-28">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/40 px-4 py-2 rounded-full text-sm font-medium text-cyan-400 shadow-lg shadow-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300">
                <span className="animate-gradient-text">Desenvolvedor Web & Especialista em Energias Renováveis</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight">
                Olá, eu sou o <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">Gabriel Vereda</span>.
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
                Estudante de <strong className="text-slate-200 hover:text-cyan-400 transition-colors duration-300">Engenharia da Computação (VUNESP)</strong> e <strong className="text-slate-200 hover:text-cyan-400 transition-colors duration-300">Técnico em Desenvolvimento de Sistemas (SENAI Suíço-Brasileira)</strong>. Unindo tecnologia de software, energia sustentável e liderança comunitária.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
                <a
                    href="https://www.linkedin.com/in/gabriel-vereda/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/BielVereda"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={githubIcon} alt="GitHub" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    GitHub
                </a>
                <a
                    href="https://www.instagram.com/biel.vereda/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={instagramIcon} alt="Instagram" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    Instagram
                </a>
                <a
                    href="https://wa.me/5511913359082"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    WhatsApp
                </a>
                <a
                    href="mailto:gabrielsantosvereda@gmail.com"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={emailIcon} alt="Email" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    Email
                </a>
            </div>
        </section>
    );
}