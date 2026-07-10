<div align="center">

# 📐 tailwindcss-percent-utils

Write percentage-based sizing, spacing, positioning, and flexbox utilities in Tailwind CSS **without square bracket syntax (`[]`)**.

Supports **Sizing**, **Spacing (Padding & Margin)**, **Positioning**, and **Flexbox** for **Tailwind CSS v3 & v4**.

[![NPM Version](https://img.shields.io/npm/v/tailwindcss-percent-utils?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-percent-utils)
[![NPM Downloads](https://img.shields.io/npm/dt/tailwindcss-percent-utils?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-percent-utils)
[![License](https://img.shields.io/npm/l/tailwindcss-percent-utils?style=flat-square)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%26%20v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**✨ Clean Syntax • 🚀 Zero Configuration • ⚡ Smart JIT Scanning • 📐 Custom Percent Scale**

</div>

---

## ✨ Features

- 🚀 **No `[]` brackets** for percentage values.
- 📏 **Comprehensive Scales**: Supports all numeric values found dynamically in your files (e.g., `-pr-80` = `80%`).
- ⚡ **Zero configuration**: Scans your source files and registers only the classes you actually use.
- 🔄 **Negative Value Support**: Native negative support for positions (top, left, etc.) and margins (e.g., `-mt-pr-5` -> `margin-top: -5%`).
- ✅ **Tailwind CSS v3 & v4 compatible**.

---

## 📦 Installation

```bash
npm install tailwindcss-percent-utils
```

---

## 🚀 Setup

### Tailwind CSS v4

Add the plugin to your main CSS file (e.g., `input.css`) using `@plugin`:

```css
@import "tailwindcss";

@plugin "tailwindcss-percent-utils";
```

### Tailwind CSS v3

Add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  plugins: [
    require("tailwindcss-percent-utils"),
  ],
};
```

---

## 📐 Examples

### Sizing
```html
<div class="w-pr-80 h-pr-60"></div>
<!-- CSS: width: 80%; height: 60%; -->
```

### Spacing (Padding & Margin)
```html
<div class="p-pr-10 -mt-pr-5"></div>
<!-- CSS: padding: 10%; margin-top: -5%; -->
```

### Positioning
```html
<div class="absolute -top-pr-10 left-pr-20"></div>
<!-- CSS: position: absolute; top: -10%; left: 20%; -->
```

### Flexbox
```html
<div class="flex">
  <div class="basis-pr-50 grow-pr-80">Box 1</div>
  <!-- CSS: flex-basis: 50%; flex-grow: 0.8; -->
</div>
```

---

## 🛠 Supported Utilities

| Prefix | CSS Property | Format | Example |
| :--- | :--- | :--- | :--- |
| `w-pr-` | Width | Percentage | `w-pr-80` -> `width: 80%` |
| `h-pr-` | Height | Percentage | `h-pr-60` -> `height: 60%` |
| `min-w-pr-` | Min-Width | Percentage | `min-w-pr-50` -> `min-width: 50%` |
| `min-h-pr-` | Min-Height | Percentage | `min-h-pr-50` -> `min-height: 50%` |
| `max-w-pr-` | Max-Width | Percentage | `max-w-pr-80` -> `max-width: 80%` |
| `max-h-pr-` | Max-Height | Percentage | `max-h-pr-80` -> `max-height: 80%` |
| `p-pr-` / `pt-pr-` / ... | Padding | Percentage | `p-pr-10` -> `padding: 10%` |
| `m-pr-` / `-mt-pr-` / ... | Margin | Percentage (pos/neg) | `-mt-pr-5` -> `margin-top: -5%` |
| `top-pr-` / `-top-pr-` | Top Position | Percentage (pos/neg) | `-top-pr-10` -> `top: -10%` |
| `bottom-pr-` / `-bottom-pr-` | Bottom Position | Percentage (pos/neg) | `bottom-pr-20` -> `bottom: 20%` |
| `left-pr-` / `-left-pr-` | Left Position | Percentage (pos/neg) | `left-pr-25` -> `left: 25%` |
| `right-pr-` / `-right-pr-` | Right Position | Percentage (pos/neg) | `right-pr-25` -> `right: 25%` |
| `basis-pr-` / `flex-basis-pr-` | Flex Basis | Percentage | `basis-pr-50` -> `flex-basis: 50%` |
| `grow-pr-` / `flex-grow-pr-` | Flex Grow | Decimal value | `grow-pr-80` -> `flex-grow: 0.8` |
| `shrink-pr-` / `flex-shrink-pr-` | Flex Shrink | Decimal value | `shrink-pr-20` -> `flex-shrink: 0.2` |

---

## 🤝 Contributing

Contributions and feature requests are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 📄 License

[MIT License](LICENSE).

---

<div align="center">

### Made with ❤️ by **Sneh Moradia**

⭐ **If this project helped you, consider giving it a star!**

</div>
