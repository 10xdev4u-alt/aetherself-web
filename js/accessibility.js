// Accessibility helpers
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img:not([alt])").forEach(img => img.alt = "");
  document.querySelectorAll("a:not([aria-label])").forEach(a => {
    if (!a.textContent.trim()) a.setAttribute("aria-label", a.href);
  });
});
