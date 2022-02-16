import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import styles from 'rollup-plugin-styles'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'
import svelte from 'rollup-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import replace from 'rollup-plugin-replace'
import alias from '@rollup/plugin-alias'
import html from '@rollup/plugin-html'

const production = !process.env.ROLLUP_WATCH

const aliases = alias({
	resolve: ['.svelte', '.js', '.ts'],
	entries: [{find: 'src', replacement: __dirname + '/src'}],
})

export default {
	input: './src/index.ts',
	output: [
		{
			file: 'dist/index.js',
			format: 'umd',
			name: 'notice-sdk',
		},
	],
	plugins: [
		html(),
		typescript(),
		aliases,
		svelte({
			preprocess: autoPreprocess(),
		}),
		resolve(),
		commonjs(),
		json(),
		styles(),
		// compile to good old IE11 compatible ES5
		babel({
			babelHelpers: 'runtime',
			extensions: ['.js', '.mjs', '.html', '.svelte', '.ts'],
			exclude: [
				'node_modules/@babel/**',
				'node_modules/core-js/**',
				/\/core-js\//, // prevent circular depedencies https://github.com/rollup/rollup-plugin-babel/issues/254
				'node_modules/!(' + 'preact|preact-compat' + ')/**',
			],
			presets: [
				[
					'@babel/preset-env',
					{
						modules: false,
						targets: {
							ie: '11',
						},
						useBuiltIns: 'entry',
						corejs: 3,
					},
				],
			],
			babelrc: false,
			plugins: [
				'@babel/plugin-syntax-dynamic-import',
				[
					'@babel/plugin-transform-runtime',
					{
						useESModules: true,
					},
				],
			],
		}),
		//环境变量
		replace({
			'process.env.production': production,
		}),
		production && terser(),
	],
}
