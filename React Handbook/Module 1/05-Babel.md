# Babel

## What is Babel?

Babel is a JavaScript transpiler that converts modern JavaScript features and JSX into browser-compatible JavaScript.

---

## Why Babel Exists

1. Transform JSX into `React.createElement()`.
2. Convert modern JavaScript syntax into compatible JavaScript.

---

## JSX Transformation

JSX

```jsx
<h1>Hello</h1>
```

↓

JavaScript

```js
React.createElement("h1", null, "Hello");
```

---

## Key Points

- Babel does not create HTML.
- Babel does not create DOM nodes.
- Babel does not render React.
- Babel only transforms source code into JavaScript.

---

## Execution Flow

JSX
    ↓
Babel
    ↓
React.createElement()
    ↓
React Element
    ↓
ReactDOM
    ↓
Browser DOM

---

## Common Misconceptions

❌ Babel converts JSX into HTML.

✔️ Babel converts JSX into JavaScript.

❌ Babel renders React.

✔️ ReactDOM performs rendering.