// Reading progress bar
document.addEventListener("DOMContentLoaded", () => {
  const bar = document.createElement("div");
  bar.style.cssText = "position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#0066ff,#00ff88);z-index:1000;transition:width 0.1s;";
  document.body.appendChild(bar);
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + "%" : "0%";
  });
});
