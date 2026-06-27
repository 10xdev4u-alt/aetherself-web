// Debounce and throttle utilities
function debounce(fn, ms) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }
function throttle(fn, ms) { let last = 0; return (...args) => { if (Date.now() - last >= ms) { last = Date.now(); fn(...args); } }; }
