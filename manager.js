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
				terminal.print('Build guidelines').spacer();

				const root       = pkgDir.sync(__dirname);
				const dist       = `${root}/dist`;
				const guidelines = fss.readYaml(`${root}/guidelines.yaml`);

				// JSON
				fss.writeJson(`${dist}/guidelines.json`, guidelines, { space: 2 });

				// CSS
				const baseCss = fss.readFile(`${root}/ressources/guidelines.css`, 'utf8');
				const cssVariables = cssVarsFromJSON({ 'absolunet-guidelines': guidelines }).replaceAll(';', ';\n\t');
				fss.writeFile(`${dist}/guidelines.css`, baseCss.replace('/* variables */', cssVariables));

				// SCSS
				const baseScss = fss.readFile(`${root}/ressources/guidelines.scss`, 'utf8');
				guidelines.font.content = `"${guidelines.font.content}"`;
				guidelines.font.title   = `"${guidelines.font.title}"`;
				guidelines.font.code    = `"${guidelines.font.code}"`;
				fss.writeFile(`${dist}/guidelines.scss`, `${jsonToScss.convert(JSON.stringify({ 'absolunet-guidelines': guidelines }))}\n\n${baseScss}`);
			}
		}
	}
});
