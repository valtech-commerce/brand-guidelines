//--------------------------------------------------------
//-- Manager
//--------------------------------------------------------
'use strict';

const cssVarsFromJSON = require('css-vars-from-json');
const pkgDir          = require('pkg-dir');
const fss             = require('@absolunet/fss');
const jsonToScss      = require('@absolunet/json-to-scss');
const { manager }     = require('@absolunet/manager');


manager.init({
	repositoryType: 'single-package',
	dist: {
		node: true
	},
	tasks: {
		build: {
			postRun: ({ terminal }) => {
				terminal.print('Build styleguides').spacer();

				const root       = pkgDir.sync(__dirname);
				const dist       = `${root}/dist`;
				const styleguide = fss.readYaml(`${root}/styleguide.yaml`);

				// JSON
				fss.writeJson(`${dist}/styleguide.json`, styleguide, { space: 2 });

				// CSS
				const baseCss = fss.readFile(`${root}/ressources/styleguide.css`, 'utf8');
				const cssVariables = cssVarsFromJSON({ 'absolunet-styleguide': styleguide }).replaceAll(';', ';\n\t');
				fss.writeFile(`${dist}/styleguide.css`, baseCss.replace('/* variables */', cssVariables));

				// SCSS
				const baseScss = fss.readFile(`${root}/ressources/styleguide.scss`, 'utf8');
				styleguide.font.content = `"${styleguide.font.content}"`;
				styleguide.font.title   = `"${styleguide.font.title}"`;
				styleguide.font.code    = `"${styleguide.font.code}"`;
				fss.writeFile(`${dist}/styleguide.scss`, `${jsonToScss.convert(JSON.stringify({ 'absolunet-styleguide': styleguide }))}\n\n${baseScss}`);
			}
		}
	}
});
