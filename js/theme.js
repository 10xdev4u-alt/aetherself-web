// Theme toggle
const toggle = document.createElement("button");
toggle.textContent = "🌙";
toggle.style.cssText = "position:fixed;top:80px;right:20px;padding:8px 12px;border-radius:8px;background:#1a1a1a;color:#fff;border:1px solid #333;cursor:pointer;z-index:999;";
document.body.appendChild(toggle);
let dark = true;
toggle.addEventListener("click", () => {
  dark = !dark;
  document.body.style.background = dark ? "#050505" : "#ffffff";
  document.body.style.color = dark ? "#e0e0e0" : "#111111";
  toggle.textContent = dark ? "🌙" : "☀️";
});
