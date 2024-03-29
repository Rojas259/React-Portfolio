module.exports = {
    root: true,
    env: { browser: true, es2022: true, node: true },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended'],
    parserOptions: { ecmaFeatures: { jsx: true }, ecmaVersion: 12, sourceType: 'module' },
    plugins: ['react-refresh'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-component': 'error',
    },
    settings: { react: { version: 'detect' } },
    ignorePatterns: ['dist','eslintrc.cjs'],
};