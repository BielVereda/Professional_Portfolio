# Portfólio Pessoal — Gabriel Vereda

## Sobre o Projeto

Este é o repositório do meu portfólio web interativo, desenvolvido com o objetivo de centralizar e apresentar minha trajetória acadêmica, projetos práticos, competências técnicas e certificados nas áreas de **Desenvolvimento de Software** e **Energias Renováveis**.

A plataforma conta com uma interface moderna em *Dark Mode*, efeitos visuais em néon/cyan, busca em tempo real no próprio DOM, consumo dinâmico dos repositórios via API do GitHub e navegação otimizada para dispositivos móveis e desktop.

## Funcionalidades Principais

* **Busca Inteligente em Tempo Real:** Sistema de pesquisa integrado no `Header` que busca títulos, termos e habilidades dinamicamente, levando o usuário direto para o elemento na tela.

* **Integração Dinâmica com GitHub:** Consumo automatizado dos repositórios públicos usando a API REST do GitHub com suporte a carrossel/navegação lateral.

* **Linha do Tempo & Formação:** Exibição clara das graduações (UNIVESP e SENAI Suíço-Brasileira) e premiações relevantes (WorldSkills São Paulo #62 e OLISP).

* **Filtro de Habilidades por Categoria:** Alternância simples entre *Front-End*, *Back-End & Cloud*, *Energias Renováveis & Fotovoltaica*, *CyberSecurity* e *Soft Skills*.

* **Downloads de Currículos Segmentados:** Separação focada entre os currículos de **Desenvolvimento** e **Fotovoltaica/Energia**.

* **Design 100% Responsivo:** Layout adaptável com menu em formato *drawer* para navegação fluida em telas pequenas.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes ferramentas e tecnologias:

* **Core:** [React.js](https://react.dev/)

* **Build Tool:** [Vite](https://vitejs.dev/)

* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)

* **Ícones:** [Lucide React](https://lucide.dev/)

* **Hospedagem:** [Vercel](https://vercel.com/)

* **API Externa:** [GitHub REST API](https://docs.github.com/en/rest)

## Como Rodar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (versão 18 ou superior)

* [Git](https://git-scm.com/)

### Passo a Passo

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/BielVereda/portifolio-gabriel-vereda.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd portifolio-gabriel-vereda
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:5173` para visualizar o projeto.

## Estrutura do Código

```text
src/
 ├── assets/          # Imagens, ícones e logos do projeto
 ├── components/      # Componentes React (Header, Hero, Skills, Projects, etc.)
 ├── data/            # Dados estáticos (informações do portfólio e contatos)
 ├── App.jsx          # Componente principal da aplicação
 └── main.jsx         # Ponto de entrada do React com o Vite
```

## Conecte-se Comigo! -> BielVereda