module.exports = {
  extends: ['taro/react'],
  plugins: ['prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    quotes: [2, 'single'],
    'jsx-quotes': [1, 'prefer-single'],
    semi: 0,
  },
}
