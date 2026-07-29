/* src/js/components/renderProjects.js */
import { portfolioData } from '../data/portfolioData.js';
import { t, localize } from '../i18n/i18n.js';
import { initScrollReveal } from '../utils/scrollEffects.js';

let activeFilter = 'all';

export function renderProjects() {
  renderFilterBar();
  renderProjectCards();
}

function getAllTags() {
  const tagSet = new Set();
  portfolioData.projects.forEach(project => {
    project.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function filterButtonClass(isActive) {
  return `px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${isActive
    ? 'bg-cyan-500 border-cyan-500 text-slate-950'
    : 'bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-500'
    }`;
}

function renderFilterBar() {
  const filterContainer = document.getElementById('projects-filter');
  if (!filterContainer) return;

  const tags = getAllTags();

  filterContainer.innerHTML = `
    <button type="button" data-filter="all" class="${filterButtonClass(activeFilter === 'all')}">
      ${t('projects.filterAll')}
    </button>
    ${tags.map(tag => `
      <button type="button" data-filter="${tag}" class="${filterButtonClass(activeFilter === tag)}">
        ${tag}
      </button>
    `).join('')}
  `;

  filterContainer.querySelectorAll('button[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-filter');
      renderFilterBar();
      renderProjectCards();
    });
  });
}

function renderProjectCards() {
  const projectsContainer = document.getElementById('projects-grid');
  if (!projectsContainer) return;

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.tags.includes(activeFilter));

  projectsContainer.innerHTML = filteredProjects.map((project, index) => `
    <article data-project-index="${index}" class="cursor-pointer flex flex-col overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
      <div class="relative h-48 sm:h-56 overflow-hidden bg-slate-200 dark:bg-slate-900">
       <img
          src="${project.image}"
          alt="${localize(project.title)}"
          width="800"
          height="450"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-slate-950/10 dark:bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
      </div>

      <div class="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
            ${localize(project.title)}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            ${localize(project.description)}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-2">
          ${project.tags.map(tag => `
            <span class="px-2.5 py-0.5 text-xs font-semibold rounded bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/40">
              ${tag}
            </span>
          `).join('')}
        </div>

        <div class="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500">
            <span>GitHub</span>
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');

  projectsContainer.querySelectorAll('article[data-project-index]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const index = Number(card.getAttribute('data-project-index'));
      window.location.href = `project.html?id=${filteredProjects[index].id}`;
    });
  });
  initScrollReveal('#projects-grid > article');
}