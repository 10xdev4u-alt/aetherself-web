// Accordion for FAQ
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item summary").forEach(summary => {
    summary.addEventListener("click", () => {
      const item = summary.parentElement;
      const isOpen = item.hasAttribute("open");
      document.querySelectorAll(".faq-item[open]").forEach(i => i.removeAttribute("open"));
      if (!isOpen) item.setAttribute("open", "");
    });
  });
});
