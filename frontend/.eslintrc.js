module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb', 'plugin:prettier/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: ['prettier'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'import/prefer-default-export': ['off'],
		'import/no-cycle': ['off'],
		'react/prop-types': ['off'],
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'no-alert': 'off',
		'no-unused-vars': 'warn',
		'no-console': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				endOfLine: 'auto',
				singleQuote: true,
				arrowParens: 'always',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				paths: ['src'],
			},
		},
	},
};
