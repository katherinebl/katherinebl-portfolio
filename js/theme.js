/* ============================================
   theme.js — Light / Dark mode toggle
   ============================================ */

(function () {
  const root    = document.documentElement;
  const btn     = document.getElementById('theme-toggle');
  const STORAGE = 'kb-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    btn.textContent = theme === 'dark' ? '☾' : '☀';
    btn.classList.toggle('active', theme === 'dark');
    localStorage.setItem(STORAGE, theme);
  }

  // Load saved preference or system default
  const saved  = localStorage.getItem(STORAGE);
  const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || system);

  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
})();
