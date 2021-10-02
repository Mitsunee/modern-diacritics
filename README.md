# Modern Diacritics

A modern way to remove diacritics from strings. Particularly useful for writings search filters.

- Modern fork of [**@andrewrk**](https://github.com/andrewrk/)’s [node-diacritics](https://github.com/andrewrk/node-diacritics).
- **Tree-shakable** ESM module
- Provides **slugify** function with built-in sanitizer!

```js
import { sanitize } from "modern-diacritics";

sanitize("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"); // "Internationalizati0n"
```

## Installation

```shell
npm install modern-diacritics
# or
yarn add modern-diacritics
```

## Usage

### sanitize

All diacritics in the supplied string are replaced:

```js
import { sanitize } from "modern-diacritics";

sanitize("HêＬＬó, worＬd!"); // "Hello, world!"
```

### slugify

The supplied string is sanitized and then turned into a slug:

```js
import { slugify } from "modern-diacritics";

slugify("HêＬＬó, worＬd!"); // "hello-world"
```

Whitespace as well as underscores and parenthesis are replaced with dashes. All other symbols will be removed!

## Special Thanks

- [**@andrewrk**](https://github.com/andrewrk/) - The original author of node-diacritics
- [**@marcelo-ribeiro**](https://github.com/marcelo-ribeiro) - For his gist ["javascript-remove-accents.js"](https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77)
