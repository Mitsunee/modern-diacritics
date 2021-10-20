# Changelog

## v2.0.0

- Added dual-publishing
- New API:
  - sanitize => latinize:
    - diacritic option removed
    - new trim option (**on** by default!)
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
