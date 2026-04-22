/* ============================================
   theme.js — Light / Dark mode toggle
   ============================================ */

(function () {
  const root       = document.documentElement;
  const btn        = document.getElementById('theme-toggle');
  const themeValue = document.getElementById('theme-value');
  const themeIcon  = document.getElementById('theme-icon');
  const STORAGE    = 'kb-theme';

  const ICONS = {
    light: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    dark:  '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  };

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeValue.textContent = theme === 'dark' ? 'Dark' : 'Light';
    themeIcon.innerHTML    = ICONS[theme];
    localStorage.setItem(STORAGE, theme);
  }

  const saved  = localStorage.getItem(STORAGE);
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || system);

  btn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();
