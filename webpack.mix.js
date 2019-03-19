const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
	.extract([
		'react', 
		'react-dom',
		'react-admin', 
		'react-redux',
		'react-router',
		'react-router-dom',
		'react-router-redux',
		'react-autosuggest',
		'react-autowhatever',
		'react-event-listener',
		'react-transition-group',
		'react-jss',
		'react-is',
		'react-lifecycles-compat',
		'react-themeable',
		'react-dropzone',
		'react-headroom',
		'redux',
		'redux-form',
		'redux-saga',
		'axios',
		'lodash',
		'debounce',
		'deepmerge',
		'dom-helpers',
		'jss',
		'jss-camel-case',
		'jss-compose',
		'jss-expand',
		'jss-extend',
		'jss-preset-default',
		'jss-template',
		'jss-default-unit',
		'jss-global',
		'jss-nested',
		'jss-props-sort',
		'jss-vendor-prefixer',
		'keycode',
		'normalize-scroll-left',
		'ra-ui-materialui',
		'ra-core',
		'ra-language-english',
		'popper.js',
		'prop-types'
	]);
