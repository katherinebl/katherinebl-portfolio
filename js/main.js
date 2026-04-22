/* ============================================
   main.js — Sidebar drawer + scroll spy
   ============================================ */

(function () {
  const sidebar      = document.getElementById('sidebar');
  const overlay      = document.getElementById('overlay');
  const hamburger    = document.getElementById('hamburger');
  const sidebarClose = document.getElementById('sidebar-close');
  const navLinks     = document.querySelectorAll('.sidebar__link');
  const sections     = document.querySelectorAll('.section[id]');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);
  sidebarClose.addEventListener('click', closeSidebar);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) closeSidebar();
    });
  });

  // Scroll spy — highlight active section in the sidebar nav
  function updateActiveLink() {
    let current = sections[0]?.id || '';

    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 140) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-navlink') === current);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
})();
