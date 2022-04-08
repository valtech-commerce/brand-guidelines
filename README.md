# @absolunet/brand-guidelines

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> Absolunet Brand Guidelines


## Install

```bash
$ npm install @absolunet/brand-guidelines
```


## Usage

via SCSS
```scss
@import '@absolunet/brand-guidelines/dist/styleguide';

a {
	color: absolunet-styleguide('color.primary.coral');
}
```

via JavaScript
```js
import { styleguide } from "@absolunet/brand-guidelines";

console.log(styleguide.color.primary.coral);  // #ff5252
```



## Files
The styleguide is also available as a JSON file under `dist/styleguide.json`

The logos are available under `ressources/logos`

The fonts are available under `ressources/fonts`



## Documentation

View [documentation](https://documentation.absolunet.com/brand-guidelines)






<br><br>

## License

MIT © [Absolunet](https://absolunet.com)

[npm-badge]:          https://img.shields.io/npm/v/@absolunet/brand-guidelines?style=flat-square
[dependencies-badge]: https://img.shields.io/david/absolunet/brand-guidelines?style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/absolunet/brand-guidelines/tests/production?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40absolunet%2Fbrand-guidelines.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@absolunet/brand-guidelines
[dependencies-url]: https://david-dm.org/absolunet/brand-guidelines
[tests-url]:        https://github.com/absolunet/brand-guidelines/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]:         https://npms.io/search?q=%40absolunet%2Fbrand-guidelines
[license-url]:      https://opensource.org/licenses/MIT
