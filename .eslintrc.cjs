	module.exports = {
		env: {
			browser: true,
			es2021: true,
		},
		parser: "@typescript-eslint/parser",
		extends: [
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:react/jsx-runtime",
			"standard",
			"eslint-config-prettier",
			"prettier"
		],
		overrides: [
			{
				env: {
					node: true,
				},
				files: [".eslintrc.{js,cjs}"],
				parserOptions: {
					sourceType: "script",
				},
			},
		],
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: ["react", "prettier"],
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			"no-tabs": ["error", { allowIndentationTabs: true }],
			"react/react-in-jsx-scope": 0,
			semi: ["error", "always"],
			quotes: ["error", "double"],
			"space-before-function-paren": ["error", "never"],
			indent: "off",
			"comma-dangle": ["error", "always-multiline"],
		},
	};
