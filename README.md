# @valtech-commerce/brand-guidelines

[![npm][npm-badge]][npm-url]
[![npm dependencies][dependencies-badge]][dependencies-url]
[![Tests][tests-badge]][tests-url]
[![npms][npms-badge]][npms-url]
[![License: MIT][license-badge]][license-url]

> Valtech Brand Guidelines


## Install

```bash
$ npm install @valtech-commerce/brand-guidelines
```


## Usage

via CSS
```css
@import "@valtech-commerce/brand-guidelines/dist/guidelines.css";

a {
	color: var(--valtech-guidelines-color-primary-blue);
}
```

via SCSS
```scss
@use "@valtech-commerce/brand-guidelines/dist/guidelines";

a {
	color: guidelines.get("color.primary.blue");
}
```

via JavaScript
```js
import { guidelines } from "@valtech-commerce/brand-guidelines";

console.log(guidelines.color.primary.blue);  // #00bdfa
```



## Files
The guidelines are also available as a JSON file under `dist/guidelines.json`

The logos are available under `resources/logos`

The fonts are available under `resources/fonts`



## Documentation

View [documentation](https://valtech-commerce.github.io/brand-guidelines)






<br><br>

## License

MIT © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]:          https://img.shields.io/npm/v/@valtech-commerce/brand-guidelines?style=flat-square
[dependencies-badge]: https://img.shields.io/david/valtech-commerce/brand-guidelines?style=flat-square
[tests-badge]:        https://img.shields.io/github/workflow/status/valtech-commerce/brand-guidelines/tests/production?label=tests&style=flat-square
[npms-badge]:         https://badges.npms.io/%40valtech-commerce%2Fbrand-guidelines.svg?style=flat-square
[license-badge]:      https://img.shields.io/badge/license-MIT-green?style=flat-square

[npm-url]:          https://www.npmjs.com/package/@valtech-commerce/brand-guidelines
[dependencies-url]: https://david-dm.org/valtech-commerce/brand-guidelines
[tests-url]:        https://github.com/valtech-commerce/brand-guidelines/actions?query=workflow%3Atests+branch%3Aproduction
[npms-url]:         https://npms.io/search?q=%40valtech-commerce%2Fbrand-guidelines
[license-url]:      https://opensource.org/licenses/MIT
