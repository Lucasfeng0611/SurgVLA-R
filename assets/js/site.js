const progress = document.querySelector("#readingProgress");
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const revealItems = document.querySelectorAll(".reveal");

function updateReadingProgress() {
  const root = document.documentElement;
  const scrollable = root.scrollHeight - root.clientHeight;
  const ratio = scrollable > 0 ? root.scrollTop / scrollable : 0;
  if (progress) progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

revealItems.forEach((item) => revealObserver.observe(item));
window.addEventListener("scroll", updateReadingProgress, { passive: true });
updateReadingProgress();
