let useRequire = globalThis['require'];

if (typeof useRequire === 'undefined') {
  await (async () => {
    const { default: module } = await import('module');
    useRequire = module.createRequire(import.meta.url);
  });
} 

export { useRequire as require };