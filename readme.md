# @absolunet/brand-guidelines

[![npm](https://img.shields.io/npm/v/@absolunet/brand-guidelines.svg)](https://www.npmjs.com/package/@absolunet/brand-guidelines)
[![npm dependencies](https://david-dm.org/absolunet/brand-guidelines/status.svg)](https://david-dm.org/absolunet/brand-guidelines)
[![npms](https://badges.npms.io/%40absolunet%2Fbrand-guidelines.svg)](https://npms.io/search?q=%40absolunet%2Fbrand-guidelines)
[![Travis CI](https://travis-ci.com/absolunet/brand-guidelines.svg?branch=master)](https://travis-ci.com/absolunet/brand-guidelines/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config)

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
import { styleguide } from '@absolunet/brand-guidelines';

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
