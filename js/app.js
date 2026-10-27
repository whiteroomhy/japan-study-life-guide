(() => {
  const page = document.body.dataset.page || 'home';
  const supported = Object.keys(LANGUAGES);
  const urlLanguage = new URLSearchParams(location.search).get('lang');
  let lang = urlLanguage || localStorage.getItem('japanGuideLanguage') || 'zh-Hant';
  if (!supported.includes(lang)) lang = 'zh-Hant';

  const getUI = () => UI[lang];
  const withLang = (href) => `${href}${href.includes('?') ? '&' : '?'}lang=${encodeURIComponent(lang)}`;
  const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  function headerHTML() {
    const ui = getUI();
    const navItems = [
      ['home','index.html'], ['preparation','preparation.html'], ['arrival','arrival.html'], ['life','life.html'],
      ['career','career.html'], ['checklist','checklist.html'], ['sources','sources.html'], ['team','team.html']
    ];
    return `<div class="header-inner">
      <a class="brand" href="${withLang('index.html')}" aria-label="${escapeHTML(ui.siteName)}">
        <img src="assets/logo.svg" alt=""><span class="brand-text">${escapeHTML(ui.siteName)}<small>${escapeHTML(ui.siteKicker)}</small></span>
      </a>
      <nav id="main-nav" class="main-nav" aria-label="Primary navigation">
        ${navItems.map(([key, href]) => `<a class="nav-link ${page===key?'active':''}" href="${withLang(href)}">${escapeHTML(ui.nav[key])}</a>`).join('')}
      </nav>
      <div class="header-tools">
        <select id="language-select" class="language-select" aria-label="${escapeHTML(ui.language)}">
          ${supported.map(code => `<option value="${code}" ${code===lang?'selected':''}>${LANGUAGES[code].label}</option>`).join('')}
        </select>
        <button id="menu-toggle" class="menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false">☰ <span>${escapeHTML(ui.menu)}</span></button>
      </div>
    </div>`;
  }

  function footerHTML() {
    const ui = getUI();
    return `<div class="footer-inner">
      <div><div class="footer-brand"><img src="assets/logo.svg" alt=""><span>${escapeHTML(ui.siteName)}</span></div><p>${escapeHTML(ui.footerText)}</p></div>
      <div class="footer-links">
        <a href="${withLang('preparation.html')}">${escapeHTML(ui.nav.preparation)}</a><a href="${withLang('arrival.html')}">${escapeHTML(ui.nav.arrival)}</a>
        <a href="${withLang('life.html')}">${escapeHTML(ui.nav.life)}</a><a href="${withLang('career.html')}">${escapeHTML(ui.nav.career)}</a>
        <a href="${withLang('checklist.html')}">${escapeHTML(ui.nav.checklist)}</a><a href="${withLang('sources.html')}">${escapeHTML(ui.nav.sources)}</a><a href="${withLang('team.html')}">${escapeHTML(ui.nav.team)}</a>
      </div>
    </div><div class="footer-bottom">© 2026 Japan Study & Life Guide · ${escapeHTML(ui.copyright)}</div>`;
  }

  function pageHero(data) {
    const ui = getUI();
    return `<section class="page-hero"><div class="container">
      <div class="breadcrumbs"><a href="${withLang('index.html')}">${escapeHTML(ui.home)}</a> / ${escapeHTML(data.title)}</div>
      <span class="eyebrow">${escapeHTML(data.eyebrow)}</span><h1>${escapeHTML(data.title)}</h1><p>${escapeHTML(data.lead)}</p>
    </div></section>`;
  }

  function renderSections(data) {
    const side = data.sections.map((s, i) => `<a href="#section-${i+1}">${escapeHTML(s.title)}</a>`).join('');
    const body = data.sections.map((s, i) => {
      const cards = s.cards ? `<div class="article-card-grid">${s.cards.map(([title, text]) => `<article class="info-card"><span class="tag">${String(i+1).padStart(2,'0')}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(text)}</p></article>`).join('')}</div>` : '';
      const bullets = s.bullets ? `<ul>${s.bullets.map(x => `<li>${escapeHTML(x)}</li>`).join('')}</ul>` : '';
      const timeline = s.timeline ? `<div class="timeline">${s.timeline.map(([time, text]) => `<div class="timeline-item"><strong>${escapeHTML(time)}</strong><span>${escapeHTML(text)}</span></div>`).join('')}</div>` : '';
      const notice = s.notice ? `<div class="notice">${escapeHTML(s.notice)}</div>` : '';
      return `<section id="section-${i+1}" class="article-section"><h2>${escapeHTML(s.title)}</h2>${s.intro?`<p>${escapeHTML(s.intro)}</p>`:''}${cards}${bullets}${timeline}${notice}</section>`;
    }).join('');
    return `${pageHero(data)}<section class="section"><div class="container content-layout"><aside class="side-nav" aria-label="On this page">${side}</aside><article>${body}</article></div></section>`;
  }

  function renderHome() {
    const h = HOME[lang];
    const ui = getUI();
    return `<section class="hero"><div class="container hero-grid"><div>
      <span class="eyebrow">${escapeHTML(h.eyebrow)}</span><h1>${escapeHTML(h.title)}</h1><p>${escapeHTML(h.lead)}</p>
      <div class="hero-actions"><a class="btn btn-primary" href="${withLang('preparation.html')}">${escapeHTML(h.primary)} →</a><a class="btn btn-secondary" href="${withLang('checklist.html')}">✓ ${escapeHTML(h.secondary)}</a></div>
    </div><aside class="hero-panel"><h2>${escapeHTML(h.routeTitle)}</h2><div class="route">${h.routes.map(r=>`<div class="route-item"><div class="route-icon">${r[0]}</div><div><strong>${escapeHTML(r[1])}</strong><span>${escapeHTML(r[2])}</span></div></div>`).join('')}</div></aside></div></section>
    <section class="section"><div class="container"><div class="section-head"><span class="eyebrow">${escapeHTML(h.sectionEyebrow)}</span><h2>${escapeHTML(h.sectionTitle)}</h2><p>${escapeHTML(h.sectionLead)}</p></div>
      <div class="stage-grid">${h.stages.map(s=>`<a class="stage-card" href="${withLang(s[4])}"><span class="stage-number">STAGE ${s[0]}</span><div class="stage-icon">${s[1]}</div><h3>${escapeHTML(s[2])}</h3><p>${escapeHTML(s[3])}</p><span class="arrow">${escapeHTML(ui.readMore)} →</span></a>`).join('')}</div></div></section>
    <section class="section alt"><div class="container"><div class="section-head"><span class="eyebrow">${escapeHTML(h.toolsEyebrow)}</span><h2>${escapeHTML(h.toolsTitle)}</h2></div>
      <div class="feature-row"><article class="feature-panel"><div>✅</div><h3>${escapeHTML(h.checklistTitle)}</h3><p>${escapeHTML(h.checklistText)}</p><ul class="feature-list">${h.checklistBullets.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="hero-actions"><a class="btn btn-primary" href="${withLang('checklist.html')}">${escapeHTML(ui.nav.checklist)}</a></div></article>
      <article class="feature-panel light"><div>🔎</div><h3>${escapeHTML(h.sourceTitle)}</h3><p>${escapeHTML(h.sourceText)}</p><ul class="feature-list">${h.sourceBullets.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul><div class="hero-actions"><a class="btn btn-secondary" href="${withLang('sources.html')}">${escapeHTML(ui.nav.sources)}</a></div></article></div>
      <div class="notice" style="margin-top:24px"><strong>${escapeHTML(h.noticeTitle)}</strong> ${escapeHTML(h.notice)}</div></div></section>`;
  }

  function renderChecklist() {
    const data = CHECKLIST[lang];
    const ui = getUI();
    const stored = JSON.parse(localStorage.getItem('japanGuideChecklist') || '{}');
    const groups = data.groups.map(([title, items]) => `<section class="checklist-group"><h2>${escapeHTML(title)}</h2>${items.map(([id, label])=>`<div class="check-item ${stored[id]?'checked':''}"><input type="checkbox" id="check-${id}" data-check-id="${id}" ${stored[id]?'checked':''}><label for="check-${id}">${escapeHTML(label)}</label></div>`).join('')}</section>`).join('');
    return `${pageHero(data)}<section class="section"><div class="container"><div class="notice" style="margin-bottom:24px">${escapeHTML(ui.checklistSaved)}</div><div class="checklist-shell"><div>${groups}</div><aside class="progress-panel"><h2>${escapeHTML(ui.progress)}</h2><div class="progress-ring" id="progress-ring"><span id="progress-percent">0%</span></div><p id="progress-text"></p><button class="reset-btn" id="reset-checklist" type="button">${escapeHTML(ui.reset)}</button></aside></div></div></section>`;
  }

  function activateChecklist() {
    const boxes = [...document.querySelectorAll('[data-check-id]')];
    if (!boxes.length) return;
    const ring = document.getElementById('progress-ring');
    const percent = document.getElementById('progress-percent');
    const text = document.getElementById('progress-text');
    const update = () => {
      const state = {};
      boxes.forEach(b => { state[b.dataset.checkId] = b.checked; b.closest('.check-item').classList.toggle('checked', b.checked); });
      localStorage.setItem('japanGuideChecklist', JSON.stringify(state));
      const done = boxes.filter(b => b.checked).length;
      const pct = Math.round(done / boxes.length * 100);
      ring.style.setProperty('--progress', pct + '%'); percent.textContent = pct + '%';
      text.textContent = `${done} / ${boxes.length} ${getUI().items} ${getUI().completed}`;
    };
    boxes.forEach(b => b.addEventListener('change', update));
    document.getElementById('reset-checklist').addEventListener('click', () => { boxes.forEach(b => b.checked = false); update(); });
    update();
  }

  function renderSources() {
    const d = SOURCES[lang], ui = getUI();
    return `${pageHero(d)}<section class="section"><div class="container"><div class="source-grid">${d.cards.map(([name, desc, url])=>`<article class="source-card"><div class="source-meta">${escapeHTML(ui.sourceLabel)} · ${escapeHTML(ui.updated)}</div><h2>${escapeHTML(name)}</h2><p>${escapeHTML(desc)}</p><p style="margin-top:16px"><a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHTML(ui.sourceVisit)} ↗</a></p></article>`).join('')}</div><div class="notice" style="margin-top:24px">${escapeHTML(d.note)}</div></div></section>`;
  }

  function renderTeam() {
    const d = TEAM[lang];
    return `${pageHero(d)}<section class="section"><div class="container"><div class="team-grid">${MEMBERS.map(name=>`<article class="team-card"><div class="avatar">${escapeHTML(name.slice(-1))}</div><h3>${escapeHTML(name)}</h3><div class="small" style="margin-top:8px">${escapeHTML(d.role)}</div></article>`).join('')}</div></div></section>`;
  }

  function render() {
    document.documentElement.lang = lang;
    const ui = getUI();
    document.title = `${ui.nav[page] || ui.siteName} | ${ui.siteName}`;
    document.getElementById('site-header').innerHTML = headerHTML();
    document.getElementById('site-footer').innerHTML = footerHTML();
    const main = document.getElementById('main');
    if (page === 'home') main.innerHTML = renderHome();
    else if (page === 'checklist') main.innerHTML = renderChecklist();
    else if (page === 'sources') main.innerHTML = renderSources();
    else if (page === 'team') main.innerHTML = renderTeam();
    else main.innerHTML = renderSections(PAGE_DATA[page][lang]);

    const select = document.getElementById('language-select');
    select.addEventListener('change', e => { lang = e.target.value; localStorage.setItem('japanGuideLanguage', lang); const nextUrl = new URL(location.href); nextUrl.searchParams.set('lang', lang); history.replaceState({}, '', nextUrl); render(); window.scrollTo({top:0}); });
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
    document.onclick = (e) => { if (!e.target.closest('.header-inner')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); } };
    activateChecklist();
  }

  render();
})();
