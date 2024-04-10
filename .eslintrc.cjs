module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist'],
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        "pathGroups": [
          {
            "pattern": "react**",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "./components",
            "group": "builtin",
            "position": "before"
          },
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": [
          "react"
        ]
      }
    ]
  },
}
