import React from 'react';
import emailIcon from '../assets/images/icons/email.png';
import linkedinIcon from '../assets/images/icons/linkedin.png';
import githubIcon from '../assets/images/icons/github.png';
import instagramIcon from '../assets/images/icons/instagram.png';
import whatsappIcon from '../assets/images/icons/whatsapp.png';

export default function Footer() {
    return (
        <footer id="contact" className="py-16 border-t border-slate-800 text-center space-y-8 scroll-mt-28">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold text-white">Vamos Conectar?</h2>
                <p className="text-slate-400 text-base max-w-md mx-auto">
                    Em busca da primeira oportunidade profissional em Desenvolvimento de Software, Estágio em TI ou Projetos em Energias Renováveis.
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
                <a
                    href="mailto:gabrielsantosvereda@gmail.com"
                    className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-slate-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base"
                >
                    <img src={emailIcon} alt="Email" className="w-5 h-5 brightness-0 invert drop-shadow-md group-hover:brightness-0 group-hover:invert-0 transition-all duration-300" />
                    E-mail
                </a>
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
            </div>

            <div className="pt-8 text-xs text-slate-600 border-t border-slate-900">
                © 2026 Gabriel Vereda. Desenvolvido em React + Tailwind CSS.
            </div>
        </footer>
    );
}