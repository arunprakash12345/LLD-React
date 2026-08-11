# Commit Phase

## What is the Commit Phase?

The Commit Phase is where React applies the changes identified during the Render Phase to the Real DOM.

After the DOM is updated, the browser renders the updated UI.

---

## Flow

Render Phase Finished

↓

React Has Required Changes

↓

Commit Phase

↓

ReactDOM Updates Real DOM

↓

Browser Layout

↓

Paint

↓

Composite

↓

Updated UI

↓

useEffect()

---

## What Happens?

- Real DOM updates.
- DOM nodes are added, removed, or updated.
- Browser renders the UI.
- useEffect executes.

---

## What Does NOT Happen?

- Component execution
- JSX creation
- React Elements creation
- Reconciliation

---

## Render vs Commit

Render Phase

- Executes components.
- Creates React Elements.
- Reconciliation.

Commit Phase

- Updates Real DOM.
- Browser renders UI.
- Executes useEffect.

---

## Interview Answer

The Commit Phase is where React applies the changes calculated during the Render Phase to the Real DOM. Once the DOM is updated, the browser renders the updated UI, and React executes useEffect after the browser has painted.