// Table of contents generator
function generateTOC() {
  const headings = document.querySelectorAll("h2, h3");
  if (headings.length < 3) return;
  const toc = document.createElement("nav");
  toc.className = "toc";
  toc.style.cssText = "position:fixed;top:200px;left:20px;font-size:0.8rem;max-width:200px;";
  const list = document.createElement("ul");
  list.style.cssText = "list-style:none;padding:0;";
  headings.forEach((h, i) => {
    if (!h.id) h.id = "section-" + i;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    a.style.cssText = "color:#666;text-decoration:none;display:block;padding:4px 0;";
    li.appendChild(a);
    list.appendChild(li);
  });
  toc.appendChild(list);
  document.body.appendChild(toc);
}
