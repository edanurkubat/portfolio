/* src/js/main.js */
import { renderHero } from './components/renderHero.js';
import { renderAbout } from './components/renderAbout.js';
import { renderSkills } from './components/renderSkills.js';
import { renderProjects } from './components/renderProjects.js';
import { renderExperience } from './components/renderExperience.js';
import { renderContact } from './components/renderContact.js';
import { initNavigation } from './utils/navigation.js';
import { initLangToggle } from './utils/langToggle.js';
import { initThemeToggle } from './utils/themeToggle.js';
import { applyStaticTranslations, onLangChange, getLang } from './i18n/i18n.js';
import { EMAIL_CONFIG } from './config/emailConfig.js';
import { renderStats } from './components/renderStats.js';
import { renderCertificates } from './components/renderCertificates.js';
import { initScrollReveal, initActiveNavHighlight, initScrollProgress, initScrollToTop } from './utils/scrollEffects.js';

function renderDynamicContent() {
  renderHero();
  renderAbout();
  renderStats();
  renderSkills();
  renderProjects();
  renderExperience();
  renderCertificates();
  renderContact();
}

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(EMAIL_CONFIG.publicKey);

  document.documentElement.lang = getLang();
  applyStaticTranslations();
  renderDynamicContent();

  initNavigation();
  initScrollReveal();
  initActiveNavHighlight();
  initScrollProgress();
  initScrollToTop();
  initLangToggle();
  initThemeToggle();

  onLangChange(() => {
    applyStaticTranslations();
    renderDynamicContent();
    initScrollReveal();
  });
});