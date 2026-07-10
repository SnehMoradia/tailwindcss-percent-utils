<div align="center">

# 📐 tailwindcss-percent-utils

A Tailwind CSS plugin that adds intuitive percentage utilities for sizing, spacing, positioning, and flex layouts—without arbitrary value syntax (`[]`).

✅ Tailwind CSS v3 & v4 • 🚀 Zero Configuration • 📏 Built-in Percentage Scale

[![NPM Version](https://img.shields.io/npm/v/tailwindcss-percent-utils?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-percent-utils)
[![NPM Downloads](https://img.shields.io/npm/dt/tailwindcss-percent-utils?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-percent-utils)
[![License](https://img.shields.io/npm/l/tailwindcss-percent-utils?style=flat-square)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%26%20v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

# ✨ Why?

Tailwind CSS supports percentage values using arbitrary values:

```html
<div class="w-[37%]"></div>
```

With **tailwindcss-percent-utils**, write cleaner and more consistent utilities:

```html
<div class="w-pr-37"></div>
```

No square brackets.

Better readability.

Cleaner autocomplete.

Works seamlessly with Tailwind CSS.

---

# ✨ Features

- 📏 Percentage utilities from **0% to 1000%**
- 📦 Width, Height, Min/Max Size
- 📐 Padding & Margin utilities
- 📍 Position utilities
- 💪 Flex Basis, Grow & Shrink utilities
- ➖ Native negative support for margins and positioning
- ⚡ Zero configuration
- ✅ Tailwind CSS v3 & v4 compatible
- 🚀 Works with all frameworks that use Tailwind CSS

---

# 🌍 Works With

- HTML
- React
- Next.js
- Vue
- Nuxt
- Angular
- Svelte
- Astro
- Laravel
- WordPress
- Remix
- SolidJS
- Qwik
- Any Tailwind CSS project

---

# 📦 Installation

### npm

```bash
npm install tailwindcss-percent-utils
```

### pnpm

```bash
pnpm add tailwindcss-percent-utils
```

### yarn

```bash
yarn add tailwindcss-percent-utils
```

---

# 🚀 Setup

## Tailwind CSS v4

```css
@import "tailwindcss";

@plugin "tailwindcss-percent-utils";
```

---

## Tailwind CSS v3

```javascript
module.exports = {
  plugins: [
    require("tailwindcss-percent-utils"),
  ],
};
```

---

# 📐 Examples

## Width & Height

```html
<div class="w-pr-80 h-pr-60"></div>
```

Compiles to

```css
width: 80%;
height: 60%;
```

---

## Padding

```html
<div class="p-pr-10 px-pr-5"></div>
```

---

## Margin

```html
<div class="-mt-pr-10 ml-pr-20"></div>
```

---

## Position

```html
<div class="absolute -top-pr-20 left-pr-50"></div>
```

---

## Flexbox

```html
<div class="basis-pr-50 grow-pr-80 shrink-pr-20"></div>
```

Compiles to

```css
flex-basis: 50%;
flex-grow: 0.8;
flex-shrink: 0.2;
```

---

## Responsive

```html
<div class="w-pr-100 md:w-pr-75 lg:w-pr-50"></div>
```

---

## Variants

```html
<div class="hover:w-pr-75 focus:h-pr-50"></div>
```

---

# 🛠 Supported Utilities

| Utility | CSS Property |
|----------|--------------|
| `w-pr-*` | width |
| `h-pr-*` | height |
| `min-w-pr-*` | min-width |
| `min-h-pr-*` | min-height |
| `max-w-pr-*` | max-width |
| `max-h-pr-*` | max-height |
| `p-pr-*` | padding |
| `px-pr-*` | padding-inline |
| `py-pr-*` | padding-block |
| `pt-pr-*` | padding-top |
| `pr-pr-*` | padding-right |
| `pb-pr-*` | padding-bottom |
| `pl-pr-*` | padding-left |
| `m-pr-*` | margin |
| `mx-pr-*` | margin-inline |
| `my-pr-*` | margin-block |
| `mt-pr-*` | margin-top |
| `mr-pr-*` | margin-right |
| `mb-pr-*` | margin-bottom |
| `ml-pr-*` | margin-left |
| `top-pr-*` | top |
| `right-pr-*` | right |
| `bottom-pr-*` | bottom |
| `left-pr-*` | left |
| `basis-pr-*` | flex-basis |
| `grow-pr-*` | flex-grow |
| `shrink-pr-*` | flex-shrink |

Negative values are supported for:

- Margin
- Top
- Right
- Bottom
- Left

---

# 📊 Value Scale

### Percentage Utilities

```
0 → 1000
```

Examples

```text
w-pr-25   → 25%
w-pr-50   → 50%
w-pr-100  → 100%
w-pr-250  → 250%
w-pr-1000 → 1000%
```

### Flex Grow / Shrink

```
grow-pr-80   → 0.8
grow-pr-100  → 1
grow-pr-250  → 2.5
grow-pr-1000 → 10
```

---

# 🤝 Contributing

Contributions, bug reports, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

Licensed under the MIT License.

---

<div align="center">

Made with ❤️ by **Sneh Moradia**

⭐ If this project helps you, please consider giving it a star.

</div>