/* ============================================
   i18n.js — EN / ES language toggle
   ============================================ */

const translations = {
  en: {
    'nav.home':        'Home',
    'nav.about':       'About',
    'nav.skills':      'Skills',
    'nav.contact':     'Contact',
    'hero.name':       'Katherine Briceño',
    'hero.role':       'Frontend developer',
    'hero.tagline':    'Turning complex problems into clean, accessible interfaces, with an eye for detail.',
    'hero.cta.contact':'Get in touch',
    'hero.cta.skills': 'View skills',
    'footer.built':    'Built with care.',
  },
  es: {
    'nav.home':        'Inicio',
    'nav.about':       'Sobre mí',
    'nav.skills':      'Skills',
    'nav.contact':     'Contacto',
    'hero.name':       'Katherine Briceño',
    'hero.role':       'Frontend developer',
    'hero.tagline':    'Convierto problemas complejos en interfaces limpias y accesibles, con atención al detalle.',
    'hero.cta.contact':'Contáctame',
    'hero.cta.skills': 'Ver skills',
    'footer.built':    'Hecho con cariño.',
  }
};

(function () {
  const btn     = document.getElementById('lang-toggle');
  const STORAGE = 'kb-lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    btn.textContent = lang === 'en' ? 'ES' : 'EN';
    btn.classList.toggle('active', lang === 'es');
    localStorage.setItem(STORAGE, lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  const saved = localStorage.getItem(STORAGE) || 'en';
  applyLang(saved);

  btn.addEventListener('click', () => {
    const current = localStorage.getItem(STORAGE) || 'en';
    applyLang(current === 'en' ? 'es' : 'en');
  });
})();
