import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import githubIcon from '../assets/images/icons/github.png';

// Mantém projetos em destaque visíveis se a API pública do GitHub falhar ou atingir o limite.
const fallbackRepositories = [
    {
        id: 'fallback-alura-racing',
        name: 'Alura_jogo_corrida',
        description: 'Jogo de corrida criado com JavaScript.',
        html_url: 'https://github.com/BielVereda/Alura_jogo_corrida',
        language: 'JavaScript',
        stargazers_count: 5,
        forks_count: 0,
        fork: false
    },
    {
        id: 'fallback-pokemon-battle',
        name: 'Pokemon-Battle',
        description: 'Projeto de batalha Pokémon desenvolvido em TypeScript.',
        html_url: 'https://github.com/BielVereda/Pokemon-Battle',
        language: 'TypeScript',
        stargazers_count: 5,
        forks_count: 0,
        fork: false
    },
    {
        id: 'fallback-java-project',
        name: 'Aulas_LOPAL_Fiamma',
        description: 'Exercícios e projetos de lógica de programação em Java, desenvolvidos no SENAI.',
        html_url: 'https://github.com/BielVereda/Aulas_LOPAL_Fiamma',
        language: 'Java',
        stargazers_count: 5,
        forks_count: 0,
        fork: false
    }
];

export default function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [loadState, setLoadState] = useState('loading');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const carouselRef = useRef(null);

    useEffect(() => {
        let isActive = true;

        fetch('https://api.github.com/users/BielVereda/repos?per_page=100&sort=updated')
            .then((response) => {
                if (!response.ok) throw new Error('Falha ao carregar os repositórios');
                return response.json();
            })
            .then((repos) => {
                if (!isActive) return;
                if (!Array.isArray(repos)) throw new Error('Resposta inválida da API do GitHub');
                setRepositories(repos);
                setLoadState('ready');
            })
            .catch(() => {
                if (!isActive) return;
                setRepositories(fallbackRepositories);
                setLoadState('fallback');
            });

        return () => {
            isActive = false;
        };
    }, []);

    const updateCarouselPosition = useCallback(() => {
        const carousel = carouselRef.current;
        const firstCard = carousel?.firstElementChild;
        if (!carousel || !firstCard) return;

        const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
        const cardStep = firstCard.getBoundingClientRect().width + gap;
        const lastCardIndex = carousel.children.length - 1;
        setActiveIndex(Math.min(lastCardIndex, Math.round(carousel.scrollLeft / cardStep)));
        setIsAtEnd(carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2);
    }, []);

    useEffect(() => {
        updateCarouselPosition();
        window.addEventListener('resize', updateCarouselPosition);
        return () => window.removeEventListener('resize', updateCarouselPosition);
    }, [repositories, updateCarouselPosition]);

    const moveCarousel = (direction) => {
        const carousel = carouselRef.current;
        const firstCard = carousel?.firstElementChild;
        if (!carousel || !firstCard) return;

        const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0;
        carousel.scrollBy({
            left: (firstCard.getBoundingClientRect().width + gap) * direction,
            behavior: 'smooth'
        });
    };

    return (
        <section id="projects" className="space-y-8 scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest uppercase">
                    Portfólio Prático
                </div>
                    <h2 className="text-4xl font-bold text-white">Repositórios GitHub</h2>
                </div>
                {(loadState === 'ready' || loadState === 'fallback') && (
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                        <span aria-live="polite">{Math.min(activeIndex + 1, repositories.length)} / {repositories.length}</span>
                        <button
                            type="button"
                            onClick={() => moveCarousel(-1)}
                            disabled={activeIndex === 0}
                            aria-label="Repositório anterior"
                            className="p-2 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={18} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => moveCarousel(1)}
                            disabled={isAtEnd}
                            aria-label="Próximo repositório"
                            className="p-2 rounded-lg border border-slate-700 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                )}
            </div>

            {loadState === 'loading' && (
                <p className="text-sm text-slate-400" role="status">Carregando repositórios...</p>
            )}

            {loadState === 'fallback' && (
                <p className="text-sm text-slate-400" role="status">
                    Não foi possível atualizar os repositórios agora. Estes são alguns projetos em destaque.
                </p>
            )}

            {(loadState === 'ready' || loadState === 'fallback') && (
                <div
                    ref={carouselRef}
                    onScroll={updateCarouselPosition}
                    className="projects-carousel-scrollbar grid grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%_-_1.5rem)/2)] lg:auto-cols-[calc((100%_-_3rem)/3)] gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth touch-pan-x pb-3"
                    aria-label="Todos os repositórios públicos do GitHub"
                >
                {repositories.map((repo) => (
                    <div 
                        key={repo.id}
                        className="group snap-start bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                        <div>
                            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                                <span>{repo.fork ? 'Fork' : 'Repositório'}</span>
                                {repo.language && <span className="text-slate-500">{repo.language}</span>}
                            </div>
                            <h3 className="text-lg font-bold text-white mt-2 break-words group-hover:text-cyan-400 transition-colors duration-300">{repo.name}</h3>
                            <p className="text-slate-400 text-sm mt-3 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                {repo.description || 'Sem descrição cadastrada no GitHub.'}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-medium px-2.5 py-1 rounded-full">
                                    {repo.stargazers_count} {repo.stargazers_count === 1 ? 'estrela' : 'estrelas'}
                                </span>
                                <span className="bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-medium px-2.5 py-1 rounded-full">
                                    {repo.forks_count} {repo.forks_count === 1 ? 'fork' : 'forks'}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800/80 text-xs font-semibold">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                            >
                                <img src={githubIcon} alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert" /> Abrir repositório
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </section>
    );
}