if (typeof globalThis['require'] === 'undefined') {
  await (async () => {
    const { default: module } = await import('module');
    globalThis['require'] = module.createRequire(import.meta.url);
  });
}