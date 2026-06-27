// Back to top button
const btn = document.createElement("button");
btn.textContent = "↑";
btn.className = "back-to-top";
btn.style.cssText = "position:fixed;bottom:20px;right:20px;display:none;padding:12px 16px;border-radius:50%;background:#0066ff;color:#fff;border:none;cursor:pointer;font-size:1.2rem;z-index:999;";
document.body.appendChild(btn);
window.addEventListener("scroll", () => { btn.style.display = window.scrollY > 300 ? "block" : "none"; });
btn.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });
