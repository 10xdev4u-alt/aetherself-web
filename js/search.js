// Client-side search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.createElement("input");
  searchInput.placeholder = "Search...";
  searchInput.style.cssText = "position:fixed;top:80px;left:20px;padding:8px 16px;border-radius:8px;border:1px solid #333;background:#111;color:#fff;font-size:0.85rem;z-index:999;display:none;";
  document.body.appendChild(searchInput);
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      searchInput.style.display = searchInput.style.display === "none" ? "block" : "none";
      if (searchInput.style.display === "block") searchInput.focus();
    }
    if (e.key === "Escape") searchInput.style.display = "none";
  });
});
