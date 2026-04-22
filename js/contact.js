/* ============================================
   contact.js — Form submission via Formspree
   ============================================ */

(function () {
  const form   = document.getElementById('contact-form');
  const btn    = document.getElementById('form-submit');
  const status = document.getElementById('form-status');

  const MESSAGES = {
    en: {
      success: 'Message sent! I\'ll be in touch soon.',
      error:   'Something went wrong. Please try again.',
      sending: 'Sending...',
    },
    es: {
      success: '¡Mensaje enviado! Te responderé pronto.',
      error:   'Algo salió mal. Por favor inténtalo de nuevo.',
      sending: 'Enviando...',
    },
  };

  function getLang() {
    return localStorage.getItem('kb-lang') || 'en';
  }

  function showStatus(type, text) {
    status.textContent  = text;
    status.dataset.type = type;
    status.hidden       = false;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const lang = getLang();
    const msg  = MESSAGES[lang];

    btn.disabled         = true;
    btn.firstElementChild.textContent = msg.sending;
    status.hidden        = true;

    try {
      const res = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        showStatus('success', msg.success);
        form.reset();
      } else {
        showStatus('error', msg.error);
      }
    } catch {
      showStatus('error', msg.error);
    } finally {
      btn.disabled = false;
      btn.firstElementChild.textContent = translations[lang]['form.submit'];
    }
  });
})();
