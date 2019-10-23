//--------------------------------------------------------
//-- Manager
//--------------------------------------------------------
'use strict';

const pkgDir      = require('pkg-dir');
const fss         = require('@absolunet/fss');
const jsonToScss  = require('@absolunet/json-to-scss');
const { manager } = require('@absolunet/manager');


manager.init({
	repositoryType: 'single-package',
	dist: {
		node: true
	},
	tasks: {
		prepare: {
			postRun: ({ terminal }) => {
				terminal.println('Build styleguides');

				const root       = pkgDir.sync(__dirname);
				const dist       = `${root}/dist`;
				const styleguide = fss.readYaml(`${root}/styleguide.yaml`);

				fss.writeJson(`${dist}/styleguide.json`, styleguide, { space: 2 });

				const baseScss = fss.readFile(`${root}/ressources/styleguide.scss`, 'utf8');
				fss.writeFile(`${dist}/styleguide.scss`, `${jsonToScss.convert(JSON.stringify({ 'absolunet-styleguide': styleguide }))}\n\n${baseScss}`);
			}
		}
	}
});
