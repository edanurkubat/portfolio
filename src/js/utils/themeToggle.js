/* src/js/utils/themeToggle.js */
import { getTheme, toggleTheme } from './theme.js';

export function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const updateState = () => {
    const isDark = getTheme() === 'dark';
    btn.setAttribute('aria-checked', String(isDark));
  };

  updateState();

  btn.addEventListener('click', () => {
    toggleTheme();
    updateState();
  });
}