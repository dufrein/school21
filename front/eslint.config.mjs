import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@next/next/no-img-element": "off",
      "padding-line-between-statements": [
        "error",
        // Требовать пустую строку перед return
        { blankLine: "always", prev: "*", next: "return" },

        // Требовать пустую строку после объявлений переменных (const, let, var)
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },

        // Исключение: не требовать пустую строку между самими переменными
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },

        // Требовать пустую строку после каждого блока (if, for, while и т.д.)
        { blankLine: "always", prev: "block-like", next: "*" },
      ],
    },
  },
];

export default eslintConfig;
