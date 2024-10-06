import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,   
        describe: "readonly",  
        it: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",  
    },
  },
];
