import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { skillCategories } from '../data/portfolioData';

function normalizeText(value) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('pt-BR');
}

function findPortfolioMatches(query) {
    const normalizedQuery = normalizeText(query.trim());
    if (!normalizedQuery) return [];

    const sections = document.querySelectorAll('main section, main footer');
    const matches = [];

    sections.forEach((section) => {
        const sectionTitle = section.querySelector('h2')?.textContent?.trim() || 'Contato';
        const matchingItems = [...section.querySelectorAll('h1, h2, h3, h4')].filter((item) =>
            normalizeText(item.textContent || '').includes(normalizedQuery)
        );
        const matchedTargets = new Set();

        matchingItems.forEach((item) => {
            const target = item.closest('.group') || item;
            if (matchedTargets.has(target)) return;
            matchedTargets.add(target);

            const heading = target.matches('h1, h2, h3, h4')
                ? target
                : target.querySelector('h1, h2, h3, h4');
            const title = item.textContent?.trim() || heading?.textContent?.trim() || sectionTitle;
            const detail = sectionTitle && normalizeText(sectionTitle) !== normalizeText(title)
                ? sectionTitle
                : '';

            matches.push({
                title,
                detail,
                sectionTitle,
                target
            });
        });
    });

    const renderedSkillNames = new Set(
        [...document.querySelectorAll('[data-skill-name]')].map((skill) => skill.dataset.skillName)
    );

    Object.entries(skillCategories).forEach(([category, skills]) => {
        skills.forEach((skill) => {
            if (
                !renderedSkillNames.has(skill.name) &&
                normalizeText(skill.name).includes(normalizedQuery)
            ) {
                matches.push({
                    title: skill.name,
                    detail: 'Minhas Habilidades Técnicas',
                    sectionTitle: 'Minhas Habilidades Técnicas',
                    skillCategory: category
                });
            }
        });
    });

    return matches;
}

export default function Header({ setMobileOpen }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchPending, setIsSearchPending] = useState(false);
    const searchRef = useRef(null);
    const searchTimeoutRef = useRef(null);

    useEffect(() => {
        const closeSearchOnOutsideClick = (event) => {
            if (!searchRef.current?.contains(event.target)) setIsSearchOpen(false);
        };

        document.addEventListener('pointerdown', closeSearchOnOutsideClick);
        return () => document.removeEventListener('pointerdown', closeSearchOnOutsideClick);
    }, []);

    useEffect(() => {
        window.clearTimeout(searchTimeoutRef.current);

        if (!searchQuery.trim()) {
            setSearchResults([]);
            setIsSearchPending(false);
            return undefined;
        }

        // Aguarda a pausa na digitação antes de procurar conteúdo no portfólio.
        searchTimeoutRef.current = window.setTimeout(() => {
            setSearchResults(findPortfolioMatches(searchQuery));
            setIsSearchPending(false);
        }, 275);

        return () => window.clearTimeout(searchTimeoutRef.current);
    }, [searchQuery]);

    const updateSearch = (value) => {
        setSearchQuery(value);
        setIsSearchPending(Boolean(value.trim()));
        setIsSearchOpen(Boolean(value.trim()));
    };

    const selectSearchResult = (result) => {
        setIsSearchOpen(false);

        const highlightTarget = (target) => {
            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('ring-2', 'ring-cyan-400');
            window.setTimeout(() => target.classList.remove('ring-2', 'ring-cyan-400'), 1600);
        };

        if (result.skillCategory) {
            document.querySelector(`[data-skill-category="${result.skillCategory}"]`)?.click();
            window.requestAnimationFrame(() => {
                const skill = [...document.querySelectorAll('[data-skill-name]')]
                    .find((item) => item.dataset.skillName === result.title);
                highlightTarget(skill);
            });
            return;
        }

        highlightTarget(result.target);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        window.clearTimeout(searchTimeoutRef.current);
        const results = findPortfolioMatches(searchQuery);
        setSearchResults(results);
        setIsSearchPending(false);
        setIsSearchOpen(Boolean(searchQuery.trim()));
        if (results[0]) selectSearchResult(results[0]);
    };

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
                <div className="relative" ref={searchRef}>
                    <form onSubmit={handleSearchSubmit} role="search" className="relative">
                        <input
                            type="search"
                            placeholder="Buscar no portfólio..."
                            aria-label="Buscar no portfólio"
                            aria-expanded={isSearchOpen}
                            value={searchQuery}
                            onChange={(event) => updateSearch(event.target.value)}
                            onFocus={() => searchQuery.trim() && setIsSearchOpen(true)}
                            onKeyDown={(event) => {
                                if (event.key === 'Escape') setIsSearchOpen(false);
                            }}
                            className="bg-slate-900/80 border border-slate-700 text-slate-200 text-sm px-4 py-2 pl-10 rounded-lg focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 w-48 sm:w-64"
                        />
                        <button
                            type="submit"
                            aria-label="Buscar"
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <Search size={16} aria-hidden="true" />
                        </button>
                    </form>

                    {isSearchOpen && (
                        <div className="absolute right-0 mt-2 w-[min(24rem,calc(100vw-2rem))] max-h-80 overflow-y-auto rounded-xl border border-slate-700 bg-slate-950 shadow-2xl shadow-black/40">
                            {isSearchPending ? (
                                <p className="px-4 py-3 text-sm text-slate-400" role="status">Buscando...</p>
                            ) : searchResults.length ? (
                                <ul aria-label="Resultados da busca" className="divide-y divide-slate-800">
                                    {searchResults.map((result, index) => (
                                        <li key={`${result.sectionTitle}-${result.title}-${index}`}>
                                            <button
                                                type="button"
                                                onClick={() => selectSearchResult(result)}
                                                className="w-full px-4 py-3 text-left hover:bg-slate-900 focus-visible:outline-none focus-visible:bg-slate-900 transition-colors"
                                            >
                                                <span className="block text-sm font-semibold text-slate-100">{result.title}</span>
                                                {result.detail && (
                                                    <span className="block mt-1 text-xs text-slate-500 truncate">{result.detail}</span>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="px-4 py-3 text-sm text-slate-400">Nenhum resultado encontrado.</p>
                            )}
                        </div>
                    )}
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
