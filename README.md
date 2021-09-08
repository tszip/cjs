# ESM Require Shim

This script ensures that there is a valid `require` identifier in the global
context so that an ES module can use it if needed and, more importantly, import
dependencies which include references to `require` without throwing.

It only checks if `globalThis.require` is `undefined`, and if it is, it sets it
to `createRequire(import.meta.url)`.