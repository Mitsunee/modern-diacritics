# Changelog

## 2.3.0

- Refactored project as TypeScript

## 2.2.1

- Fixed missing dev dependency rollup

## 2.2.0

- Normalize dashes to ASCII hyphen-minus #4
- Upgraded dependencies
- migrated CI to nano-staged and uvu
- added engines field (should support node.js 14, 16 and 17. node.js 12 was never supported and failed testing. This should not be a breaking change)

## v2.1.0

- Added `forceSingleSpace` option to `normalizeSymbols`, `latinize` and `slugify`
- Added `replaceWhiteSpace` option to `normalizeSymbols` and `latinize`
- Rewrote types to use merged interfaces for `latinize`

## v2.0.0

- Added dual-publishing
- New API:
  - sanitize => latinize:
    - diacritic option removed
    - new trim option (**off** by default!)
  - new separate function `removeDiacritics` for simple removal of diacritics (with lowerCase option, **off** by default)
  - new separate function `normalizeSymbols` for handling only symbols (with trim option, **on** by default)
- added corepack config and updated publish configs

## v1.2.1

- Added docs for previous release

## v1.2.0

- Added lowerCase option to sanitize
- Refactored slugify to use new lowerCase option

## v1.1.0

- Added options to `sanitize`
- rewrote testing for `sanitize`

## v1.0.0

- Initial Release
