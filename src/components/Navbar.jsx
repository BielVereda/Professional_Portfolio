import React from 'react';
import { navItems } from '../data/portfolioData';
import homeIcon from '../assets/images/icons/home.png';
import userIcon from '../assets/images/icons/user.png';
import bookIcon from '../assets/images/icons/book.png';
import starIcon from '../assets/images/icons/star.png';
import folderIcon from '../assets/images/icons/folder.png';
import awardIcon from '../assets/images/icons/award.png';
import heartIcon from '../assets/images/icons/heart.png';
import mailIcon from '../assets/images/icons/mail.png';

const iconMap = {
    home: homeIcon,
    story: userIcon,
    education: bookIcon,
    skills: starIcon,
    projects: folderIcon,
    certificates: awardIcon,
    volunteering: heartIcon,
    contact: mailIcon
};

export default function Navbar({ activeSection, mobileOpen, setMobileOpen }) {
    return (
        <>
            {/* Navbar Lateral Direita Desktop */}
            <nav className="fixed right-0 top-0 h-full w-16 lg:w-20 bg-slate-900/90 backdrop-blur-xl border-l border-slate-800 z-50 hidden lg:flex flex-col items-center justify-center py-10 gap-4 animate-fade-in">
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    const iconSrc = iconMap[item.id];
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`relative group flex flex-col items-center gap-2 transition-all duration-300 ${isActive
                                    ? 'text-cyan-400 scale-110'
                                    : 'text-slate-400 hover:text-slate-200 hover:scale-110'
                                }`}
                            title={item.label}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                    ? 'bg-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.25)]'
                                    : 'bg-slate-800/50 group-hover:bg-slate-700/50'
                                }`}>
                                <img 
                                    src={iconSrc} 
                                    alt={item.label}
                                    className="w-5 h-5 brightness-0 invert"
                                />
                            </div>
                            <span className="text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </nav>

            {/* Menu Mobile Drawer */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 text-lg font-medium animate-fade-in">
                    {navItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}