import { createRequire } from 'module';

let requireToUse;

if (typeof globalThis['require'] === 'undefined') {
  requireToUse = createRequire(import.meta.url);
} else {
  requireToUse = globalThis['require'];
}

export { requireToUse as require };