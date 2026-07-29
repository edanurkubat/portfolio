/* src/js/utils/theme.js */
const STORAGE_KEY = 'theme';
let onChangeCallback = null;

export function getTheme() {
  return localStorage.getItem(STORAGE_KEY) || 'dark';
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem(STORAGE_KEY, theme);
  if (onChangeCallback) onChangeCallback();
}

export function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  return next;
}

export function onThemeChange(callback) {
  onChangeCallback = callback;
}