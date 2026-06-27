// Keyboard shortcuts
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll("[data-closeable]").forEach(el => el.remove());
    }
    if (e.key === "t" && e.altKey) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
