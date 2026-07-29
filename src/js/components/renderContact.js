/* src/js/components/renderContact.js */
import { portfolioData } from '../data/portfolioData.js';
import { t } from '../i18n/i18n.js';
import { EMAIL_CONFIG } from '../config/emailConfig.js';

export function renderContact() {
  const contactContainer = document.getElementById('contact');
  if (!contactContainer) return;

  const { email, location } = portfolioData.personalInfo;

  contactContainer.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="space-y-6">
        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
          ${t('contact.intro')}
        </p>

        <div class="space-y-4 pt-4">
          <div class="flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <div class="text-xs text-slate-500 font-medium">${t('contact.emailLabel')}</div>
              <a href="mailto:${email}" class="hover:text-cyan-400 transition-colors font-medium">${email}</a>
            </div>
          </div>

          <div class="flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <div class="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            </div>
            <div>
              <div class="text-xs text-slate-500 font-medium">${t('contact.locationLabel')}</div>
              <div class="font-medium">${location}</div>
            </div>
          </div>
        </div>
      </div>

      <form id="contact-form" class="space-y-4 bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/60" novalidate>
        <div id="form-alert" class="hidden p-4 rounded-lg text-sm font-medium"></div>
        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off" style="position: absolute; left: -9999px; opacity: 0;" />

        <div>
          <label for="name" class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">${t('contact.nameLabel')}</label>
          <input type="text" id="name" name="name" class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="${t('contact.namePlaceholder')}" />
          <span class="error-msg text-rose-500 dark:text-rose-400 text-xs hidden mt-1">${t('contact.nameError')}</span>
        </div>

        <div>
          <label for="email" class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">${t('contact.emailFieldLabel')}</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="${t('contact.emailPlaceholder')}" />
          <span class="error-msg text-rose-500 dark:text-rose-400 text-xs hidden mt-1">${t('contact.emailError')}</span>
        </div>

        <div>
          <label for="message" class="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">${t('contact.messageLabel')}</label>
          <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="${t('contact.messagePlaceholder')}"></textarea>
          <span class="error-msg text-rose-500 dark:text-rose-400 text-xs hidden mt-1">${t('contact.messageError')}</span>
        </div>

        <button type="submit" id="submit-btn" class="w-full py-3.5 px-6 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2">
          <span>${t('contact.submit')}</span>
        </button>
      </form>
    </div>
  `;

  setupFormLogic();
}

function setupFormLogic() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const formLoadedAt = Date.now();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const alertBox = form.querySelector('#form-alert');
    const submitBtn = form.querySelector('#submit-btn');

    let isValid = true;

    // Honeypot kontrolü: bu alanı bir insan göremez ve dolduramaz
    const honeypot = form.querySelector('#website');
    if (honeypot && honeypot.value.trim() !== '') {
      form.reset();
      return;
    }

    // Çok hızlı gönderim kontrolü (muhtemelen bot)
    if (Date.now() - formLoadedAt < 2000) {
      return;
    }

    const clearError = (input) => {
      input.classList.remove('border-rose-500');
      input.nextElementSibling?.classList.add('hidden');
    };

    const showError = (input) => {
      input.classList.add('border-rose-500');
      input.nextElementSibling?.classList.remove('hidden');
      isValid = false;
    };

    if (!nameInput.value.trim()) showError(nameInput);
    else clearError(nameInput);

    if (!emailRegex.test(emailInput.value.trim())) showError(emailInput);
    else clearError(emailInput);

    if (messageInput.value.trim().length < 10) showError(messageInput);
    else clearError(messageInput);

    if (!isValid) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>${t('contact.sending')}</span>
    `;

    emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      }
    )
      .then(() => {
        alertBox.className = 'p-4 rounded-lg text-sm font-medium bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 block mb-4';
        alertBox.textContent = t('contact.success');
        form.reset();
      })
      .catch((err) => {
        console.error('EmailJS gönderim hatası:', err);
        alertBox.className = 'p-4 rounded-lg text-sm font-medium bg-rose-50 dark:bg-rose-950/80 border border-rose-300 dark:border-rose-800 text-rose-700 dark:text-rose-400 block mb-4';
        alertBox.textContent = t('contact.error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>${t('contact.submit')}</span>`;
      });
  });
}