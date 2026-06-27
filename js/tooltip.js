// Tooltip helper
function addTooltip(el, text) {
  const tip = document.createElement("div");
  tip.textContent = text;
  tip.style.cssText = "position:absolute;bottom:100%;left:50%;transform:translateX(-50%);padding:4px 8px;background:#333;color:#fff;font-size:0.75rem;border-radius:4px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 0.2s;";
  el.style.position = "relative";
  el.appendChild(tip);
  el.addEventListener("mouseenter", () => tip.style.opacity = "1");
  el.addEventListener("mouseleave", () => tip.style.opacity = "0");
}
