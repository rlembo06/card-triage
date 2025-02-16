module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    'rules': {
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'off',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn'
    }
}
