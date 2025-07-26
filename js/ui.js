import { socialLinks, mainLinks, projects, assetPaths } from './data.js';

const elements = {
    socialLinks: document.getElementById('social-links-container'),
    mainLinks: document.getElementById('main-links-container'),
    projectList: document.getElementById('project-list'),
    profileAvatar: document.getElementById('profile-avatar'),
    themeToggle: document.getElementById('theme-toggle'),
    darkIcon: document.getElementById('theme-toggle-dark-icon'),
    lightIcon: document.getElementById('theme-toggle-light-icon'),
    body: document.body,
    root: document.documentElement,
};

/**
 * Função genérica para renderizar um componente.
 * @param {HTMLElement} container - 
 * @param {Array} items - 
 * @param {Function} toHTML - 
 */
const renderComponent = (container, items, toHTML) => {
    if (!container) return;
    container.innerHTML = items.map(toHTML).join('');
};

// --- Funções de Renderização Específicas ---

const renderSocialLinks = () => {
    renderComponent(elements.socialLinks, socialLinks, link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors">
            <i data-lucide="${link.icon}" class="w-7 h-7"></i>
        </a>
    `);
};

const renderMainLinks = () => {
    renderComponent(elements.mainLinks, mainLinks, link => `
        <a href="${link.url}" 
           class="flex items-center justify-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg font-bold hover:bg-gray-200/70 dark:hover:bg-gray-700/70 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
           ${link.download ? 'download' : 'target="_blank" rel="noopener noreferrer"'}
        >
            <i data-lucide="${link.icon}" class="w-5 h-5"></i>
            <span>${link.text}</span>
        </a>
    `);
};

const renderProjects = () => {
    renderComponent(elements.projectList, projects, project => {
        const techTags = project.technologies
            .map(tech => `<span class="inline-block bg-violet-100 text-violet-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-violet-900/70 dark:text-violet-300">${tech}</span>`)
            .join(' ');
        
        return `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card block bg-white/80 dark:bg-gray-800/80 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 group backdrop-blur-sm">
                <div class="overflow-hidden">
                     <img src="${project.imageUrl}" alt="Thumbnail do projeto ${project.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null;this.src='https://placehold.co/600x400/333/FFF?text=Imagem+Indisponível';">
                </div>
                <div class="p-5">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">${project.title}</h3>
                    <div class="flex flex-wrap gap-2 mt-4">
                        ${techTags}
                    </div>
                </div>
            </a>
        `;
    });
};

// --- Lógica de Tema ---

const applyTheme = () => {
    const isDark = localStorage.getItem('color-theme') === 'dark' || 
                   (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    elements.root.classList.toggle('dark', isDark);
    elements.body.classList.toggle('bg-dark-theme', isDark);
    elements.body.classList.toggle('bg-light-theme', !isDark);
    elements.darkIcon.classList.toggle('hidden', !isDark);
    elements.lightIcon.classList.toggle('hidden', isDark);
    
    if (elements.profileAvatar) {
        elements.profileAvatar.src = isDark ? assetPaths.avatar.dark : assetPaths.avatar.light;
    }
};

const setupThemeToggle = () => {
    if (!elements.themeToggle) return;
    
    applyTheme();

    elements.themeToggle.addEventListener('click', () => {
        const isCurrentlyDark = elements.root.classList.contains('dark');
        localStorage.setItem('color-theme', !isCurrentlyDark ? 'dark' : 'light');
        applyTheme();
    });
};


export function initializeUI() {
    setupThemeToggle();
    renderSocialLinks();
    renderMainLinks();
    renderProjects();
    
    lucide.createIcons();
}