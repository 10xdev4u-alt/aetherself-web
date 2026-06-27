// Lazy load images
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) { img.src = img.dataset.src; img.removeAttribute("data-src"); }
        observer.unobserve(img);
      }
    });
  });
  document.querySelectorAll("img[data-src]").forEach(img => observer.observe(img));
});
