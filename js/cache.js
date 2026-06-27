// Simple in-memory cache with TTL
class Cache {
  constructor(ttlMs = 60000) { this.ttl = ttlMs; this.store = new Map(); }
  get(key) { const e = this.store.get(key); if (!e || Date.now() > e.exp) { this.store.delete(key); return null; } return e.val; }
  set(key, val) { this.store.set(key, { val, exp: Date.now() + this.ttl }); }
  clear() { this.store.clear(); }
}
