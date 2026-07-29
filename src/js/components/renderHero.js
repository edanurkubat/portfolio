/* src/js/components/renderHero.js */
import { portfolioData } from '../data/portfolioData.js';
import { t, localize } from '../i18n/i18n.js';
import { generateAndDownloadCV } from '../utils/generateCV.js';

export function renderHero() {
  const heroContainer = document.getElementById('hero');
  if (!heroContainer) return;

  const { name, title, about, cvUrl, socials } = portfolioData.personalInfo;

  heroContainer.innerHTML = `
    <div class="space-y-6 max-w-2xl">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-400 text-xs font-semibold">
        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        ${t('hero.badge')}
      </div>

      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        ${t('hero.greeting')} <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">${name}</span>
      </h1>

      <p class="text-xl font-medium text-slate-700 dark:text-slate-300">
        ${localize(title)}
      </p>

      <p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
        ${localize(about)}
      </p>

      <div class="flex flex-wrap items-center gap-4 pt-4">
        <a href="#projects" class="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/20">
          ${t('hero.projectsBtn')}
        </a>
        <button id="cv-download-btn" type="button" class="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-500 text-slate-700 dark:text-slate-300 font-medium transition-all bg-slate-100 dark:bg-slate-800/40">
          ${t('hero.cvBtn')}
        </button>
      </div>

      <div class="flex items-center gap-5 pt-4 text-slate-500 dark:text-slate-400">
        <a href="${socials.github}" target="_blank" rel="noopener" class="hover:text-cyan-400 transition-colors" aria-label="GitHub">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="${socials.linkedin}" target="_blank" rel="noopener" class="hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </div>

    <div class="relative shrink-0 mx-auto md:mx-0">
      <div class="absolute -inset-6 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
      <div class="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
        <img
          src="/images/profile.jpg"
          alt="${name}"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-cyan-500 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
        <span class="w-3 h-3 rounded-full bg-white animate-pulse"></span>
      </div>
    </div>
  `;
  document.getElementById('cv-download-btn')?.addEventListener('click', generateAndDownloadCV);

}