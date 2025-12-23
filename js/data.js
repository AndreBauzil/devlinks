// js/data.js

export const assetPaths = {
    avatar: {
        light: './assets/profile/avatar-light.webp',
        dark: './assets/profile/avatar.webp'
    }
};

export const socialLinks = [
    { name: 'github', url: 'https://github.com/AndreBauzil', icon: 'github' },
    { name: 'linkedin', url: 'https://linkedin.com/in/andre-bauzil', icon: 'linkedin' },
    { name: 'instagram', url: 'https://instagram.com/andre_bauzil', icon: 'instagram' },
    { name: 'whatsapp', url: 'https://wa.me/55984535174', icon: 'message-circle' }
];

export const mainLinks = [
    { text: 'Ver meu Currículo', url: './assets/Currículo - Andre Bauzil - V4.3.pdf', icon: 'file-text', download: true },
    { text: 'Ir para o Portfólio no GitHub', url: 'https://github.com/AndreBauzil?tab=repositories', icon: 'briefcase' }
];

export const projects = [
    // --- DESTAQUE ---
    {
        title: "FinTrack (SaaS Financeiro)",
        imageUrl: "./assets/projects/fintrack-thumbnail.webp", // Lembre de criar essa imagem!
        description: "Plataforma completa de gestão financeira com suporte a múltiplas carteiras (multi-tenancy), gráficos interativos, modo privacidade e autenticação segura. Inclui Landing Page institucional e Dashboard protegido.",
        technologies: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn UI", "Recharts"],
        liveUrl: "https://fintrack-lake.vercel.app",
        repoUrl: "https://github.com/AndreBauzil/fintrack",
    }, 
    {
        title: "Barbearia do Dev (Micro-SaaS)",
        imageUrl: "./assets/projects/barbearia-thumbnail.webp", 
        description: "Sistema de agendamento full-stack para barbearias, com dashboard administrativo, analytics de faturamento e gestão de horários. Construído com uma API RESTful em Node.js e frontend em React.",
        technologies: ["React", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
        liveUrl: "https://micro-saas-barbearia.vercel.app/",
        repoUrl: "https://github.com/AndreBauzil/microSAAS-barbearia",
    },
    {
        title: "Travel Dashboard",
        imageUrl: "./assets/projects/travel-panel-thumbnail.webp",
        description: "Assistente de viagem inteligente com arquitetura BFF em Rails, consumindo 4 APIs (Clima, Wikipedia, IA Gemini, Locais) e exibindo em um painel React/Mantine.",
        technologies: ["React", "TypeScript", "Mantine", "Ruby on Rails", "API", "RubyLLM"],
        liveUrl: "https://travel-panel-frontend.onrender.com",
        repoUrl: "https://github.com/AndreBauzil/travel-panel",
    },
    // --- OUTROS ---
    {
        title: "Job Scraper & Analytics",
        imageUrl: "./assets/projects/jobscraper-thumbnail.webp",
        description: "Sistema de automação que coleta vagas de emprego do LinkedIn usando Playwright, serve os dados via uma API em Python (FastAPI) e exibe em um dashboard interativo com filtros e gráficos.",
        technologies: ["Python", "FastAPI", "Playwright", "React", "TypeScript", "SQLModel", "Recharts"],
        liveUrl: "https://python-job-scraper-five.vercel.app",
        repoUrl: "https://github.com/AndreBauzil/python-job-scraper", 
    },
    {
        title: "SpiderVerse",
        imageUrl: "./assets/projects/spiderverse-thumbnail.webp",
        description: "Uma landing page imersiva e estilizada com o tema do filme 'Homem-Aranha no Aranhaverso', focada em animações e design responsivo com Next.js.",
        technologies: ["Next.js", "React", "TypeScript", "SCSS"],
        liveUrl: "https://spiderverse-react.vercel.app",
        repoUrl: "https://github.com/AndreBauzil/SpiderVerse-React",
    },
    {
        title: "TCC - Domestic Services",
        imageUrl: "./assets/projects/domestik-thumbnail.webp",
        description: "Aplicação mobile (Android/iOS) para conectar prestadores de serviços domésticos e clientes. Desenvolvido como Trabalho de Conclusão de Curso.",
        technologies: ["React-Native", "NodeJS", "TypeScript"],
        repoUrl: "https://github.com/AndreBauzil/TCC",
    },
    {
        title: "Habits",
        imageUrl: "./assets/projects/habits-thumbnail.webp",
        description: "App de monitoramento de hábitos inspirado na NLW da Rocketseat, com versões web e mobile, focado na construção de uma API robusta e interfaces reativas.",
        technologies: ["React", "React-Native", "NodeJS", "TypeScript"],
        repoUrl: "https://github.com/AndreBauzil/Habits",
    },
    {
        title: "Página Institucional",
        imageUrl: "./assets/projects/institutional-page-thumbnail.webp",
        description: "Landing page de uma empresa fictícia, focada em layout responsivo e moderno com HTML, CSS e JavaScript puros.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/AndreBauzil/institutional-page",
    },
    {
        title: "Pokedex",
        imageUrl: "https://placehold.co/600x400/F4D02B/000000?text=Pokedex",
        description: "Uma Pokedex clássica que consome a PokeAPI para buscar e exibir informações sobre os Pokémon. Projeto para praticar consumo de APIs no frontend.",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        repoUrl: "https://github.com/AndreBauzil/bootcamp-santander/tree/main/pokedex",
    },
    {
        title: "Search GitHub Repo",
        imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=GitHub+Repo",
        description: "Aplicação Android nativa em Kotlin que utiliza a API do GitHub para buscar e listar repositórios de usuários.",
        technologies: ["Kotlin", "Android"],
        repoUrl: "https://github.com/AndreBauzil/Repo-GitHub-Search-App",
    },
    {
        title: "ADS Graduation",
        imageUrl: "./assets/projects/ADSGraduation-thumbnail.webp",
        description: "Repositório com projetos e conceitos sobre a graduação em Análise e Desenvolvimento de Sistemas, demonstrando a integração de múltiplas tecnologias.",
        technologies: ["Java", "DHTML", "Kotlin"],
        repoUrl: "https://github.com/AndreBauzil/ADSGraduation",
    },
    {
        title: "Landing Page Responsiva",
        imageUrl: "https://placehold.co/600x400/F42B5F/FFFFFF?text=Landing+Page",
        description: "Estudo prático de design responsivo 'mobile-first', criando uma landing page adaptável para diferentes telas, utilizando apenas tecnologias web fundamentais.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoUrl: "https://github.com/AndreBauzil/responsive-landing-page",
    },
];