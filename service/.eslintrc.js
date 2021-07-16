module.exports = {
  extends: "airbnb-typescript-prettier",
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".d.ts", ".jsx", ".tsx", ".json"]
      }
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"]
  },
  ignorePatterns: ["lib", "decs.d.ts", "dist", "types", "protos", "generated"],
  "rules": {
    "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }]
  }
};