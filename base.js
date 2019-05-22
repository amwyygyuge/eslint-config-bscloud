module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2019,
		sourceType: 'module'
	}
}
