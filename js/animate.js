// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".feature-card, .step, .stat-card, .testimonial").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s, transform 0.6s";
    observer.observe(el);
  });
});
