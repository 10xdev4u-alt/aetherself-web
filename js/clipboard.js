// Global clipboard helper
window.copyToClipboard = async function(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); return true; }
};
