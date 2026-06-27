// Performance monitoring
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    const timing = performance.getEntriesByType("navigation")[0];
    if (timing) console.log("Page load:", Math.round(timing.loadEventEnd - timing.startTime) + "ms");
  });
});
