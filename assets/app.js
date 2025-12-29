/* eslint-disable no-console */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const LANG_KEY = "lab_lang";
  const SUPPORTED_LANGS = ["zh", "en"];

  function getUrlLang() {
    try {
      const url = new URL(window.location.href);
      const l = (url.searchParams.get("lang") || "").toLowerCase();
      if (SUPPORTED_LANGS.includes(l)) return l;
    } catch (_) {
      // ignore
    }
    return null;
  }

  function getStoredLang() {
    const l = (localStorage.getItem(LANG_KEY) || "").toLowerCase();
    return SUPPORTED_LANGS.includes(l) ? l : null;
  }

  function setStoredLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setDocumentLang(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
  }

  function t(data, lang, keyPath) {
    const parts = keyPath.split(".");
    let cur = data?.i18n?.[lang];
    for (const p of parts) cur = cur?.[p];
    if (cur == null) return null;
    if (typeof cur === "string") return cur;
    return null;
  }

  function fillI18nText(data, lang) {
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(data, lang, key);
      if (val == null) return;
      el.textContent = val;
    });
  }

  function renderKeywords(data, lang) {
    const root = $('[data-render="keywords"]');
    if (!root) return;
    const items = data.keywords?.[lang] || [];
    root.innerHTML = items
      .map(
        (kw) =>
          `<span class="pill"><span class="pill-dot" aria-hidden="true"></span>${escapeHtml(kw)}</span>`
      )
      .join("");
  }

  function renderMetrics(data, lang) {
    const root = $('[data-render="metrics"]');
    if (!root) return;
    const items = data.metrics?.[lang] || [];
    root.innerHTML = items
      .map(
        (m) => `
        <div class="metric">
          <div class="metric-value">${escapeHtml(m.value)}</div>
          <div class="metric-label">${escapeHtml(m.label)}</div>
        </div>`
      )
      .join("");
  }

  function renderCards(rootSel, items) {
    const root = $(rootSel);
    if (!root) return;
    root.innerHTML = items
      .map((c) => {
        const tags = (c.tags || [])
          .map((x) => `<span class="tag">${escapeHtml(x)}</span>`)
          .join("");
        return `
        <article class="card">
          <h3 class="card-title">${escapeHtml(c.title)}</h3>
          <p class="card-desc">${escapeHtml(c.desc)}</p>
          ${tags ? `<div class="card-meta">${tags}</div>` : ""}
        </article>`;
      })
      .join("");
  }

  function renderResearch(data, lang) {
    renderCards(
      '[data-render="research"]',
      (data.research?.[lang] || []).map((x) => ({
        title: x.title,
        desc: x.desc,
        tags: x.tags || [],
      }))
    );
  }

  function renderPlatforms(data, lang) {
    renderCards(
      '[data-render="platforms"]',
      (data.platforms?.[lang] || []).map((x) => ({
        title: x.title,
        desc: x.desc,
        tags: x.tags || [],
      }))
    );
  }

  function renderNews(data, lang) {
    const root = $('[data-render="news"]');
    if (!root) return;
    const items = data.news?.[lang] || [];
    root.innerHTML = items
      .map((n) => {
        const meta = [n.date, n.type].filter(Boolean).map(escapeHtml).join(" · ");
        const tags = (n.tags || []).map((x) => `<span class="tag">${escapeHtml(x)}</span>`).join("");
        return `
        <article class="card">
          <h3 class="card-title">${escapeHtml(n.title)}</h3>
          <p class="card-desc">${escapeHtml(n.desc)}</p>
          <div class="card-meta">
            ${meta ? `<span class="tag">${meta}</span>` : ""}
            ${tags}
          </div>
        </article>`;
      })
      .join("");
  }

  function renderPI(data, lang) {
    const root = $('[data-render="pi"]');
    if (!root) return;
    const pi = data.pi?.[lang];
    if (!pi) return;
    const links = (pi.links || [])
      .map((l) => {
        const href = l.href ? escapeHtml(l.href) : "#";
        const label = escapeHtml(l.label || "");
        return `<a class="link-pill" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
      })
      .join("");

    const avatarHtml = pi.avatar
      ? `<img src="${escapeHtml(pi.avatar)}" alt="${escapeHtml(pi.name)}" />`
      : "";

    root.innerHTML = `
      <article class="card pi-card">
        <div class="avatar">${avatarHtml}</div>
        <div>
          <h3 class="pi-name">${escapeHtml(pi.name)}</h3>
          <p class="pi-title">${escapeHtml(pi.title || "")}</p>
          ${links ? `<div class="pi-links">${links}</div>` : ""}
        </div>
      </article>
    `;
  }

  function renderTeam(data, lang) {
    const root = $('[data-render="team"]');
    if (!root) return;
    const groups = data.team?.[lang] || [];
    root.innerHTML = groups
      .map((g) => {
        const people = (g.people || [])
          .map(
            (p) => `
          <div class="person">
            <h4 class="person-name">${escapeHtml(p.name)}</h4>
            <div class="person-role">${escapeHtml(p.role || "")}</div>
            ${p.focus ? `<div class="person-focus">${escapeHtml(p.focus)}</div>` : ""}
          </div>`
          )
          .join("");
        return `
          <section class="card">
            <h3 class="group-title">${escapeHtml(g.group)}</h3>
            <div class="people">${people}</div>
          </section>
        `;
      })
      .join("");
  }

  function renderPublications(data, lang) {
    const root = $('[data-render="publications"]');
    if (!root) return;
    const items = data.publications?.[lang] || [];
    root.innerHTML = items
      .map((p) => {
        const links = (p.links || [])
          .map((l) => {
            const href = l.href ? escapeHtml(l.href) : "#";
            return `<a class="link-pill" href="${href}" target="_blank" rel="noreferrer">${escapeHtml(
              l.label
            )}</a>`;
          })
          .join("");
        const meta = [p.journal, p.authors].filter(Boolean).map(escapeHtml).join(" · ");
        return `
          <article class="card pub-item">
            <div class="pub-year">${escapeHtml(p.year || "")}</div>
            <div>
              <h3 class="pub-title">${escapeHtml(p.title)}</h3>
              ${meta ? `<div class="pub-meta">${meta}</div>` : ""}
              ${links ? `<div class="pub-links">${links}</div>` : ""}
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderGrants(data, lang) {
    const root = $('[data-render="grants"]');
    if (!root) return;
    const items = data.grants?.[lang] || [];
    root.innerHTML = items
      .map(
        (g) => `
        <div class="timeline-item">
          <div class="timeline-time">${escapeHtml(g.time || "")}</div>
          <div class="timeline-card">
            <h3 class="timeline-title">${escapeHtml(g.title)}</h3>
            <p class="timeline-desc">${escapeHtml(g.desc || "")}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  function renderGallery(data, lang) {
    const root = $('[data-render="gallery"]');
    if (!root) return;
    const items = data.gallery?.[lang] || [];
    root.innerHTML = items
      .map((g) => {
        const span = g.span || 4;
        const spanClass = `span-${Math.max(4, Math.min(7, span))}`;
        const img = g.src ? `<img src="${escapeHtml(g.src)}" alt="${escapeHtml(g.alt || g.caption || "")}" />` : "";
        return `
          <figure class="gallery-item ${spanClass}">
            ${img}
            ${g.caption ? `<figcaption class="gallery-caption">${escapeHtml(g.caption)}</figcaption>` : ""}
          </figure>
        `;
      })
      .join("");
  }

  function renderJoin(data, lang) {
    const root = $('[data-render="join"]');
    if (!root) return;
    const blocks = data.join?.[lang] || [];
    root.innerHTML = blocks
      .map((b) => {
        const items = (b.items || []).map((x) => `<li>${escapeHtml(x)}</li>`).join("");
        return `
          <div style="margin-bottom: 14px;">
            <h3 class="card-title">${escapeHtml(b.title)}</h3>
            ${b.desc ? `<p class="card-desc">${escapeHtml(b.desc)}</p>` : ""}
            ${items ? `<ul class="steps">${items}</ul>` : ""}
          </div>
        `;
      })
      .join("");
  }

  function renderContact(data, lang) {
    const root = $('[data-render="contact"]');
    if (!root) return;
    const c = data.contact?.[lang];
    if (!c) return;
    const lines = (c.lines || []).map((x) => `<div class="tag">${escapeHtml(x)}</div>`).join("");
    root.innerHTML = `
      <h3 class="card-title">${escapeHtml(c.title || "")}</h3>
      <p class="card-desc">${escapeHtml(c.desc || "")}</p>
      <div class="card-meta" style="margin-top: 14px; gap: 10px;">${lines}</div>
    `;
  }

  function renderAll(data, lang) {
    setDocumentLang(lang);
    fillI18nText(data, lang);
    renderKeywords(data, lang);
    renderMetrics(data, lang);
    renderResearch(data, lang);
    renderPlatforms(data, lang);
    renderPI(data, lang);
    renderTeam(data, lang);
    renderPublications(data, lang);
    renderGrants(data, lang);
    renderNews(data, lang);
    renderGallery(data, lang);
    renderJoin(data, lang);
    renderContact(data, lang);

    // update toggle label
    const toggleText = $('[data-lang-toggle] [data-i18n="langToggle"]');
    if (toggleText) toggleText.textContent = lang === "zh" ? "EN" : "中文";
  }

  async function loadData() {
    // When served via http(s), allow JSON as a content source.
    // When opened via file://, fetch is usually blocked; then fall back to SITE_DATA.
    try {
      const res = await fetch("content/site-data.json", { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        if (json && json.i18n) return json;
      }
    } catch (_) {
      // ignore
    }
    return window.SITE_DATA;
  }

  function setupNav() {
    const nav = $("[data-nav]");
    const btn = $("[data-nav-toggle]");
    if (!nav || !btn) return;
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
    $$('a[href^="#"]', nav).forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  async function main() {
    const data = await loadData();
    if (!data) {
      console.error("SITE_DATA missing. Ensure `content/site-data.js` is loaded.");
      return;
    }

    setupNav();

    const initialLang = getUrlLang() || getStoredLang() || data.defaultLang || "zh";
    const lang = SUPPORTED_LANGS.includes(initialLang) ? initialLang : "zh";
    renderAll(data, lang);
    setStoredLang(lang);

    const toggle = $("[data-lang-toggle]");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const cur = getStoredLang() || lang;
        const next = cur === "zh" ? "en" : "zh";
        setStoredLang(next);
        renderAll(data, next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => void main());
  } else {
    void main();
  }
})();


