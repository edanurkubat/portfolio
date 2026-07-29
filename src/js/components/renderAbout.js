/* src/js/components/renderAbout.js */
import { portfolioData } from '../data/portfolioData.js';
import { localize } from '../i18n/i18n.js';

export function renderAbout() {
  const aboutContainer = document.getElementById('about-content');
  if (!aboutContainer) return;

  const { about, title } = portfolioData.personalInfo;

  aboutContainer.innerHTML = `
    <p>${localize(about)}</p>
    <p class="mt-4">
      <span class="text-cyan-600 dark:text-cyan-400 font-semibold">${localize(title)}</span>
    </p>
  `;
}