// Mobile navigation toggle
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const btn = document.createElement("button");
  btn.textContent = "☰";
  btn.style.cssText = "display:none;background:none;border:1px solid #333;color:#888;padding:6px 10px;border-radius:6px;cursor:pointer;font-size:1rem;";
  document.querySelector("nav .container").appendChild(btn);
  const mq = window.matchMedia("(max-width: 768px)");
  function check(e) { btn.style.display = e.matches ? "block" : "none"; }
  mq.addEventListener("change", check);
  check(mq);
  btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "60px";
    nav.style.right = "20px";
    nav.style.background = "#0d0d0d";
    nav.style.padding = "16px";
    nav.style.borderRadius = "8px";
    nav.style.border = "1px solid #1e1e1e";
  });
});
