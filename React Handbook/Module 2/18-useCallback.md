# useCallback

## What is useCallback?

`useCallback` is a React Hook that memoizes a function and returns the same function reference until its dependencies change.

---

## Why use useCallback?

React recreates functions on every render.

`useCallback` keeps the same function reference when dependencies remain unchanged.

---

## Syntax

```jsx
const callback = useCallback(() => {

}, [dependencies]);
```

---

## Internal Working

- First render:
  - Create function.
  - Store function.
  - Store dependencies.

- Later renders:
  - Compare dependencies.
  - If unchanged → Return stored function.
  - If changed → Create and store a new function.

---

## useMemo vs useCallback

useMemo

- Memoizes values.

useCallback

- Memoizes functions.

---

## Common Use Cases

- Passing callbacks to `React.memo` children.
- Preventing unnecessary child re-renders.
- Stable function references.

---

## Common Mistakes

- Using `useCallback` everywhere.
- Missing dependencies.
- Confusing it with `useMemo`.

---

## Interview Answer

`useCallback` memoizes a function reference. React returns the same function between renders unless one of its dependencies changes. It is mainly used as a performance optimization when passing callbacks to memoized child components.

---

## Key Takeaways

- Memoizes functions.
- Dependency-based.
- Prevents unnecessary function recreation.
- Useful with `React.memo`.