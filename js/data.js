// js/data.js

export const assetPaths = {
    avatar: {
        light: './assets/avatar-light.jpg',
        dark: './assets/avatar.jpg'
    }
};

export const socialLinks = [
    { name: 'github', url: 'https://github.com/AndreBauzil', icon: 'github' },
    { name: 'linkedin', url: 'https://linkedin.com/in/andre-bauzil', icon: 'linkedin' },
    { name: 'instagram', url: 'https://instagram.com/andre_bauzil', icon: 'instagram' },
    { name: 'whatsapp', url: 'https://wa.me/55984535174', icon: 'message-circle' }
];

export const mainLinks = [
    { text: 'Ver meu Currículo', url: './assets/Currículo - Andre Bauzil.pdf', icon: 'file-text', download: true },
    { text: 'Ir para o Portfólio no GitHub', url: 'https://github.com/AndreBauzil?tab=repositories', icon: 'briefcase' }
];

export const projects = [
    {
        title: "SpiderVerse",
        imageUrl: "./assets/spiderverse-thumbnail.png",
        link: "https://github.com/AndreBauzil/SpiderVerse-React",
        technologies: ["TypeScript", "SCSS", "NextJS", "React"],
    },
    {
        title: "Página Institucional",
        imageUrl: "./assets/institutional-page-thumbnail.png",
        link: "https://github.com/AndreBauzil/Institutional-Page",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Pokedex",
        imageUrl: "https://placehold.co/600x400/F4D02B/000000?text=Pokedex",
        link: "https://github.com/AndreBauzil/Pokedex",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
        title: "ADS Graduation",
        imageUrl: "./assets/ADSGraduation-thumbnail.png",
        link: "https://github.com/AndreBauzil/ADSGraduation",
        technologies: ["Java", "DHTML", "Kotlin"],
    },
    {
        title: "Search GitHub Repo",
        imageUrl: "https://placehold.co/600x400/171717/FFFFFF?text=GitHub+Repo",
        link: "https://github.com/AndreBauzil/Repo-GitHub-Search-App",
        technologies: ["Kotlin", "Android"],
    },
    {
        title: "Landing Page Responsiva",
        imageUrl: "https://placehold.co/600x400/F42B5F/FFFFFF?text=Landing+Page",
        link: "https://github.com/AndreBauzil/Landing-Page-Responsive",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
];