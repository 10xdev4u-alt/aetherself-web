// Modal helper
function openModal(title, content) {
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000;";
  overlay.innerHTML = `<div style="background:#0d0d0d;border:1px solid #1e1e1e;border-radius:12px;padding:32px;max-width:500px;width:90%;"><h2 style="margin-bottom:16px;">${title}</h2><p style="color:#888;">${content}</p><button onclick="this.closest('div[style]').parentElement.remove()" style="margin-top:20px;padding:8px 24px;border-radius:8px;border:none;background:#0066ff;color:#fff;cursor:pointer;">Close</button></div>`;
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}
