/**
 * @fileoverview
 * This module shims require(), __dirname, and __filename.
 * 
 * @see https://nodejs.org/api/globals.html
 */
import { dirname } from 'path';
import { fileURLToPath } from 'url';

/**
 * Shim entry-point related paths.
 */
if (typeof globalThis.__filename === 'undefined') {
  globalThis.__filename = fileURLToPath(import.meta.url);
}
if (typeof globalThis.__dirname === 'undefined') {
  globalThis.__dirname = dirname(globalThis.__filename);
}
/**
 * Shim require if needed.
 */
if (typeof globalThis.require === 'undefined') {
  const { default: module } = await import('module');
  globalThis.require = module.createRequire(import.meta.url);
}
