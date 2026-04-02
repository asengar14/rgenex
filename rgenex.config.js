module.exports = {
  "language": "javascript",
  "styling": "none",
  "testing": "none",
  "paths": {
    "components": "src/components",
    "pages": "src/pages",
    "hooks": "src/hooks"
  },
  "generators": {
    "component": {
      "structure": "grouped",
      "includeTest": true,
      "includeStyle": true,
      "updateBarrel": true
    }
  }
};