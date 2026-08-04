# React Rendering Pipeline

## Rendering Flow

JSX
↓
Babel
↓
React.createElement()
↓
React Element (JavaScript Object)
↓
React Element Tree
↓
ReactDOM
↓
Real DOM
↓
Browser Rendering
↓
Visible UI

---

## Responsibilities

- Babel → Converts JSX into JavaScript.
- React → Creates React Elements.
- ReactDOM → Creates and updates the Real DOM.
- Browser → Renders pixels to the screen.

---

## Key Points

- JSX is never executed by the browser.
- React Elements are immutable JavaScript objects.
- ReactDOM is responsible for browser rendering.
- The browser performs layout, paint, and compositing after the DOM is updated.

---

## Common Misconceptions

❌ JSX becomes HTML.

✔️ JSX becomes `React.createElement()` calls.

❌ React creates the DOM.

✔️ ReactDOM creates and updates the DOM.

❌ React renders pixels.

✔️ The browser renders pixels.