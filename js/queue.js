// Simple promise queue
class PromiseQueue {
  constructor(concurrency = 1) { this.concurrency = concurrency; this.running = 0; this.queue = []; }
  async add(fn) {
    if (this.running >= this.concurrency) await new Promise(r => this.queue.push(r));
    this.running++;
    try { return await fn(); } finally { this.running--; this.queue.shift()?.(); }
  }
}
