# State Lifecycle & Re-render Cycle

## What happens after calling setState()?

1. User triggers an event.
2. Event handler executes.
3. React updates its internal state.
4. React schedules a re-render.
5. The component function executes again.
6. `useState` returns the latest stored value.
7. The component returns new JSX.
8. React creates a new React Element tree.
9. React performs reconciliation.
10. ReactDOM updates the changed Real DOM nodes.
11. The browser performs layout, paint, and composite.
12. The updated UI is displayed.

---

## Key Points

- `setState` does **not** immediately update the UI.
- React first updates its internal state.
- React schedules a re-render.
- The entire component function executes again.
- React compares the new UI with the previous one.
- Only the changed parts of the Real DOM are updated.

---

## Interview Answer

Calling `setState` updates React's internal state and schedules a re-render. React then executes the component again, creates a new React Element tree, compares it with the previous tree through reconciliation, updates only the necessary Real DOM nodes using ReactDOM, and finally the browser paints the updated UI.