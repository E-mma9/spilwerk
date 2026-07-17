// Spilwerk — minimal interactions
(() => {
  // ── Reveal-on-scroll ─────────────────────────────────────────────
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach(el => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    els.forEach(el => io.observe(el));
  }

  // ── Mark current nav link ────────────────────────────────────────
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(path) && path !== 'index.html') a.setAttribute('aria-current', 'page');
  });

  // ── Contact form (mailto fallback) ───────────────────────────────
  const form = document.querySelector('form[data-mailto]');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const f = new FormData(form);
      const subject = encodeURIComponent('Spilwerk — aanvraag van ' + (f.get('name') || ''));
      const body = encodeURIComponent(
        `Naam: ${f.get('name') || ''}\nBedrijf: ${f.get('company') || ''}\nE-mail: ${f.get('email') || ''}\n\nWat speelt er:\n${f.get('message') || ''}`
      );
      location.href = `mailto:emmanueltekle@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // ── Floating contact widget ──────────────────────────────────────
  // Hide on the contact page itself (redundant there).
  const onContactPage = path.endsWith('contact.html');
  if (!onContactPage) injectContactWidget();

  function injectContactWidget() {
    // ▼ EDIT HERE ▼ — zet je zakelijke 06-nummer in 'whatsapp' en 'phone'
    //   E.164-formaat zonder spaties of streepjes, bv. '+31612345678'
    //   Op null laten staan = die optie verschijnt niet.
    const CONTACT = {
      email:    'emmanueltekle@gmail.com',
      whatsapp: '+31687433537',
      phone:    '+31687433537',
    };
    // ▲ EDIT HERE ▲

    const channels = [
      CONTACT.email && {
        label: 'Mail',
        sub:   CONTACT.email,
        href:  `mailto:${CONTACT.email}?subject=${encodeURIComponent('Spilwerk — vraag')}`,
      },
      CONTACT.whatsapp && {
        label: 'WhatsApp',
        sub:   'Direct chatten',
        href:  `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Hoi Emmanuel, ik kom van Spilwerk.nl — ')}`,
        external: true,
      },
      CONTACT.phone && {
        label: 'Bel direct',
        sub:   formatPhone(CONTACT.phone),
        href:  `tel:${CONTACT.phone}`,
      },
    ].filter(Boolean);

    if (channels.length === 0) return;

    const root = document.createElement('div');
    root.className = 'contact-widget';
    root.innerHTML = `
      <button type="button" class="contact-widget__toggle" aria-expanded="false" aria-controls="cw-menu" aria-label="Contact-opties openen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="contact-widget__label">Bel of app</span>
      </button>
      <ul class="contact-widget__menu" id="cw-menu" role="menu">
        ${channels.map(c => `
          <li role="none">
            <a role="menuitem" class="contact-widget__item" href="${c.href}"${c.external ? ' target="_blank" rel="noopener"' : ''}>
              <span class="contact-widget__item-label">${c.label}</span>
              <span class="contact-widget__item-sub">${c.sub}</span>
            </a>
          </li>
        `).join('')}
      </ul>
    `;
    document.body.appendChild(root);

    const toggle = root.querySelector('.contact-widget__toggle');
    const open = (state) => {
      const isOpen = state ?? !root.classList.contains('is-open');
      root.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    };
    toggle.addEventListener('click', () => open());
    document.addEventListener('click', (e) => { if (!root.contains(e.target)) open(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') open(false); });
  }

  function formatPhone(p) {
    // +31612345678 → 06 12 34 56 78  (only for display; href stays raw)
    const digits = p.replace(/\D/g, '');
    if (digits.startsWith('31') && digits.length === 11) {
      const local = '0' + digits.slice(2);
      return local.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
    }
    return p;
  }
})();
