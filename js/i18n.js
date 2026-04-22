/* ============================================
   i18n.js — EN / ES language toggle
   ============================================ */

const translations = {
  en: {
    'nav.home':      'Home',
    'nav.about':     'About',
    'nav.skills':    'Skills',
    'nav.contact':   'Contact',
    'hero.name':     'Katherine Briceño',
    'hero.role':     'Frontend developer',
    'hero.tagline':  'Turning complex problems into clean, accessible interfaces, with an eye for detail.',
    'hero.location': 'Madrid, Spain',
    'about.title':   'About me',
    'about.bio':     'Frontend developer focused on building clean, accessible interfaces. I enjoy turning complex problems into elegant solutions using React, TypeScript, and Vue. Based in Madrid, detail-oriented and always learning.',
    'skills.title':  'Technical Skills',
    'contact.title': 'Contact',
    'sys.label':     'SYSTEM',
    'sys.theme':     'Theme',
    'sys.language':  'Language',
    'footer.built':  'Built with care.',
  },
  es: {
    'nav.home':      'Inicio',
    'nav.about':     'Sobre mí',
    'nav.skills':    'Skills',
    'nav.contact':   'Contacto',
    'hero.name':     'Katherine Briceño',
    'hero.role':     'Frontend developer',
    'hero.tagline':  'Convierto problemas complejos en interfaces limpias y accesibles, con atención al detalle.',
    'hero.location': 'Madrid, España',
    'about.title':   'Sobre mí',
    'about.bio':     'Desarrolladora frontend enfocada en construir interfaces limpias y accesibles. Disfruto convirtiendo problemas complejos en soluciones elegantes con React, TypeScript y Vue. Basada en Madrid, detallista y siempre aprendiendo.',
    'skills.title':  'Habilidades técnicas',
    'contact.title': 'Contacto',
    'sys.label':     'SISTEMA',
    'sys.theme':     'Tema',
    'sys.language':  'Idioma',
    'footer.built':  'Hecho con cariño.',
  }
};

(function () {
  const btn       = document.getElementById('lang-toggle');
  const langValue = document.getElementById('lang-value');
  const STORAGE   = 'kb-lang';

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    langValue.textContent = lang === 'en' ? 'EN' : 'ES';
    localStorage.setItem(STORAGE, lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
  }

  const saved = localStorage.getItem(STORAGE) || 'en';
  applyLang(saved);

  btn.addEventListener('click', () => {
    applyLang(localStorage.getItem(STORAGE) === 'en' ? 'es' : 'en');
  });
})();
