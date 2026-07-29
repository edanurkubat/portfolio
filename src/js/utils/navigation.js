/* src/js/utils/navigation.js */
export function initNavigation() {
  const header = document.querySelector('header');
  const mobileBtn = document.getElementById('mobile-menu-btn');

  const mobileNav = document.createElement('div');
  mobileNav.id = 'mobile-menu';
  mobileNav.className = 'hidden fixed inset-x-0 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-all duration-300 md:hidden z-40';
  mobileNav.innerHTML = `
    <ul class="flex flex-col gap-4 text-base font-medium text-slate-700 dark:text-slate-300">
      <li><a href="#about" data-i18n="nav.about" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">Hakkımda</a></li>
      <li><a href="#skills" data-i18n="nav.skills" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">Yetenekler</a></li>
      <li><a href="#projects" data-i18n="nav.projects" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">Projeler</a></li>
      <li><a href="#experience" data-i18n="nav.experience" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">Deneyim</a></li>
      <li><a href="#certificates" data-i18n="nav.certificates" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">Sertifikalar</a></li>
      <li><a href="#contact" data-i18n="nav.contact" class="mobile-link block py-2 hover:text-cyan-400 transition-colors">İletişim</a></li>
    </ul>
  `;

  header?.appendChild(mobileNav);

  const toggleMenu = () => {
    const isHidden = mobileNav.classList.contains('hidden');
    if (isHidden) {
      mobileNav.classList.remove('hidden');
      mobileBtn?.setAttribute('aria-expanded', 'true');
    } else {
      mobileNav.classList.add('hidden');
      mobileBtn?.setAttribute('aria-expanded', 'false');
    }
  };

  mobileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileBtn?.contains(e.target)) {
      mobileNav.classList.add('hidden');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('shadow-lg', 'shadow-black/10', 'dark:shadow-black/20', 'bg-white/90', 'dark:bg-slate-900/90');
      header?.classList.remove('bg-white/80', 'dark:bg-slate-900/80');
    } else {
      header?.classList.remove('shadow-lg', 'shadow-black/10', 'dark:shadow-black/20', 'bg-white/90', 'dark:bg-slate-900/90');
      header?.classList.add('bg-white/80', 'dark:bg-slate-900/80');
    }
  });
}