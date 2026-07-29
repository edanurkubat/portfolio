/* src/js/components/renderStats.js */
import { portfolioData } from '../data/portfolioData.js';
import { t } from '../i18n/i18n.js';

export function renderStats() {
  const statsContainer = document.getElementById('about-stats');
  if (!statsContainer) return;

  const projectsCount = portfolioData.projects.length;

  const techSet = new Set();
  portfolioData.skills.forEach(group => {
    group.items.forEach(item => techSet.add(item));
  });
  const technologiesCount = techSet.size;

  const experienceMonths = portfolioData.personalInfo.experienceMonths ?? 0;

  const stats = [
    { value: projectsCount, label: t('stats.projects') },
    { value: technologiesCount, label: t('stats.technologies') },
    { value: experienceMonths, label: t('stats.months') },
  ];

  statsContainer.innerHTML = stats.map(stat => `
    <div class="text-center sm:text-left">
      <div class="counter-value text-3xl sm:text-4xl font-extrabold text-cyan-500 dark:text-cyan-400" data-target="${stat.value}">0</div>
      <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">${stat.label}</div>
    </div>
  `).join('');

  observeAndAnimateCounters();
}

function observeAndAnimateCounters() {
  const counters = document.querySelectorAll('#about-stats .counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10) || 0;
  const duration = 1200;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out
    el.textContent = Math.round(eased * target);

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(tick);
}