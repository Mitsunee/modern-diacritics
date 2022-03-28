# Modern Diacritics

A modern way to latinize/ascii-fold strings and normalize symbols. Particularly useful for writings search filters.

- Modern fork of [**@andrewrk**](https://github.com/andrewrk/)'s [node-diacritics](https://github.com/andrewrk/node-diacritics) with many new features
- **Dual-published** as ESM and CJS modules
- Normalizes similar symbols like quotation marks
- Diacritic Removal and Symbol Normalization also available as separate functions
- Provides **slugify** function with built-in latinization!

```js
latinize("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ");
// => "Internationalizati0n"
```

## Installation

```shell
npm install modern-diacritics
# or
yarn add modern-diacritics
```

## Usage

### latinize

The supplied is latinized with normalized symbols.

```js
import { latinize } from "modern-diacritics";

latinize("Hêƚƚó, ’worƚd‘!"); // => "Hello, 'world'!"
```

`latinize` uses `removeDiacritics` and `normalizeSymbols` internally. They are available separatly for applications where you may not wants to fully latinize strings. Options are passed along internally where applicable.

**Options**:

```js
// Symbols option: on by default, disable to preserve symbols
latinize("Hêƚƚó, ’worƚd‘!", { symbols: false });
// => "Hello, ’world‘!"

// Lowercase option: off by default, enable to transform to all lowercase characters
latinize("Hêƚƚó, ’worƚd‘!", { lowerCase: true });
// => "hello, 'world'!"

// Trim option: off by default, enable to trim whitespace at start and end of string
latinize(" Hêƚƚó, ’worƚd‘!  ", { trim: true });
// => "Hello, 'world'!"
```

### normalizeSymbols

Normalizes symbols in the supplied string and trims whitespace at the start and end of the string (can be disabled, see Options).

```js
import { normalizeSymbols } from "modern-diacritics";

normalizeSymbols(" “Hauptstraße” ");
// => '"Hauptstraße"'
```

**Options**:

```js
// Trim option: on by default, disable to preserve all whitespace characters as spaces
normalizeSymbols(" “Hauptstraße” ", { trim: false });
// => ' "Hauptstraße" '

// Force Single Space option: off by default, enable to replace consecutive whitespaces with a single whitespace
normalizeSymbols(" “Hauptstraße   42” ", { forceSingleSpace: true });
// => '"Hauptstraße 42"'

// Replace Whitespace option: off by default, set any string to be used as replacement for whitespaces
normalizeSymbols(" “Hauptstraße   42” ", { replaceWhiteSpace: "_" });
// => '"Hauptstraße_42"'
normalizeSymbols(" “Hauptstraße   42” ", {
  replaceWhiteSpace: "_",
  trim: false
});
// => '_"Hauptstraße_42"_'
```

### removeDiacritics

Provies simplified diacritic removal, which does not further latinize strings or normalize symbols.

```js
import { removeDiacritics } from "modern-diacritics";

removeDiacritics("Crêpes");
// => "Crepes"
```

**Options**:

```js
// Lowercase option: off by default, enable to transform to all lowercase characters
removeDiacritics("Crêpes", { lowerCase: true });
// => "crepes"
```

### slugify

The supplied string is latinized and then turned into a slug:

```js
import { slugify } from "modern-diacritics";

slugify("HêＬＬó, worＬd!"); // "hello-world"
```

Whitespace as well as underscores and parenthesis are replaced with dashes. All other symbols will be removed! `slugify` uses the `lowerCase` and `replaceWhiteSpace` options of `normalizeSymbols`. `trim` is not used and spaces will be transformed to dashes.

**Options**:

`slugify` supports `normalizeSymbols`'s `trim` and `forceSingleSpace` options. For backwards compatibility these two options use `false` as their default value.

## Special Thanks

- [**@andrewrk**](https://github.com/andrewrk/) - The original author of node-diacritics
- [**@marcelo-ribeiro**](https://github.com/marcelo-ribeiro) - For his gist ["javascript-remove-accents.js"](https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77)

## Contributors

- [Paso](https://github.com/Paso)

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## Planned features

- Custom replacer lists/maps
- Adding more symbols to normalize (feel free to submit suggestions)
