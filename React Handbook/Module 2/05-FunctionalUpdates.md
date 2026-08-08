# Functional Updates

## Why do we need Functional Updates?

When multiple state updates depend on the previous state, using the normal setter can produce unexpected results because every update uses the same render snapshot.

Example:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

Result:

```text
1
```

---

## Functional Update

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Result:

```text
3
```

---

## Why?

React receives a function instead of a value.

It executes each function using the latest available state.

Flow:

Latest State
↓
Execute updater function
↓
Store new state
↓
Repeat for remaining updates

---

## When to Use

Use Functional Updates whenever the next state depends on the previous state.

Examples:

- Increment counters
- Toggle values
- Update arrays
- Update objects

---

## Key Takeaways

- `setCount(count + 1)` computes the value immediately.
- `setCount(prev => prev + 1)` lets React compute the value later.
- Functional Updates always receive the latest available state.
- Prefer Functional Updates when the next state depends on the previous state.