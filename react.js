module.exports = {
	extends: [ 'prettier/react', 'plugin:react/recommended' ],
	plugins: [ 'react' ],
	rules: {
		'react/no-deprecated': 'warn',
		'react/prop-types': 'off'
	}
}
