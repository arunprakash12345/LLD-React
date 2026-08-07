# Updating State

## What happens in `setCount(count + 1)`?

The expression `count + 1` is evaluated by JavaScript using the current render's state snapshot.

Example:

```jsx
count = 5;

setCount(count + 1);
```

JavaScript evaluates it as:

```jsx
setCount(6);
```

React receives the value `6`, stores it internally, and schedules a re-render.

---

## State Update Flow

User Action
↓
JavaScript evaluates expression
↓
Setter receives final value
↓
React updates internal state
↓
React schedules re-render
↓
Component executes again
↓
New JSX
↓
Reconciliation
↓
ReactDOM updates Real DOM

---

## Key Takeaways

- JavaScript evaluates expressions before React receives them.
- React never sees `count + 1`; it only receives the computed value.
- React stores the new value and schedules a re-render.
- The updated state is available only in the next render.