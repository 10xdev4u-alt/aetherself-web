// Persistent dark mode
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("aetherself-theme");
  if (saved === "light") {
    document.body.classList.add("light-theme");
  }
});
