export const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'story', label: 'Sobre Mim' },
    { id: 'education', label: 'Estudos' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'volunteering', label: 'Atuação' },
    { id: 'contact', label: 'Contato' }
];

export const skillCategories = {
    web: [
        { name: "HTML5 & CSS3 / SCSS", level: "Avançado", desc: "Semântica, responsividade mobile-first e estilização moderna" },
        { name: "JavaScript (ES6+)", level: "Intermediário", desc: "DOM, requisições assíncronas e lógica de programação" },
        { name: "React.js", level: "Em Evolução", desc: "Criação de SPAs, componentes modulares e estados" },
        { name: "Tailwind CSS & Bootstrap", level: "Intermediário", desc: "Estilização ágil e interfaces focadas em UI/UX" }
    ],
    backend: [
        { name: "Python", level: "Básico / Intermediário", desc: "Automação, lógica e fundamentos de Data Science" },
        { name: "Java", level: "Básico", desc: "Programação Orientada a Objetos e estruturas de dados" },
        { name: "SQL & Banco de Dados", level: "Básico", desc: "Consultas, modelagem e manipulação de dados" },
        { name: "Git & GitHub", level: "Intermediário", desc: "Versionamento de código e trabalho em equipe" }
    ],
    renewable: [
        { name: "Sistemas Fotovoltaicos", level: "Formação Completa", desc: "Dimensionamento, montagem e manutenção fotovoltaica" },
        { name: "Energias Renováveis (WorldSkills #62)", level: "Competidor SP", desc: "Exames práticos avançados sob padrões internacionais" },
        { name: "AWS & Microsoft Azure (AZ-900)", level: "Certificado SENAI", desc: "Serviços essenciais e conceitos de computação em nuvem" },
        { name: "Cyber Ops Associate", level: "Certificado SENAI", desc: "Fundamentos de redes e segurança da informação" }
    ],
    soft: [
        { name: "Didática & Ensino", level: "Atuação Prática", desc: "Experiência em lecionar para turmas de 8 a 9 anos" },
        { name: "Trabalho em Equipe & Música", level: "Membro Ativo", desc: "Sincronia, escuta ativa e apresentações em grupo" },
        { name: "Comunicação & Oratória", level: "Diferencial", desc: "Facilidade de articulação e apresentação de projetos" }
    ]
};

export const projectsData = [
    {
        title: "Portfólio Profissional em React",
        type: "Projeto Pessoal / SPA",
        description: "Aplicação Web moderna com React e Tailwind CSS, incluindo navegação estilo pílula flutuante, central de certificados e vitrine de habilidades.",
        techs: ["React", "Tailwind CSS", "Vite", "JavaScript"],
        github: "https://github.com/BielVereda/Professional_Portfolio"
    },
    {
        title: "Aplicações e Projetos de Aula (SENAI)",
        type: "Projeto Acadêmico",
        description: "Sistemas web e exercícios práticos desenvolvidos durante as aulas do Técnico em Desenvolvimento de Sistemas no SENAI Suíço-Brasileira.",
        techs: ["HTML/CSS", "JavaScript", "Python", "SQL"],
        github: "https://github.com/BielVereda"
    },
    {
        title: "Manutenção & Layouts Web Freelance",
        type: "Experiência Prática / Clientes",
        description: "Ajustes de layout, usabilidade, responsividade e correção de bugs em páginas institucionais para clientes particulares.",
        techs: ["HTML5", "CSS3", "JavaScript", "Git"],
        github: "https://github.com/BielVereda"
    }
];

export const certificatesData = [
    { name: "WorldSkills São Paulo – Modalidade #62 (Energias Renováveis)", issuer: "SENAI SP", category: "Destaque" },
    { name: "Carreira Profissional de Eletricista Fotovoltaico (FIC)", issuer: "SENAI Suíço-Brasileira", category: "Energias" },
    { name: "Implantação de Serviços em Nuvem - Microsoft AZ-900", issuer: "SENAI Suíço-Brasileira", category: "Cloud" },
    { name: "Implantação de Serviços em Nuvem - AWS", issuer: "SENAI Suíço-Brasileira", category: "Cloud" },
    { name: "Cyber Ops Associate", issuer: "SENAI Suíço-Brasileira", category: "Segurança" },
    { name: "Programação Oracle - Java Fundamentals", issuer: "SENAI Ary Torres", category: "Linguagens" },
    { name: "Programação em Python para Data Science", issuer: "SENAI Ary Torres", category: "Linguagens" },
    { name: "IA - Inteligência Artificial & Palestra IARA Google", issuer: "Capacita+ / SENAI", category: "IA" },
    { name: "Competência Transversal em Lógica de Programação", issuer: "SENAI São Paulo", category: "Fundamentos" },
    { name: "Formação HTML5, CSS3 Responsivo & JavaScript", issuer: "Alura", category: "Web" },
    { name: "Vocações / Mesa de Profissões", issuer: "Porto / Vocação", category: "Soft Skills" }
];