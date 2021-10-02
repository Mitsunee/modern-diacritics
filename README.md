# Modern Diacritics

A modern way to remove diacritics from strings. Particularly useful for writings search filters.

- Modern fork of [**@andrewrk**](https://github.com/andrewrk/)’s [node-diacritics](https://github.com/andrewrk/node-diacritics).
- **Tree-shakable** ESM module

```js
import { removeDiacritics } from "modern-diacritics";

removeDiacritics("Iлｔèｒｎåｔïｏｎɑｌíƶａｔï߀ԉ"); // "Internationalizati0n"
```

## Installation

```shell
npm install modern-diacritics
# or
yarn add modern-diacritics
```

## API

WIP - breaking changes may happen at any time!

## Special Thanks

- [**@andrewrk**](https://github.com/andrewrk/) - The original author of node-diacritics
