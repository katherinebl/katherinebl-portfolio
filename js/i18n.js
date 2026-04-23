/* ============================================
   i18n.js — EN / ES language toggle
   ============================================ */

const translations = {
  en: {
    /* Nav */
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.skills':     'Skills',
    'nav.languages':  'Languages',
    'nav.contact':    'Contact',

    /* Hero */
    'hero.name':     'Katherine Briceño',
    'hero.role':     'Frontend Developer | Biologist',
    'hero.tagline':  'Turning complex problems into clean, accessible interfaces, with an eye for detail.',
    'hero.location': 'Madrid, Spain',

    /* About */
    'about.title': 'About me',
    'about.bio':   'Frontend developer with over 7 years of experience crafting accessible, component-driven interfaces. With a background in Biology, I bring a curiosity-driven mindset and a taste for understanding systems from the ground up: qualities that translate naturally into writing clean, scalable code. I enjoy working in close collaboration with design and product teams, and I care deeply about the details that make an interface feel right for every user.',

    /* Education */
    'education.title':        'Education',
    'edu.urjc.degree':        'JavaScript Certification',
    'edu.urjc.institution':   'Universidad Rey Juan Carlos',
    'edu.urjc.year':          '2019 – 2020',
    'edu.adalab.degree':      'Frontend Development Bootcamp',
    'edu.adalab.institution': 'Adalab',
    'edu.adalab.year':        '2018 – 2019',
    'edu.cornell.degree':     'Scientific Communication in Biotechnology',
    'edu.cornell.institution':'Cornell University',
    'edu.cornell.year':       '2016',
    'edu.andes.degree':       "Bachelor's Degree in Biology",
    'edu.andes.institution':  'Universidad de los Andes',
    'edu.andes.year':         '2013',

    /* Experience */
    'experience.title':   'Work Experience',
    'exp.gig.role':       'Frontend Developer',
    'exp.gig.company':    'Gaming Innovation Group',
    'exp.gig.dates':      'Aug 2023 – Jan 2026',
    'exp.gig.desc':       'Built reusable components in a shared monorepo library powering multiple brands, using Vue.js, TypeScript, and Web Components. Focused on scalability, performance, and accessibility throughout. Took part in production deployments via CI/CD pipelines and worked alongside Product, Design, QA, and Backend teams in an Agile environment.',
    'exp.zooplus.role':   'Frontend Developer',
    'exp.zooplus.company':'Zooplus',
    'exp.zooplus.dates':  'Aug 2020 – Aug 2023',
    'exp.zooplus.desc':   'Built and maintained e-commerce UI components (banners, carousels, accordions) and contributed to high-traffic pages including the homepage and seasonal campaigns. Worked closely with Design and Content teams in an Agile environment, with accessibility and visual consistency as ongoing priorities.',
    'exp.kairos.role':    'Frontend Developer',
    'exp.kairos.company': 'Kairós Digital Solutions',
    'exp.kairos.dates':   'Mar 2019 – Aug 2020',
    'exp.kairos.desc':    'Joined a variety of client projects, from ad creatives for Vodafone to static websites, gaining solid grounding in professional frontend workflows. Applied design systems in Agile environments and collaborated across multidisciplinary teams.',

    /* Skills */
    'skills.title':              'Technical Skills',
    'softskills.title':          'Professional Skills',
    'soft.problemsolving':       'Problem-solving',
    'soft.collaborative':        'Collaborative',
    'soft.detailoriented':       'Detail-oriented',
    'soft.continuouslearning':   'Continuous learning',
    'soft.adaptable':            'Adaptable',
    'soft.empathetic':           'Empathetic',
    'soft.communication':        'Communication',

    /* Languages */
    'languages.title': 'Languages',
    'lang.spanish':    'Spanish',
    'lang.english':    'English',
    'lang.french':     'French',
    'lang.native':     'Native',
    'lang.c1':         'C1 – Advanced',
    'lang.a1':         'A1 – Basic',

    /* Contact */
    'contact.title':    'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk!',
    'form.name':        'Name',
    'form.email':       'Email',
    'form.message':     'Message',
    'form.submit':      'Send message',

    /* System */
    'sys.label':    'SYSTEM',
    'sys.theme':    'Theme',
    'sys.language': 'Language',

    /* Footer */
    'footer.built': 'Built with care.',
  },

  es: {
    /* Nav */
    'nav.home':       'Inicio',
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.skills':     'Skills',
    'nav.languages':  'Idiomas',
    'nav.contact':    'Contacto',

    /* Hero */
    'hero.name':     'Katherine Briceño',
    'hero.role':     'Frontend Developer | Bióloga',
    'hero.tagline':  'Convierto problemas complejos en interfaces limpias y accesibles, con atención al detalle.',
    'hero.location': 'Madrid, España',

    /* About */
    'about.title': 'Sobre mí',
    'about.bio':   'Desarrolladora frontend con más de 7 años de experiencia construyendo interfaces accesibles orientadas a componentes. Con formación en Biología, traigo una mentalidad curiosa y ganas de entender los sistemas desde la base: cualidades que se traducen de forma natural en código limpio y escalable. Disfruto colaborando estrechamente con los equipos de diseño y producto, y me importan los detalles que hacen que una interfaz se sienta bien para todos los usuarios.',

    /* Education */
    'education.title':        'Educación',
    'edu.urjc.degree':        'Certificación JavaScript',
    'edu.urjc.institution':   'Universidad Rey Juan Carlos',
    'edu.urjc.year':          '2019 – 2020',
    'edu.adalab.degree':      'Bootcamp de Desarrollo Frontend',
    'edu.adalab.institution': 'Adalab',
    'edu.adalab.year':        '2018 – 2019',
    'edu.cornell.degree':     'Comunicación Científica en Biotecnología',
    'edu.cornell.institution':'Cornell University',
    'edu.cornell.year':       '2016',
    'edu.andes.degree':       'Licenciatura en Biología',
    'edu.andes.institution':  'Universidad de los Andes',
    'edu.andes.year':         '2013',

    /* Experience */
    'experience.title':   'Experiencia Laboral',
    'exp.gig.role':       'Frontend Developer',
    'exp.gig.company':    'Gaming Innovation Group',
    'exp.gig.dates':      'Ago 2023 – Ene 2026',
    'exp.gig.desc':       'Desarrollé componentes reutilizables en una librería compartida en monorepo que alimenta múltiples marcas, con Vue.js, TypeScript y Web Components. Con foco en escalabilidad, rendimiento y accesibilidad. Participé en despliegues a producción mediante CI/CD y colaboré a diario con los equipos de Producto, Diseño, QA y Backend en un entorno Agile.',
    'exp.zooplus.role':   'Frontend Developer',
    'exp.zooplus.company':'Zooplus',
    'exp.zooplus.dates':  'Ago 2020 – Ago 2023',
    'exp.zooplus.desc':   'Construí y mantuve componentes de interfaz para e-commerce (banners, carruseles, acordeones) y contribuí en páginas de alto tráfico como la homepage y campañas estacionales. Trabajé junto con los equipos de Diseño y Contenido en un entorno Agile, priorizando accesibilidad y coherencia visual.',
    'exp.kairos.role':    'Frontend Developer',
    'exp.kairos.company': 'Kairós Digital Solutions',
    'exp.kairos.dates':   'Mar 2019 – Ago 2020',
    'exp.kairos.desc':    'Participé en proyectos variados para clientes, desde creatividades para Vodafone hasta webs estáticas, consolidando una base sólida en flujos de trabajo profesionales del frontend. Apliqué sistemas de diseño en entornos Agile y colaboré con equipos multidisciplinares.',

    /* Skills */
    'skills.title':            'Habilidades Técnicas',
    'softskills.title':        'Habilidades Profesionales',
    'soft.problemsolving':     'Resolución de problemas',
    'soft.collaborative':      'Colaboradora',
    'soft.detailoriented':     'Atención al detalle',
    'soft.continuouslearning': 'Aprendizaje continuo',
    'soft.adaptable':          'Adaptable',
    'soft.empathetic':         'Empática',
    'soft.communication':      'Comunicación',

    /* Languages */
    'languages.title': 'Idiomas',
    'lang.spanish':    'Español',
    'lang.english':    'Inglés',
    'lang.french':     'Francés',
    'lang.native':     'Nativo',
    'lang.c1':         'C1 – Avanzado',
    'lang.a1':         'A1 – Básico',

    /* Contact */
    'contact.title':    'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'form.name':        'Nombre',
    'form.email':       'Correo electrónico',
    'form.message':     'Mensaje',
    'form.submit':      'Enviar mensaje',

    /* System */
    'sys.label':    'SISTEMA',
    'sys.theme':    'Tema',
    'sys.language': 'Idioma',

    /* Footer */
    'footer.built': 'Hecho con cariño.',
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
