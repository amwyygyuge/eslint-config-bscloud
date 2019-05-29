module.exports = {
	extends: [ './base.js', 'prettier' ],
	plugins: [ 'prettier' ],
	rules: {
		'no-unused-vars': 'warn',
		'prettier/prettier': 'error',
		'linebreak-style': [ 'error', 'unix' ],
		'no-console': 'warn',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'off',
		'dot-notation': 'error',
		'no-empty-function': [
			'error',
			{ allow: [ 'constructors', 'generatorMethods', 'arrowFunctions' ] }
		],
		'no-eq-null': 'error',
		'no-multi-spaces': 'error',
		'no-useless-return': 'error',
		'vars-on-top': 'warn',
		'no-shadow': 'error',
		'no-use-before-define': 'warn',
		'block-spacing': [ 'error', 'always' ],
		camelcase: [ 'warn', { properties: 'always' } ],
		'comma-dangle': [ 'error', 'never' ],
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'lines-between-class-members': [ 'error', 'always' ],
		'max-depth': [ 'error', 5 ],
		'max-lines': [ 'error', { max: 300, skipBlankLines: true } ],
		'no-lonely-if': 'error',
		'arrow-spacing': 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': [
			'warn',
			{ object: true, array: true },
			{ enforceForRenamedProperties: false }
		],
		'babel/camelcase': 'off'
	}
}
