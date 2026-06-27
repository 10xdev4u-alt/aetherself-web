// DOM helper utilities
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const createElement = (tag, attrs = {}, children = []) => {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => k === "style" ? Object.assign(el.style, v) : el.setAttribute(k, v));
  children.forEach(c => el.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return el;
};
