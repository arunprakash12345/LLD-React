# Re-render

## What is a Re-render?

A re-render is the process where React executes a component again to update the UI when state, props, or context changes.

---

## What Triggers a Re-render?

- State updates
- Props changes
- Context changes
- Parent re-renders

---

## Flow

User Event

↓

setState()

↓

React Updates State

↓

Schedule Re-render

↓

Component Executes Again

↓

Returns JSX

↓

React Elements

↓

New React Element Tree

↓

Reconciliation

↓

Update Changed DOM Nodes

↓

Browser Paint

↓

Updated UI

---

## Initial Render vs Re-render

Initial Render

- Creates the UI.

Re-render

- Updates the existing UI.

---

## Important

A re-render does **not** recreate the entire DOM.

React updates only the changed parts after reconciliation.

---

## Interview Answer

A re-render occurs when state, props, or context changes. React executes the component again, creates a new React Element tree, compares it with the previous tree through reconciliation, and updates only the necessary parts of the Real DOM.