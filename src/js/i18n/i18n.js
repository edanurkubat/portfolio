/* src/js/i18n/i18n.js */
import { translations } from './translations.js';

const STORAGE_KEY = 'preferredLang';
let currentLang = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'tr';
let onChangeCallback = null;

export function getLang() {
  return currentLang;
}

// Sabit arayüz metinleri için: t('nav.about') -> "Hakkımda" / "About"
export function t(path) {
  const keys = path.split('.');
  let result = translations[currentLang];
  for (const key of keys) {
    result = result?.[key];
  }
  return result ?? path;
}

// portfolioData.js içindeki { tr: '...', en: '...' } şeklindeki alanları çözer
export function localize(field) {
  if (field && typeof field === 'object' && ('tr' in field || 'en' in field)) {
    return field[currentLang] ?? field.tr ?? field.en ?? '';
  }
  return field;
}

export function setLang(lang) {
  if (lang !== 'tr' && lang !== 'en') return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  if (onChangeCallback) onChangeCallback();
}

export function onLangChange(callback) {
  onChangeCallback = callback;
}

// HTML'de doğrudan yazılmış (data-i18n="nav.about" gibi) statik metinleri günceller
export function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}