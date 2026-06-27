// Copy code blocks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("code").forEach(block => {
    const btn = document.createElement("button");
    btn.textContent = "Copy";
    btn.style.cssText = "position:absolute;top:4px;right:4px;padding:2px 8px;font-size:0.7rem;background:#333;color:#fff;border:none;border-radius:4px;cursor:pointer;";
    block.parentElement.style.position = "relative";
    block.parentElement.appendChild(btn);
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(block.textContent);
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = "Copy", 2000);
    });
  });
});
