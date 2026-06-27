// Toast notification
function showToast(message, duration = 3000) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);padding:12px 24px;background:#0066ff;color:#fff;border-radius:8px;font-size:0.9rem;z-index:1000;opacity:0;transition:opacity 0.3s;";
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.style.opacity = "1");
  setTimeout(() => { toast.style.opacity = "0"; setTimeout(() => toast.remove(), 300); }, duration);
}
