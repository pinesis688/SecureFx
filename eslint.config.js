import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: {
        ...globals.browser,
        ...globals.es2020,
        crypto: "readonly",
        argon2: "readonly",
        zxcvbn: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": ["warn", { 
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
      "no-console": "warn",
      "no-debugger": "warn",
      "no-alert": "warn",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "eqeqeq": ["warn", "always"],
      "curly": ["warn", "multi-line"],
      "no-var": "warn",
      "prefer-const": "warn",
      "prefer-arrow-callback": "warn",
      "no-duplicate-imports": "error",
      "no-template-curly-in-string": "warn",
      "array-callback-return": "warn",
      "consistent-return": "warn",
      "default-case": "warn",
      "dot-notation": "warn",
      "no-else-return": "warn",
      "no-empty-function": "warn",
      "no-eq-null": "warn",
      "no-extend-native": "error",
      "no-global-assign": "error",
      "no-implicit-globals": "error",
      "no-multi-spaces": "warn",
      "no-multi-str": "warn",
      "no-new-wrappers": "warn",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-proto": "error",
      "no-redeclare": "error",
      "no-return-assign": "warn",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "warn",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "warn",
      "no-useless-call": "warn",
      "no-useless-concat": "warn",
      "no-useless-return": "warn",
      "no-void": "error",
      "no-with": "error",
      "radix": "warn",
      "require-await": "warn",
      "wrap-iife": ["warn", "any"],
      "yoda": "warn"
    }
  },
  {
    files: ["encrypt-worker.js", "decrypt-worker.js"],
    languageOptions: {
      globals: {
        ...globals.worker,
        self: "readonly",
        importScripts: "readonly",
        postMessage: "readonly",
        onmessage: "writable"
      }
    }
  }
];
