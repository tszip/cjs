import { createRequire } from 'module';

const builtinRequire = globalThis['require'];
const useRequire =
  typeof globalThis['require'] === 'undefined'
    ? createRequire(import.meta.url)
    : builtinRequire;

export { useRequire as require };