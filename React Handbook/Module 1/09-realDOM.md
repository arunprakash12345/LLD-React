# Real DOM

## Definition

The Real DOM is the browser's in-memory object representation of an HTML document.

Every HTML element becomes a DOM node.

---

## Flow

HTML
↓
Browser Parses
↓
DOM Tree
↓
Browser Rendering

---

## Key Points

- HTML is source code.
- The browser builds the DOM tree.
- JavaScript interacts with the DOM, not the HTML text.
- React uses the Real DOM through ReactDOM.

---

## Why DOM Updates Are Expensive

Updating the DOM may trigger:

- Layout recalculation
- Paint
- Compositing

Therefore, unnecessary DOM updates should be avoided.

---

## Common Misconceptions

❌ React replaces the DOM.

✔️ React updates the existing DOM efficiently.

❌ HTML and DOM are the same.

✔️ HTML is the source; the DOM is the browser's object model.