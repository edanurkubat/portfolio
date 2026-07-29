/* src/js/components/renderCertificates.js */
import { portfolioData } from '../data/portfolioData.js';
import { localize } from '../i18n/i18n.js';
import { initScrollReveal } from '../utils/scrollEffects.js';

export function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  if (!container) return;

  const certificates = portfolioData.certificates || [];

  container.innerHTML = certificates.map(cert => `
    <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 flex flex-col gap-3">
      <div class="flex items-start gap-3">
        <div class="w-11 h-11 shrink-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
          <svg class="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15a6 6 0 100-12 6 6 0 000 12z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.5 14l-1.5 6 5-2.5 5 2.5-1.5-6"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
            ${localize(cert.title)}
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
            ${cert.institution} · ${cert.date}
          </p>
        </div>
      </div>

      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
        ${localize(cert.description)}
      </p>

      ${cert.verifyUrls && cert.verifyUrls.length ? `
        <div class="flex flex-wrap gap-3 mt-auto pt-2">
          ${cert.verifyUrls.map(item => `
            <a href="${item.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500">
              <span>${item.label}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');

  initScrollReveal('#certificates-grid > div');
}