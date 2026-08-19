/* =========================================================================
   app.js — site engine (no external dependencies)
   - Renders blog cards from window.POSTS
   - Hash routing for individual posts (#/post/<slug>)
   - A small, self-contained Markdown -> HTML renderer
   - Scroll-reveal animations + mobile nav
   You normally never need to edit this file. Edit posts.js to manage content.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Tiny Markdown renderer ---------------------------------- */
  function escapeHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function inline(text) {
    // text is already HTML-escaped here
    return text
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function renderMarkdown(md) {
    const lines = md.replace(/\r\n/g, "\n").replace(/\t/g, "  ").split("\n");
    const out = [];
    let i = 0;

    while (i < lines.length) {
      let line = lines[i];

      // fenced code block
      if (/^\s*```/.test(line)) {
        const buf = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++; // skip closing fence
        out.push("<pre><code>" + escapeHtml(buf.join("\n")) + "</code></pre>");
        continue;
      }

      // blank line
      if (/^\s*$/.test(line)) { i++; continue; }

      // heading
      const h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        const level = h[1].length <= 2 ? 2 : 3;
        out.push("<h" + level + ">" + inline(escapeHtml(h[2].trim())) + "</h" + level + ">");
        i++; continue;
      }

      // horizontal rule
      if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { out.push("<hr>"); i++; continue; }

      // blockquote
      if (/^\s*>/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          buf.push(lines[i].replace(/^\s*>\s?/, "")); i++;
        }
        out.push("<blockquote><p>" + inline(escapeHtml(buf.join(" "))) + "</p></blockquote>");
        continue;
      }

      // unordered list
      if (/^\s*[-*]\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          buf.push("<li>" + inline(escapeHtml(lines[i].replace(/^\s*[-*]\s+/, ""))) + "</li>");
          i++;
        }
        out.push("<ul>" + buf.join("") + "</ul>");
        continue;
      }

      // ordered list
      if (/^\s*\d+\.\s+/.test(line)) {
        const buf = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          buf.push("<li>" + inline(escapeHtml(lines[i].replace(/^\s*\d+\.\s+/, ""))) + "</li>");
          i++;
        }
        out.push("<ol>" + buf.join("") + "</ol>");
        continue;
      }

      // paragraph (gather consecutive plain lines)
      const para = [];
      while (
        i < lines.length &&
        !/^\s*$/.test(lines[i]) &&
        !/^\s*(#{1,6}\s|>|[-*]\s|\d+\.\s|```|-{3,}\s*$|\*{3,}\s*$)/.test(lines[i])
      ) {
        para.push(lines[i].trim()); i++;
      }
      out.push("<p>" + inline(escapeHtml(para.join(" "))) + "</p>");
    }

    return out.join("\n");
  }

  /* ---------- Blog cards ---------------------------------------------- */
  const posts = Array.isArray(window.POSTS) ? window.POSTS : [];
  const postBySlug = {};
  posts.forEach(function (p) { postBySlug[p.slug] = p; });

  function buildCards() {
    const list = document.getElementById("notes-list");
    if (!list) return;
    if (!posts.length) {
      list.innerHTML = '<p style="color:var(--muted)">No posts yet.</p>';
      return;
    }
    list.innerHTML = posts.map(function (p) {
      return (
        '<a class="note-card reveal" href="#/post/' + p.slug + '">' +
          '<div class="note-card__meta">' + escapeHtml(p.date || "") + "</div>" +
          "<div>" +
            '<h3 class="note-card__title">' + escapeHtml(p.title) + "</h3>" +
            '<p class="note-card__sum">' + escapeHtml(p.summary || "") + "</p>" +
            '<span class="note-card__more">Read note &rarr;</span>' +
          "</div>" +
        "</a>"
      );
    }).join("");
    observeReveals();
  }

  /* ---------- Router --------------------------------------------------- */
  function showPost(slug) {
    const p = postBySlug[slug];
    if (!p) { location.hash = "#blog"; return; }
    document.getElementById("reader-meta").textContent = p.date || "";
    document.getElementById("reader-title").textContent = p.title;
    document.getElementById("reader-body").innerHTML = renderMarkdown(p.content || "");
    document.title = p.title + " — Nathan Muschinske";
    document.body.classList.add("reading");
    window.scrollTo(0, 0);
  }

  function showHome(targetId) {
    document.body.classList.remove("reading");
    document.title = "Nathan Muschinske, MD, MPH — Health · Data · Technology";
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleHash() {
    const hash = location.hash || "";
    const m = hash.match(/^#\/post\/(.+)$/);
    if (m) {
      showPost(decodeURIComponent(m[1]));
    } else {
      // section anchor like #about, or empty
      const id = hash.replace(/^#/, "");
      const wasReading = document.body.classList.contains("reading");
      showHome(wasReading ? id : null);
    }
  }

  window.addEventListener("hashchange", handleHash);

  /* ---------- Scroll reveal ------------------------------------------- */
  let io;
  function observeReveals() {
    const els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Mobile nav ---------------------------------------------- */
  function initNav() {
    const toggle = document.querySelector(".nav__toggle");
    const links = document.getElementById("navlinks");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Email obfuscation ---------------------------------------- */
  function wireEmail() {
    const u = "nathan", d = "nathanmuschinske.com";
    const href = "mailto:" + u + "@" + d;
    const text = u + "@" + d;
    ["email-cta", "email-footer"].forEach(function (id) {
      const el = document.getElementById(id);
      if (!el) return;
      el.href = href;
      if (id === "email-footer") el.textContent = text;
    });
  }

  /* ---------- Init ----------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    const yr = document.getElementById("year");
    if (yr) yr.textContent = new Date().getFullYear();
    wireEmail();
    buildCards();
    observeReveals();
    initNav();
    handleHash();
  });
})();
