# Virtual DOM

## What is Virtual DOM?

The Virtual DOM is a lightweight JavaScript representation of the Real DOM.

React uses it to compare UI changes before updating the browser.

---

## Why Virtual DOM?

Direct DOM manipulation is expensive because it may trigger:

- Layout
- Paint
- Composite

Instead of comparing the browser DOM, React compares two Virtual DOM trees.

---

## Flow

setState()

↓

Render Phase

↓

New Virtual DOM Tree

↓

Compare with Previous Virtual DOM

↓

Find Differences

↓

Commit Phase

↓

ReactDOM Updates Real DOM

↓

Browser Renders Updated UI

---

## Virtual DOM vs Real DOM

Virtual DOM

- JavaScript Object
- Memory
- Fast comparison

Real DOM

- Browser DOM
- Expensive updates
- Layout/Paint

---

## Benefits

- Efficient updates
- Better performance
- Declarative UI
- Cross-platform rendering

---

## Limitations

- Comparison has overhead.
- Real DOM still needs updating.
- Not always beneficial for tiny applications.

---

## Interview Answer

The Virtual DOM is a lightweight JavaScript representation of the Real DOM. React compares the previous and current Virtual DOM trees during the Render Phase and updates only the necessary parts of the Real DOM during the Commit Phase.