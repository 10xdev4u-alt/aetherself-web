// AetherSelf Landing Page — minimal JS
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔮 AetherSelf loaded");
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
    });
  });
});
