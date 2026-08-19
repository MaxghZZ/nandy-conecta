/**
 * main.js
 * -----------------------------------------------------------------------
 * Lógica de la landing: navegación por tabs + render de contenido a
 * partir de DATA (data.js). No contiene contenido "hardcodeado": todo
 * texto/lista sale de DATA para que actualizar la web sea editar
 * data.js, no este archivo.
 * -----------------------------------------------------------------------
 */

(function () {
  "use strict";

  /* ---------------- ICONOS (line icons en SVG, como string) ---------------- */
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
    instagram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.8V21z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M14 3c.3 2 1.8 3.5 4 3.8v2.7c-1.4 0-2.8-.4-4-1.2v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.8a2.5 2.5 0 1 0 1.7 2.4V3z"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M4 4l7 8.5L4.3 20h2l6-6.6L17 20h3l-7.3-8.9L19.5 4h-2l-5.6 6.1L7 4z"/></svg>'
  };

  const iconOr = (key, fallback) => ICONS[key] || fallback || ICONS.foco;

  /* ---------------- TABS ---------------- */
  const screens = document.querySelectorAll(".screen");
  const navBtns = document.querySelectorAll(".nav-btn");
  const gotoBtns = document.querySelectorAll("[data-goto]");

  function goToTab(tabName) {
    screens.forEach((s) => s.classList.toggle("active", s.dataset.tab === tabName));
    navBtns.forEach((b) => b.classList.toggle("active", b.dataset.goto === tabName));
    document.getElementById("main-content").scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    window.scrollTo(0, 0);
  }

  gotoBtns.forEach((btn) => {
    btn.addEventListener("click", () => goToTab(btn.dataset.goto));
  });

  /* ---------------- RENDER: HEADER / HERO / MITIN ---------------- */
  function renderHeaderAndHero() {
    const wa = DATA.candidata.whatsapp;
    document.getElementById("header-whatsapp").href = wa;
    document.getElementById("hero-whatsapp").href = wa;

    document.getElementById("mitin-titulo").textContent = DATA.proximoMitin.titulo;
    document.getElementById("mitin-lugar").textContent = DATA.proximoMitin.lugar;
    document.getElementById("mitin-fecha").textContent = `${DATA.proximoMitin.fecha}, ${DATA.proximoMitin.hora}`;
    document.getElementById("mitin-link").href = DATA.proximoMitin.link;
  }

  /* ---------------- RENDER: NANDY TAB ---------------- */
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

  /* ---------------- RENDER: PROPUESTAS TAB ---------------- */
  function renderPropuestas() {
    const el = document.getElementById("propuestas-list");
    el.innerHTML = DATA.propuestas.map((p) => `
      <div class="proposal-card">
        <div class="proposal-icon">${iconOr(p.icono)}</div>
        <div>
          <p class="proposal-title">${p.titulo}</p>
          <p class="proposal-desc">${p.descripcion}</p>
        </div>
      </div>
    `).join("");

    document.getElementById("plan-gobierno-link").href = DATA.planGobiernoUrl;
  }

  /* ---------------- RENDER: EVENTOS TAB ---------------- */
  function renderZonas() {
    const select = document.getElementById("zona-select");
    DATA.zonas.forEach((z) => {
      const opt = document.createElement("option");
      opt.value = z.id;
      opt.textContent = z.nombre;
      select.appendChild(opt);
    });

    const feedback = document.getElementById("zona-feedback");
    document.getElementById("zona-ver-btn").addEventListener("click", () => {
      const selected = DATA.zonas.find((z) => z.id === select.value);
      feedback.hidden = false;
      feedback.textContent = selected
        ? `Mostrando propuestas y asambleas cerca de "${selected.nombre}".`
        : "Selecciona una zona de la lista para continuar.";
    });

    document.getElementById("zona-whatsapp-link").href = DATA.candidata.whatsappZona;
  }

  function renderAgenda() {
    const el = document.getElementById("agenda-list");
    el.innerHTML = DATA.agenda.map((a) => {
      const isDone = a.estado === "realizado";
      return `
        <div class="agenda-item ${isDone ? "is-realizado" : ""}">
          <div class="agenda-date">
            <span class="d">${a.dia}</span>
            <span class="m">${a.mes}</span>
          </div>
          <div>
            <span class="agenda-badge">${isDone ? "Realizado" : "Próximo"}</span>
            <p class="agenda-title">${a.titulo}</p>
            <p class="agenda-meta">${isDone ? "✓ " : ""}${[a.hora, a.lugar].filter(Boolean).join(" · ")}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  /* ---------------- RENDER: REDES TAB ---------------- */
  function renderElectoral() {
    document.getElementById("electoral-texto").textContent = DATA.electoral.texto;
    document.getElementById("link-jne").href = DATA.electoral.linkJNE;
    document.getElementById("link-onpe").href = DATA.electoral.linkONPE;
  }

  function renderRedes() {
    const el = document.getElementById("social-grid");
    el.innerHTML = DATA.redes.map((r) => `
      <a class="social-card ${r.color}" href="${r.url}" target="_blank" rel="noopener">
        <span class="icon-round">${iconOr(r.icono)}</span>
        <span class="handle">${r.usuario}</span>
      </a>
    `).join("");

    document.getElementById("voluntarios-link").href = DATA.candidata.whatsappVoluntarios;
  }

  function renderFooter() {
    document.getElementById("footer-slogan").textContent = `"${DATA.candidata.slogan}"`;
    document.getElementById("footer-linea1").textContent = DATA.footer.linea1;
    document.getElementById("footer-copy").textContent = DATA.footer.copyright;
  }

  /* ---------------- INIT ---------------- */
  function init() {
    renderHeaderAndHero();
    renderValues();
    renderTrayectoria();
    renderPropuestas();
    renderZonas();
    renderAgenda();
    renderElectoral();
    renderRedes();
    renderFooter();
    goToTab("inicio");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
