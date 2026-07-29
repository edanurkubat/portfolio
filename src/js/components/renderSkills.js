/* src/js/components/renderSkills.js */
import { portfolioData } from '../data/portfolioData.js';

export function renderSkills() {
  const skillsContainer = document.getElementById('skills-grid');
  if (!skillsContainer) return;

  skillsContainer.innerHTML = portfolioData.skills.map(skillGroup => `
    <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/40 transition-all group">
      <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-cyan-400 transition-colors">
        ${skillGroup.category}
      </h3>
      <div class="flex flex-wrap gap-2">
        ${skillGroup.items.map(item => `
          <span class="px-3 py-1 text-xs font-medium rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            ${item}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}