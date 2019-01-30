/* eslint-disable import/no-extraneous-dependencies */
const defaultSettings = require('@open-wc/testing-karma/default-settings.js');
const merge = require('webpack-merge');

module.exports = config => {
	config.set(
		merge(defaultSettings(config), {
			files: [
				// allows running single tests with the --grep flag
				config.grep ? config.grep : 'test/**/*.test.js',
			],
			coverageIstanbulReporter: {
				reports: ['html', 'lcovonly', 'text-summary'],
				dir: 'coverage',
				combineBrowserReports: true,
				skipFilesWithNoCoverage: true,
				thresholds: {
					global: {
						statements: 90,
						branches: 90,
						functions: 90,
						lines: 90,
					},
				},
			},
		}),
	);
	return config;
};
