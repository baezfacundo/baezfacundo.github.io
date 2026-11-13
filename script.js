"use strict";

const areas = {
  cloud: { number: "01 / CLOUD", descriptionKey: "cloudDescription" },
  engineering: { number: "02 / ENGINEERING", descriptionKey: "engineeringDescription" },
  leadership: { number: "03 / LEADERSHIP", descriptionKey: "leadershipDescription" },
  security: { number: "04 / DEVSECOPS", descriptionKey: "securityDescription" }
};

const nodes = document.querySelectorAll(".diagram-node");
nodes.forEach((node) => {
  node.addEventListener("click", () => {
    const area = areas[node.dataset.area];
    nodes.forEach((item) => {
      const selected = item === node;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("diagram-number").textContent = area.number;
    const description = document.getElementById("diagram-description");
    description.dataset.i18n = area.descriptionKey;
    description.textContent = translations[area.descriptionKey][currentLanguage];
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Content stays visible when JavaScript or IntersectionObserver is unavailable.
if ("IntersectionObserver" in window) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".about-layout, .section-heading, .expertise-card, .background-layout, .certification-card, .contact-panel").forEach((element) => {
      element.classList.add("reveal-ready");
      revealObserver.observe(element);
    });
  }

  const navLinks = document.querySelectorAll("nav a");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      }
    });
  }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main > section").forEach((section) => sectionObserver.observe(section));
}
