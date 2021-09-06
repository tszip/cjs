import { createRequire } from 'module';

let requireToUse;

if (typeof require === 'undefined') {
  requireToUse = createRequire(import.meta.url);
} else {
  requireToUse = require;
}

export { requireToUse as require };