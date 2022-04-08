//--------------------------------------------------------
//-- Styleguide - Feature tests
//--------------------------------------------------------
import pkgDir from 'pkg-dir';
import sass   from 'sass';
import fss    from '@absolunet/fss';


const DIST = `${pkgDir.sync(__dirname)}/dist`;

const minimumValuesTest = (config) => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
	expect(config).toContainAllKeys(['color', 'font', 'font-weight']);
};






describe(`Validate the styleguide SCSS file`, () => {
	let scss;
	let css;

	test(`Ensure file exists`, () => {
		expect(() => {
			scss = fss.readFile(`${DIST}/styleguide.scss`, 'utf8');
		}).not.toThrow();
	});

	test(`Ensure content is valid`, () => {
		expect(() => {
			const result = sass.renderSync({ data: scss });
			css = result.css.toString();
		}).not.toThrow();
	});

	test(`Ensure styleguide generates no CSS`, () => {
		expect(css).toBeString();
		expect(css).toBeEmpty();
	});
});



describe(`Validate the styleguide JSON file`, () => {
	let json;
	let config;

	test(`Ensure file exists`, () => {
		expect(() => {
			json = fss.readFile(`${DIST}/styleguide.json`, 'utf8');
		}).not.toThrow();
	});

	test(`Ensure content is valid`, () => {
		expect(() => {
			config = JSON.parse(json);
		}).not.toThrow();
	});

	test(`Ensure styleguide contains minimum values`, () => {
		minimumValuesTest(config);
	});
});



describe(`Validate the entry point returns the styleguide`, () => {
	let styleguide;

	test(`Ensure it works`, () => {
		expect(() => {
			({ styleguide } = require(`${DIST}/node`));  // eslint-disable-line node/global-require
		}).not.toThrow();
	});

	test(`Ensure styleguide contains minimum values`, () => {
		minimumValuesTest(styleguide);
	});
});
