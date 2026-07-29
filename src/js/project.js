/* src/js/project.js */
import { portfolioData } from './data/portfolioData.js';
import { t, localize, applyStaticTranslations, getLang, onLangChange } from './i18n/i18n.js';
import { initLangToggle } from './utils/langToggle.js';
import { initThemeToggle } from './utils/themeToggle.js';

function getProjectIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get('id'));
}

function renderProjectDetail() {
  const id = getProjectIdFromUrl();
  const project = portfolioData.projects.find(p => p.id === id);
  const container = document.getElementById('project-detail');
  if (!container) return;

  if (!project) {
    container.innerHTML = `<p class="text-center text-slate-500 dark:text-slate-400 py-20">${getLang() === 'tr' ? 'Proje bulunamadı.' : 'Project not found.'}</p>`;
    return;
  }

  const gallery = project.gallery && project.gallery.length ? project.gallery : [];

  container.innerHTML = `
    <div class="max-w-3xl mx-auto">
      <a href="index.html#projects" class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 mb-6">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        ${t('projectDetail.back')}
      </a>

      <!-- Kapak Görseli -->
      <div class="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8">
        <img src="${project.image}" alt="${localize(project.title)}" class="w-full h-64 sm:h-80 object-cover" />
      </div>

      <!-- Başlık + Etiketler -->
      <div class="mb-6">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">${localize(project.title)}</h1>
        <div class="flex flex-wrap gap-3">
          ${project.tags.map(tag => `
            <span class="px-4 py-2 text-sm font-semibold rounded-lg bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/40">${tag}</span>
          `).join('')}
        </div>
      </div>

      <!-- GitHub Butonu -->
      <a href="${project.githubUrl}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-slate-900 dark:border-cyan-400 text-slate-900 dark:text-cyan-400 font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all mb-10">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span>${t('projectDetail.viewGithub')}</span>
      </a>

      <!-- Açıklama -->
      <div class="prose prose-slate dark:prose-invert max-w-none mb-14">
        <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-base">${localize(project.longDescription || project.description)}</p>
      </div>

      ${gallery.length ? `
        <!-- Ekran Görüntüleri -->
        <div>
          <h2 class="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
            ${t('projectDetail.screenshots')}
          </h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${gallery.map(src => `
              <div class="rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <img src="${src}" alt="${localize(project.title)}" class="w-full h-56 object-cover" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  document.documentElement.lang = getLang();
  applyStaticTranslations();
  renderProjectDetail();
  initLangToggle();
  initThemeToggle();

  onLangChange(() => {
    document.documentElement.lang = getLang();
    applyStaticTranslations();
    renderProjectDetail();
  });
});