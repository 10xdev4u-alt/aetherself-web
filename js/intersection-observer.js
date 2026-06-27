// Intersection observer polyfill helper
function observeElements(selector, callback, options = {}) {
  const observer = new IntersectionObserver(callback, { threshold: 0.1, ...options });
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
  return observer;
}
