(function () {
  "use strict";

  const ICONS = {
    balanza: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7 2 13a3 3 0 0 0 6 0z"/><path d="M19 7l-3 6a3 3 0 0 0 6 0z"/></svg>',
    birrete: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/></svg>',
    maletin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
    escudo: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/></svg>',
    llave: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.6 12.4 8.9-8.9 3 3-2.1 2.1"/><path d="m16.5 8.5 3 3"/></svg>',
    herramientas: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2z"/></svg>',
    familia: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1"/><path d="M15 21v-.5a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4V21"/></svg>',
    arbol: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M12 22v-6"/><path d="M12 2 6 10h3l-4 6h5"/><path d="M12 2l6 8h-3l4 6h-5"/></svg>',
    personas: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1"/><path d="M15 20v-.5a3.5 3.5 0 0 1 3.5-3.5h0a3.5 3.5 0 0 1 3.5 3.5V20"/></svg>',
    foco: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 2z"/></svg>',
    manos: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" stroke-width="2"><path d="m11 17 2 2 4-4"/><path d="M1 12s3-6 8-6c3 0 4 2 7 2s5-2 5-2"/><path d="M1 12s3 6 8 6"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8V21z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M14 3c.3 2 1.8 3.5 4 3.8v2.7c-1.4 0-2.8-.4-4-1.2v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.8a2.5 2.5 0 1 0 1.7 2.4V3z"/></svg>'
  };

  const REDES_META = {
    facebook: { icono: "facebook", color: "facebook" },
    tiktok: { icono: "tiktok", color: "tiktok" }
  };

  const iconOr = (key, fallback) => ICONS[key] || fallback || ICONS.foco;

  const screens = document.querySelectorAll(".screen");
  const navBtns = document.querySelectorAll(".nav-btn");
  const gotoBtns = document.querySelectorAll("[data-goto]");
  const TABS = Array.from(screens, (s) => s.dataset.tab);

  function goToTab(tabName, updateHash) {
    if (!TABS.includes(tabName)) tabName = "inicio";
    screens.forEach((s) => s.classList.toggle("active", s.dataset.tab === tabName));
    navBtns.forEach((b) => b.classList.toggle("active", b.dataset.goto === tabName));
    document.getElementById("main-content").scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    window.scrollTo(0, 0);
    if (updateHash !== false && window.location.hash !== "#" + tabName) {
      window.location.hash = tabName;
    }
  }

  gotoBtns.forEach((btn) => {
    btn.addEventListener("click", () => goToTab(btn.dataset.goto));
  });

  window.addEventListener("hashchange", () => {
    goToTab(window.location.hash.replace("#", ""), false);
  });

  function renderMusic() {
    const card = document.getElementById("music-card");
    const audio = document.getElementById("music-audio");
    const titulo = document.getElementById("music-titulo");

    if (DATA.campaignMusic && DATA.campaignMusic.src) {
      audio.src = DATA.campaignMusic.src;
      titulo.textContent = DATA.campaignMusic.titulo || "Música Oficial";
      card.hidden = false;
    } else {
      card.hidden = true;
    }
  }

  function renderValues() {
    const el = document.getElementById("values-strip");
    el.innerHTML = DATA.valores.map((v) => `
      <div class="value-item">
        <span class="icon-round">${iconOr(v.icono)}</span>
        <span class="label">${v.texto}</span>
      </div>
    `).join("");
  }

  function renderTrayectoria() {
    const el = document.getElementById("trayectoria-list");
    el.innerHTML = DATA.trayectoria.map((t) => `
      <div class="timeline-item">
        <div class="timeline-icon">${iconOr(t.icono)}</div>
        <div>
          <p class="timeline-title">${t.titulo}</p>
          <p class="timeline-desc">${t.descripcion}</p>
          ${t.fuente ? `<span class="timeline-source">${t.fuente}</span>` : ""}
        </div>
      </div>
    `).join("");
  }

  function renderPropuestas() {
    const el = document.getElementById("propuestas-list");
    el.innerHTML = DATA.propuestas.map((p) => {
      const subtitulo = p.titulo || (p.programas && p.programas.length ? p.programas.join(" · ") : "");
      return `
        <div class="proposal-card">
          <div class="proposal-icon">${iconOr(p.icono)}</div>
          <div>
            <p class="proposal-title">${p.categoria}</p>
            ${subtitulo ? `<p class="proposal-programs">${subtitulo}</p>` : ""}
            <p class="proposal-desc">${p.resumen}</p>
            ${p.puntos && p.puntos.length ? `
              <ul class="proposal-points">
                ${p.puntos.map((pt) => `<li>${pt}</li>`).join("")}
              </ul>
            ` : ""}
            ${p.etiquetas && p.etiquetas.length ? `
              <div class="proposal-tags">
                ${p.etiquetas.map((t) => `<span class="proposal-tag">${t}</span>`).join("")}
              </div>
            ` : ""}
          </div>
        </div>
      `;
    }).join("");

    const planLink = document.getElementById("plan-gobierno-link");
    if (DATA.planGobiernoUrl) {
      planLink.href = DATA.planGobiernoUrl;
      planLink.hidden = false;
    } else {
      planLink.hidden = true;
    }
  }

  function renderRecorridosZona() {
    const data = DATA.recorridosZona;

    const introEl = document.getElementById("zona-intro");
    if (introEl) introEl.textContent = data.intro;

    const notaEl = document.getElementById("zona-nota-ubicacion");
    if (notaEl) notaEl.textContent = data.notaUbicacion;

    const wrap = document.getElementById("zona-select-wrap");
    const hasZonas = !!(data.zonas && data.zonas.length);
    wrap.hidden = !hasZonas;
    if (!hasZonas) return;

    const select = document.getElementById("zona-select");
    data.zonas.forEach((z) => {
      const opt = document.createElement("option");
      opt.value = z.id;
      opt.textContent = z.nombre;
      select.appendChild(opt);
    });

    const feedback = document.getElementById("zona-feedback");
    document.getElementById("zona-ver-btn").addEventListener("click", () => {
      const selected = data.zonas.find((z) => z.id === select.value);
      feedback.hidden = false;
      feedback.textContent = selected
        ? `Mostrando caminatas realizadas y próximas visitas para "${selected.nombre}".`
        : "Selecciona una zona de la lista para continuar.";
    });
  }

  function renderCaminatas() {
    const section = document.getElementById("caminatas-section");
    const items = DATA.actividades.caminatasRealizadas;
    const hasItems = !!(items && items.length);
    section.hidden = !hasItems;
    if (!hasItems) return;

    document.getElementById("caminatas-list").innerHTML = items.map((c) => `
      <div class="agenda-item is-realizado">
        <div>
          <span class="agenda-badge">${c.zona || "Realizado"}</span>
          <p class="agenda-title">${c.titulo}</p>
          <p class="agenda-meta">${[c.fecha].filter(Boolean).join(" · ")}</p>
          ${c.enlace ? `<a href="${c.enlace}" class="link-small" target="_blank" rel="noopener">Ver video/enlace →</a>` : ""}
        </div>
      </div>
    `).join("");
  }

  function renderProximas() {
    const section = document.getElementById("proximas-section");
    const items = DATA.actividades.proximas;
    const hasItems = !!(items && items.length);
    section.hidden = !hasItems;
    if (!hasItems) return;

    document.getElementById("proximas-list").innerHTML = items.map((a) => `
      <div class="agenda-item">
        <div>
          <span class="agenda-badge">${a.esCierre ? "Cierre de Campaña" : "Próximo"}</span>
          <p class="agenda-title">${a.titulo}</p>
          <p class="agenda-meta">${[a.fecha, a.lugar].filter(Boolean).join(" · ")}</p>
        </div>
      </div>
    `).join("");
  }

  function renderEventosEmptyState() {
    const hasZonas = !!(DATA.recorridosZona.zonas && DATA.recorridosZona.zonas.length);
    const hasCaminatas = !!(DATA.actividades.caminatasRealizadas && DATA.actividades.caminatasRealizadas.length);
    const hasProximas = !!(DATA.actividades.proximas && DATA.actividades.proximas.length);
    const hasAny = hasZonas || hasCaminatas || hasProximas;

    const empty = document.getElementById("recorridos-empty-state");
    empty.hidden = hasAny;
    if (hasAny) return;

    const tiktokUrl = DATA.redes.tiktok && DATA.redes.tiktok.url;
    const cta = document.getElementById("recorridos-empty-tiktok");
    if (tiktokUrl) {
      cta.href = tiktokUrl;
      cta.hidden = false;
    } else {
      cta.hidden = true;
    }
  }

  function renderElectoral() {
    document.getElementById("electoral-texto").textContent = DATA.electoral.texto;
    document.getElementById("link-jne").href = DATA.electoral.linkJNE;
    document.getElementById("link-onpe").href = DATA.electoral.linkONPE;
  }

  function renderRedesInto(elId) {
    const el = document.getElementById(elId);
    if (!el) return;

    const activas = Object.keys(REDES_META)
      .filter((key) => DATA.redes[key] && DATA.redes[key].url)
      .map((key) => {
        const meta = REDES_META[key];
        const red = DATA.redes[key];
        return `
          <a class="social-card ${meta.color}" href="${red.url}" target="_blank" rel="noopener noreferrer">
            <span class="icon-round">${iconOr(meta.icono)}</span>
            <span class="handle">${red.nombre}</span>
          </a>
        `;
      });

    el.innerHTML = activas.length
      ? activas.join("")
      : `<p class="empty-state">Enlaces a redes disponibles próximamente.</p>`;

    el.classList.toggle("social-grid-single", activas.length === 1);
  }

  function renderRedes() {
    renderRedesInto("home-social-grid");
    renderRedesInto("social-grid");
  }

  function renderFooter() {
    document.getElementById("footer-slogan").textContent = `"${DATA.candidata.slogan}"`;
    document.getElementById("footer-linea1").textContent = DATA.footer.linea1;
    document.getElementById("footer-copy").textContent = DATA.footer.copyright;
  }

  function init() {
    renderMusic();
    renderValues();
    renderTrayectoria();
    renderPropuestas();
    renderRecorridosZona();
    renderCaminatas();
    renderProximas();
    renderEventosEmptyState();
    renderElectoral();
    renderRedes();
    renderFooter();

    const initialTab = window.location.hash.replace("#", "") || "inicio";
    goToTab(initialTab, false);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
