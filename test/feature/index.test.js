//--------------------------------------------------------
//-- Guidelines - Feature tests
//--------------------------------------------------------
import validateCss from 'css-validator';
import pkgDir      from 'pkg-dir';
import sass        from 'sass';
import fss         from '@absolunet/fss';


const DIST = `${pkgDir.sync(__dirname)}/dist`;

const minimumValuesTest = (config) => {
	expect(config).toBeObject();
	expect(config).not.toEqual({});
	expect(config).toContainAllKeys(['color', 'font', 'font-weight']);
};






describe(`Validate the guidelines CSS file`, () => {
	let css;
	let validatorData;

	test(`Ensure file exists`, () => {
		expect(() => {
			css = fss.readFile(`${DIST}/guidelines.css`, 'utf8');
		}).not.toThrow();
	});

	test(`Ensure content is validable`, (done) => {
		expect(() => {
			validateCss({ text: css }, (error, data) => {
				if (error) {
					throw new Error('CSS validation failed');
				}

				validatorData = data;
				done();
			});
		}).not.toThrow();
	});

	test(`Ensure content is valid`, () => {
		expect(validatorData).toBeObject();
		expect(validatorData.validity).toBeTrue();
		expect(validatorData.errors).toStrictEqual([]);
		expect(validatorData.warnings).toStrictEqual([]);
	});
});



describe(`Validate the guidelines SCSS file`, () => {
	let scss;
	let css;

	test(`Ensure file exists`, () => {
		expect(() => {
			scss = fss.readFile(`${DIST}/guidelines.scss`, 'utf8');
		}).not.toThrow();
	});

	test(`Ensure content is valid`, () => {
		expect(() => {
			const result = sass.renderSync({ data: scss });
			css = result.css.toString();
		}).not.toThrow();
	});

	test(`Ensure guidelines generates no CSS`, () => {
		expect(css).toBeString();
		expect(css).toBeEmpty();
	});
});



describe(`Validate the guidelines JSON file`, () => {
	let json;
	let config;

	test(`Ensure file exists`, () => {
		expect(() => {
			json = fss.readFile(`${DIST}/guidelines.json`, 'utf8');
		}).not.toThrow();
	});

	test(`Ensure content is valid`, () => {
		expect(() => {
			config = JSON.parse(json);
		}).not.toThrow();
	});

	test(`Ensure guidelines contains minimum values`, () => {
		minimumValuesTest(config);
	});
});



describe(`Validate the entry point returns the guidelines`, () => {
	let guidelines;

	test(`Ensure it works`, () => {
		expect(() => {
			({ guidelines } = require(`${DIST}/node`));  // eslint-disable-line node/global-require
		}).not.toThrow();
	});

	test(`Ensure guidelines contains minimum values`, () => {
		minimumValuesTest(guidelines);
	});
});
