// Dropdown menu helper
function createDropdown(trigger, items) {
  const menu = document.createElement("div");
  menu.style.cssText = "position:absolute;top:100%;right:0;background:#0d0d0d;border:1px solid #1e1e1e;border-radius:8px;padding:8px;min-width:160px;display:none;z-index:100;";
  items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.label;
    btn.style.cssText = "display:block;width:100%;padding:8px 12px;background:none;border:none;color:#e0e0e0;text-align:left;cursor:pointer;border-radius:4px;";
    btn.addEventListener("click", () => { item.action(); menu.style.display = "none"; });
    btn.addEventListener("mouseover", () => btn.style.background = "#1e1e1e");
    btn.addEventListener("mouseout", () => btn.style.background = "none");
    menu.appendChild(btn);
  });
  trigger.parentElement.style.position = "relative";
  trigger.parentElement.appendChild(menu);
  trigger.addEventListener("click", () => menu.style.display = menu.style.display === "none" ? "block" : "none");
  document.addEventListener("click", e => { if (!trigger.contains(e.target) && !menu.contains(e.target)) menu.style.display = "none"; });
}
