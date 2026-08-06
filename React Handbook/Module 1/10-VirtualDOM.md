# Virtual DOM

## Definition

The Virtual DOM is a lightweight tree of React Elements representing the desired UI.

It is managed by React and exists only in memory.

---

## Why It Exists

- Compare previous and current UI.
- Determine what changed.
- Minimize unnecessary DOM updates.

---

## Update Flow

State Changes
↓
New Virtual DOM
↓
Compare with Previous Virtual DOM
↓
Determine Differences
↓
ReactDOM Updates Real DOM

---

## Virtual DOM vs Real DOM

Virtual DOM

- JavaScript objects
- Managed by React
- Used for comparison

Real DOM

- Browser DOM nodes
- Managed by the browser
- Rendered to the screen

---

## Key Takeaways

- Virtual DOM is not HTML.
- Virtual DOM is not the browser DOM.
- Virtual DOM is built from React Elements.
- React uses it to reduce unnecessary DOM operations.