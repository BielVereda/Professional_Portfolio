export const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'story', label: 'Sobre Mim' },
    { id: 'education', label: 'Estudos' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' },
    { id: 'volunteering', label: 'Atuação' },
    { id: 'resumes', label: 'Currículos' },
    { id: 'contact', label: 'Contato' }
];

export const skillCategories = {
    web: [
        { name: "HTML5 & CSS3 / SCSS", level: "Avançado", desc: "Semântica, responsividade mobile-first e estilização moderna" },
        { name: "JavaScript (ES6+)", level: "Intermediário", desc: "DOM, requisições assíncronas e lógica de programação" },
        { name: "React.js", level: "Em Evolução", desc: "Criação de SPAs, componentes modulares e estados" },
        { name: "Tailwind CSS & Bootstrap", level: "Intermediário", desc: "Estilização ágil e interfaces focadas em UI/UX" },
        { name: "Angular", level: "Em Evolução", desc: "Desenvolvimento de aplicações web modernas" }
    ],
    backend: [
        { name: "Python", level: "Básico / Intermediário", desc: "Automação, lógica e fundamentos de Data Science" },
        { name: "Java", level: "Básico", desc: "Programação Orientada a Objetos e estruturas de dados" },
        { name: "MySQL & Banco de Dados", level: "Básico", desc: "Consultas, modelagem e manipulação de dados" },
        { name: "Git & GitHub", level: "Intermediário", desc: "Versionamento de código e trabalho em equipe" }
    ],
    renewable: [
        { name: "Sistemas Fotovoltaicos", level: "Formação Completa", desc: "Dimensionamento, montagem e manutenção fotovoltaica" },
        { name: "Energias Renováveis (WorldSkills #62)", level: "Competidor SP", desc: "Exames práticos avançados sob padrões internacionais" }
    ],
    cybersecurity: [
        { name: "AWS & Microsoft Azure (AZ-900)", level: "Certificado SENAI", desc: "Serviços essenciais e conceitos de computação em nuvem com foco em segurança" },
        { name: "Cyber Ops Associate", level: "Certificado SENAI", desc: "Fundamentos de redes e segurança da informação com foco em cibersegurança" }
    ],
    soft: [
        { name: "Didática & Ensino", level: "Atuação Prática", desc: "Experiência em lecionar para turmas de 8 a 9 anos" },
        { name: "Trabalho em Equipe & Música", level: "Membro Ativo", desc: "Sincronia, escuta ativa e apresentações em grupo" },
        { name: "Comunicação & Oratória", level: "Diferencial", desc: "Facilidade de articulação e apresentação de projetos" }
    ]
};

export const certificatesData = [
    { name: "Implantação de Serviços em Nuvem - Microsoft AZ-900", issuer: "SENAI Suíço-Brasileira", category: "Cloud", files: [{ path: "Certificado Implantação de Serviços em Nuvem - Microsoft AZ-900.png" }] },
    { name: "Implantação de Serviços em Nuvem - AWS", issuer: "SENAI Suíço-Brasileira", category: "Cloud", files: [{ path: "Certificado Implantação de Serviços em Nuvem - AWS.png" }] },
    { name: "Capacita+ Google Cloud", issuer: "Capacita+ / Google Cloud", category: "Cloud", files: [{ path: "Certificado Capacita+ Google Cloud.png" }] },
    { name: "Programação Oracle - Java Fundamentals", issuer: "SENAI Ary Torres", category: "Linguagens", files: [{ path: "Certificado Programação Oracle - Java Fundamentals.png" }] },
    { name: "Programação em Python para Data Science", issuer: "SENAI Ary Torres", category: "Linguagens", files: [{ path: "Certificado Programação em Python para Data Science.png" }] },
    { name: "Programação em Python", issuer: "SENAI", category: "Linguagens", files: [{ path: "Certificado PROGRAMAÇÃO EM PYTHON.png" }] },
    { name: "Competência Transversal em Lógica de Programação", issuer: "SENAI São Paulo", category: "Fundamentos", files: [{ path: "Certificado Competência Transversal Lógica de Programacao.png" }] },
    { name: "JavaScript para Web - Crie páginas dinâmicas", issuer: "SENAI", category: "Web", files: [{ path: "Certificado JavaScript para Web - Crie páginas dinâmicas.png" }] },
    { name: "HTML e CSS - Responsividade com Mobile-First", issuer: "SENAI", category: "Web", files: [{ path: "Certificado HTML e CSS - Responsividade com Mobile-First.png" }] },
    { name: "HTML e CSS - Praticando HTML & CSS", issuer: "SENAI", category: "Web", files: [{ path: "Certificado HTML e CSS_Praticando HTML & CSS.png" }] },
    { name: "Cyber Ops Associate", issuer: "SENAI Suíço-Brasileira", category: "Segurança", files: [{ path: "Certificado Cyber Ops Associate.png" }] },
    { name: "Por Dentro da Segurança Cibernética", issuer: "SENAI", category: "Segurança", files: [{ path: "Certificado POR DENTRO DA SEGURANÇA CIBERNÉTICA.png" }] },
    { name: "Fluência - Fundamentos da Inteligência Artificial", issuer: "SENAI", category: "Inteligência Artificial", files: [{ path: "Certificado FLUÊNCIA - FUNDAMENTOS DA INTELIGÊNCIA ARTIFICIAL.png" }] },
    { name: "Ética na Inteligência Artificial", issuer: "SENAI", category: "Inteligência Artificial", files: [{ path: "Certificado Ética na Inteligência Artificial.png" }] },
    { name: "IA - Inteligência Artificial & Palestra IARA Google", issuer: "Capacita+ / SENAI", category: "Inteligência Artificial", files: [{ path: "Certificado Capacita+ Google Cloud.png" }] },
    { name: "Instalador de Sistemas Fotovoltaicos", issuer: "SENAI Suíço-Brasileira", category: "Energias", files: [{ path: "Certificado Implantação de Serviços em Nuvem - AWS (2).png" }] },
    { name: "Introdução ao Arduino", issuer: "SENAI", category: "Tecnologia", files: [{ path: "Certificado Introdução ao Arduino.png" }] },
    { name: "Desenvolvendo a Blockchain", issuer: "SENAI", category: "Tecnologia", files: [{ path: "Certificado Desenvolvendo a Blockchain.png" }] },
    { name: "Desvendando a Indústria 4.0", issuer: "SENAI", category: "Indústria", files: [{ path: "Certificado DESVENDANDO A INDÚSTRIA 4.0.png" }] },
    { name: "Fundamentos da Gestão de Projetos Aplicados na Indústria", issuer: "SENAI", category: "Gestão", files: [{ path: "Certificado FUNDAMENTOS DA GESTÃO DE PROJETOS APLICADOS NA INDÚSTRIA.png" }] },
    { name: "Excel Básico", issuer: "SENAI", category: "Produtividade", files: [{ path: "Certificado EXCEL BÁSICO.png" }] },
    { name: "Design Thinking", issuer: "SENAI", category: "Inovação", files: [{ path: "Certificado DESIGN THINKING.png" }] },
    { name: "Vocações / Mesa das Profissões", issuer: "Porto / Vocação", category: "Carreira", files: [{ path: "Certificado Mesa das Profissões - Porto.png" }] },
    { name: "Empreender SENAI", issuer: "SENAI", category: "Empreendedorismo", files: [{ path: "Certificado EMPREENDER SENAI.png" }] },
    { name: "Gestão do Tempo", issuer: "SENAI", category: "Gestão", files: [{ path: "Certificado GESTÃO DO TEMPO.png" }] },
    { name: "Desenho 2D de Personagens para Jogos Digitais", issuer: "SENAI", category: "Design", files: [{ path: "Certificado Desenho 2D de Personagens para Jogos Digitais.png" }] },
    { name: "Cidadania Digital e Uso Consciente da Internet", issuer: "SENAI", category: "Fundamentos digitais", files: [{ path: "Certificado CIDADANIA DIGITAL E USO CONSCIENTE DA INTERNET.png" }] },
    { name: "Acelerando a Transição para a Economia Circular", issuer: "SENAI", category: "Economia Circular", files: [{ path: "Certificado ACELERANDO A TRANSIÇÃO PARA A ECONOMIA CIRCULAR.png" }] },
    { name: "Ciclos de Retorno para Economia Circular", issuer: "SENAI", category: "Economia Circular", files: [{ path: "Certificado CICLOS DE RETORNO PARA ECONOMIA CIRCULAR.png" }] },
    { name: "Geração de Valor Circular e Modelos de Negócios", issuer: "SENAI", category: "Economia Circular", files: [{ path: "Certificado GERAÇÃO DE VALOR CIRCULAR E MODELOS DE NEGÓCIOS.png" }] },
    { name: "Desvendando a Descarbonização", issuer: "SENAI", category: "Sustentabilidade", files: [{ path: "Certificado DESVENDANDO A DESCARBONIZAÇÃO.png" }] },
    { name: "Desvendando o ESG", issuer: "SENAI", category: "Sustentabilidade", files: [{ path: "Certificado DESVENDANDO O ESG.png" }] },
    { name: "Portal Jovens no Comércio Exterior", issuer: "Vocação / Procomex", category: "Comércio exterior", files: [
        { path: "Certificado Portal Jovens no Comércio Exterior Página 1.png", label: "Visualizar certificado (página 1)" },
        { path: "Certificado Portal Jovens no Comércio Exterior Página 2.png", label: "Visualizar certificado (página 2)" }
    ] },
    { name: "Saberes de Mulheres Negras e Periféricas", issuer: "SENAI", category: "Sociedade", files: [{ path: "Certificado Saberes de mulheres negras e periféricas no fazer coletivo e comunitário.png" }] }
]