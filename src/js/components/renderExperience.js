/* src/js/components/renderExperience.js */
import { portfolioData } from '../data/portfolioData.js';
import { t, localize } from '../i18n/i18n.js';

const briefcaseIcon = `
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5h6v2H9V5z"></path>
  </svg>
`;

const capIcon = `
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.42A12.083 12.083 0 0121 17.5V19M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"></path>
  </svg>
`;

export function renderExperience() {
  const timelineContainer = document.getElementById('experience-timeline');
  if (!timelineContainer) return;

  const { experience, education } = portfolioData;

  const experienceItems = experience.map(item => `
    <div class="relative pl-10 border-l-2 border-slate-200 dark:border-slate-700">
      <div class="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-cyan-500 text-white flex items-center justify-center border-4 border-white dark:border-slate-900">
        ${briefcaseIcon}
      </div>
      <span class="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">${item.period}</span>
      <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">${localize(item.role)}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">${item.company}</p>
      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2">${localize(item.description)}</p>
    </div>
  `).join('');

  const educationItems = education.map(item => `
    <div class="relative pl-10 border-l-2 border-slate-200 dark:border-slate-700">
      <div class="absolute -left-[15px] top-0 w-7 h-7 rounded-full bg-slate-500 dark:bg-slate-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900">
        ${capIcon}
      </div>
      <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">${item.period}</span>
      <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">${localize(item.degree)}</h3>
      <p class="text-sm text-slate-600 dark:text-slate-400 font-medium">${item.school}</p>
    </div>
  `).join('');

  timelineContainer.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 class="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8">${t('experience.workTitle')}</h3>
        <div class="space-y-10">${experienceItems}</div>
      </div>
      <div>
        <h3 class="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-8">${t('experience.eduTitle')}</h3>
        <div class="space-y-10">${educationItems}</div>
      </div>
    </div>
  `;
}