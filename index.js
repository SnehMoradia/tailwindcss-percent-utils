const fs = require("fs");
const path = require("path");
const plugin = require("tailwindcss/plugin");

const PREFIXES = [
  "h-pr", "w-pr", "min-h-pr", "min-w-pr", "max-h-pr", "max-w-pr",
  "top-pr", "right-pr", "bottom-pr", "left-pr",
  "p-pr", "px-pr", "py-pr", "pt-pr", "pr-pr", "pb-pr", "pl-pr",
  "m-pr", "mx-pr", "my-pr", "mt-pr", "mr-pr", "mb-pr", "ml-pr",
  "basis-pr", "flex-basis-pr",
  "grow-pr", "flex-grow-pr",
  "shrink-pr", "flex-shrink-pr"
];

const VALID_EXTENSIONS = [
  ".html", ".js", ".jsx", ".ts", ".tsx", ".vue", ".svelte", ".astro", ".php", ".blade.php", ".twig", ".erb", ".liquid", ".mdx", ".md"
];

function hasValidExtension(filename) {
  const lower = filename.toLowerCase();
  return VALID_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function getFilesRecursively(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      files = files.concat(getFilesRecursively(filePath));
    } else {
      files.push(filePath);
    }
  });
  return files;
}

const prefixToProperties = {
  "h-pr": ["height"],
  "w-pr": ["width"],
  "min-h-pr": ["min-height"],
  "min-w-pr": ["min-width"],
  "max-h-pr": ["max-height"],
  "max-w-pr": ["max-width"],
  
  "top-pr": ["top"],
  "right-pr": ["right"],
  "bottom-pr": ["bottom"],
  "left-pr": ["left"],
  
  "p-pr": ["padding"],
  "px-pr": ["padding-left", "padding-right"],
  "py-pr": ["padding-top", "padding-bottom"],
  "pt-pr": ["padding-top"],
  "pr-pr": ["padding-right"],
  "pb-pr": ["padding-bottom"],
  "pl-pr": ["padding-left"],
  
  "m-pr": ["margin"],
  "mx-pr": ["margin-left", "margin-right"],
  "my-pr": ["margin-top", "margin-bottom"],
  "mt-pr": ["margin-top"],
  "mr-pr": ["margin-right"],
  "mb-pr": ["margin-bottom"],
  "ml-pr": ["margin-left"],
  
  "basis-pr": ["flex-basis"],
  "flex-basis-pr": ["flex-basis"],
  
  "grow-pr": ["flex-grow"],
  "flex-grow-pr": ["flex-grow"],
  "shrink-pr": ["flex-shrink"],
  "flex-shrink-pr": ["flex-shrink"]
};

function extractPercentClasses(srcDir) {
  const classes = new Set();
  const files = getFilesRecursively(srcDir);
  
  // Regex to match classes like w-pr-50, -mt-pr-10, etc.
  const classRegex = new RegExp(`(?:-)?\\b(?:${PREFIXES.join("|")})-[0-9]+\\b`, "g");

  files.forEach((file) => {
    if (hasValidExtension(file)) {
      const content = fs.readFileSync(file, "utf8");
      let match;
      classRegex.lastIndex = 0;
      while ((match = classRegex.exec(content)) !== null) {
        classes.add(match[0]);
      }
    }
  });

  return Array.from(classes);
}

module.exports = plugin.withOptions(
  function (options = {}) {
    return function ({ addUtilities, addBase }) {
      const srcDir = options.srcDir ? path.resolve(options.srcDir) : path.join(process.cwd(), "src");
      const foundClasses = extractPercentClasses(srcDir);
      const utilities = {};
      const baseStyles = {};

      foundClasses.forEach((classToken) => {
        // Parse the class token: e.g. "-mt-pr-5" or "w-pr-50"
        const isNegative = classToken.startsWith("-");
        const cleanToken = isNegative ? classToken.slice(1) : classToken;
        
        // Split by the last hyphen to get prefix and value
        const lastHyphenIndex = cleanToken.lastIndexOf("-");
        if (lastHyphenIndex === -1) return;
        
        const prefix = cleanToken.substring(0, lastHyphenIndex);
        const valueStr = cleanToken.substring(lastHyphenIndex + 1);
        const num = parseInt(valueStr, 10);
        
        if (isNaN(num)) return;
        
        const properties = prefixToProperties[prefix];
        if (!properties) return;

        // Determine value format: percentage vs unitless fraction (grow/shrink)
        const isFlexGrowOrShrink = prefix.includes("grow") || prefix.includes("shrink");
        let cssValue;
        if (isFlexGrowOrShrink) {
          // grow/shrink are positive unitless values
          cssValue = `${num / 100}`;
        } else {
          // positive/negative percentage
          cssValue = isNegative ? `-${num}%` : `${num}%`;
        }

        const declarations = {};
        properties.forEach((prop) => {
          declarations[prop] = cssValue;
        });

        if (isNegative) {
          // Negative utility classes start with a hyphen, which is rejected by addUtilities' selector validation.
          // Registering them under addBase works perfectly.
          const selector = `.${classToken}`;
          baseStyles[selector] = declarations;
        } else {
          const selector = `.${classToken}`;
          utilities[selector] = declarations;
        }
      });

      addUtilities(utilities);
      addBase(baseStyles);
    };
  }
);

// Clear require cache for this module so Node loads it fresh on every rebuild
try {
  delete require.cache[require.resolve(__filename)];
} catch (e) {}
