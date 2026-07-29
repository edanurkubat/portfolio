/* src/js/utils/langToggle.js */
import { getLang, setLang } from '../i18n/i18n.js';

export function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  const label = document.getElementById('lang-toggle-label');
  if (!btn || !label) return;

  const updateLabel = () => {
    label.textContent = getLang() === 'tr' ? 'EN' : 'TR';
  };

  updateLabel();

  btn.addEventListener('click', () => {
    setLang(getLang() === 'tr' ? 'en' : 'tr');
    updateLabel();
  });
}