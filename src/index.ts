if (typeof globalThis.require === 'undefined') {
  const { default: module } = await import('module');
  globalThis.require = module.createRequire(import.meta.url);
}