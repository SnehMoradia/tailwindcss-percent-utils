const plugin = require("tailwindcss/plugin");

// Pre-populate percentage values from 0% to 1000%
const percentValues = {};
for (let i = 0; i <= 1000; i++) {
  percentValues[i] = `${i}%`;
}

// Pre-populate decimal values from 0 to 10 (with steps equivalent to grow-pr-100 = 1)
const decimalValues = {};
for (let i = 0; i <= 1000; i++) {
  decimalValues[i] = `${i / 100}`;
}

module.exports = plugin.withOptions(
  function (options = {}) {
    return function ({ matchUtilities }) {
      // 1. Spacing/Margins/Positions that support negative values
      matchUtilities(
        {
          "top-pr": (value) => ({ top: value }),
          "right-pr": (value) => ({ right: value }),
          "bottom-pr": (value) => ({ bottom: value }),
          "left-pr": (value) => ({ left: value }),
          "m-pr": (value) => ({ margin: value }),
          "mx-pr": (value) => ({
            "margin-left": value,
            "margin-right": value,
          }),
          "my-pr": (value) => ({
            "margin-top": value,
            "margin-bottom": value,
          }),
          "mt-pr": (value) => ({ "margin-top": value }),
          "mr-pr": (value) => ({ "margin-right": value }),
          "mb-pr": (value) => ({ "margin-bottom": value }),
          "ml-pr": (value) => ({ "margin-left": value }),
        },
        {
          values: percentValues,
          supportsNegativeValues: true,
        }
      );

      // 2. Utilities without negative values support (Percentages)
      matchUtilities(
        {
          "w-pr": (value) => ({ width: value }),
          "h-pr": (value) => ({ height: value }),
          "min-w-pr": (value) => ({ "min-width": value }),
          "min-h-pr": (value) => ({ "min-height": value }),
          "max-w-pr": (value) => ({ "max-width": value }),
          "max-h-pr": (value) => ({ "max-height": value }),
          "p-pr": (value) => ({ padding: value }),
          "px-pr": (value) => ({
            "padding-left": value,
            "padding-right": value,
          }),
          "py-pr": (value) => ({
            "padding-top": value,
            "padding-bottom": value,
          }),
          "pt-pr": (value) => ({ "padding-top": value }),
          "pr-pr": (value) => ({ "padding-right": value }),
          "pb-pr": (value) => ({ "padding-bottom": value }),
          "pl-pr": (value) => ({ "padding-left": value }),
          "basis-pr": (value) => ({ "flex-basis": value }),
          "flex-basis-pr": (value) => ({ "flex-basis": value }),
        },
        {
          values: percentValues,
          supportsNegativeValues: false,
        }
      );

      // 3. Flex grow and shrink utilities (Decimals, positive only)
      matchUtilities(
        {
          "grow-pr": (value) => ({ "flex-grow": value }),
          "flex-grow-pr": (value) => ({ "flex-grow": value }),
          "shrink-pr": (value) => ({ "flex-shrink": value }),
          "flex-shrink-pr": (value) => ({ "flex-shrink": value }),
        },
        {
          values: decimalValues,
          supportsNegativeValues: false,
        }
      );
    };
  }
);
