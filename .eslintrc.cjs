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
            "pattern": "components",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "redux",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "pages",
            "group": "internal",
            "position": "after"
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
