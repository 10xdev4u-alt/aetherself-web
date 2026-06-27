// Typewriter effect for hero title
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero h1");
  if (!hero) return;
  const text = hero.innerHTML;
  hero.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      hero.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
});
