# Reconciliation

## What is Reconciliation?

Reconciliation is the process where React compares the previous Virtual DOM tree with the new Virtual DOM tree to determine the minimum changes required before updating the Real DOM.

---

## Flow

setState()

↓

Render Phase

↓

New Virtual DOM

↓

Reconciliation

↓

Diffing Algorithm

↓

List of Changes

↓

Commit Phase

↓

ReactDOM Updates Real DOM

---

## Diffing Rules

1. Different element types → Replace node.
2. Same element type → Update changed props/content.
3. Compare children efficiently.

---

## Element Comparison

React compares:

- Element type
- Props
- Children

---

## Keys

Keys provide a stable identity for list items.

Prefer:

```jsx
key={item.id}
```

Avoid:

```jsx
key = { index };
```

when items can be inserted, removed, or reordered.

---

## Common Misconceptions

- Reconciliation does not update the Real DOM.
- React compares Virtual DOM trees, not the Real DOM.
- Keys are used for efficient list reconciliation, not just to remove warnings.

---

## Interview Answer

Reconciliation is React's process of comparing the old and new Virtual DOM trees using its Diffing Algorithm to determine the minimum changes needed before updating the Real DOM.
