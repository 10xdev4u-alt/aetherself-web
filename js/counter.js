// Animated counter for stats
function animateCounter(el, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(start + (target - start) * progress);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stat-number").forEach(el => {
    const text = el.textContent;
    if (text === "∞" || text === "100%" || text === "MIT" || text === "0") return;
    const num = parseInt(text);
    if (!isNaN(num)) animateCounter(el, num);
  });
});
