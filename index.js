const plugin = require("tailwindcss/plugin");

// Percentage values (0% - 1000%)
const percentValues = {};
for (let i = 0; i <= 1000; i++) {
  percentValues[i] = `${i}%`;
}

// Decimal values (0 - 10)
const decimalValues = {};
for (let i = 0; i <= 1000; i++) {
  decimalValues[i] = (i / 100).toString();
}

module.exports = plugin.withOptions(() => {
  return function ({ matchUtilities }) {
    /**
     * Position & Margin Utilities
     * Supports negative values
     */
    matchUtilities(
      {
        "top-pr": (value) => ({ top: value }),
        "right-pr": (value) => ({ right: value }),
        "bottom-pr": (value) => ({ bottom: value }),
        "left-pr": (value) => ({ left: value }),

        "inset-pr": (value) => ({ inset: value }),

        "inset-x-pr": (value) => ({
          left: value,
          right: value,
        }),

        "inset-y-pr": (value) => ({
          top: value,
          bottom: value,
        }),

        "m-pr": (value) => ({
          margin: value,
        }),

        "mx-pr": (value) => ({
          marginLeft: value,
          marginRight: value,
        }),

        "my-pr": (value) => ({
          marginTop: value,
          marginBottom: value,
        }),

        "mt-pr": (value) => ({
          marginTop: value,
        }),

        "mr-pr": (value) => ({
          marginRight: value,
        }),

        "mb-pr": (value) => ({
          marginBottom: value,
        }),

        "ml-pr": (value) => ({
          marginLeft: value,
        }),
      },
      {
        values: percentValues,
        supportsNegativeValues: true,
      }
    );

    /**
     * Width / Height / Padding / Gap / Flex Basis
     */
    matchUtilities(
      {
        "w-pr": (value) => ({
          width: value,
        }),

        "h-pr": (value) => ({
          height: value,
        }),

        "min-w-pr": (value) => ({
          minWidth: value,
        }),

        "min-h-pr": (value) => ({
          minHeight: value,
        }),

        "max-w-pr": (value) => ({
          maxWidth: value,
        }),

        "max-h-pr": (value) => ({
          maxHeight: value,
        }),

        "p-pr": (value) => ({
          padding: value,
        }),

        "px-pr": (value) => ({
          paddingLeft: value,
          paddingRight: value,
        }),

        "py-pr": (value) => ({
          paddingTop: value,
          paddingBottom: value,
        }),

        "pt-pr": (value) => ({
          paddingTop: value,
        }),

        "pr-pr": (value) => ({
          paddingRight: value,
        }),

        "pb-pr": (value) => ({
          paddingBottom: value,
        }),

        "pl-pr": (value) => ({
          paddingLeft: value,
        }),

        "gap-pr": (value) => ({
          gap: value,
        }),

        "gap-x-pr": (value) => ({
          columnGap: value,
        }),

        "gap-y-pr": (value) => ({
          rowGap: value,
        }),

        "basis-pr": (value) => ({
          flexBasis: value,
        }),
      },
      {
        values: percentValues,
      }
    );

    /**
     * Flex Grow & Shrink
     */
    matchUtilities(
      {
        "grow-pr": (value) => ({
          flexGrow: value,
        }),

        "shrink-pr": (value) => ({
          flexShrink: value,
        }),
      },
      {
        values: decimalValues,
      }
    );
  };
});