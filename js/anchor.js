// Smooth scroll to anchor on page load
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
  }
});
