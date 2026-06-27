// Simple observable pattern
function createObservable() {
  const listeners = new Set();
  return {
    subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    emit(data) { listeners.forEach(fn => fn(data)); },
    clear() { listeners.clear(); },
  };
}
