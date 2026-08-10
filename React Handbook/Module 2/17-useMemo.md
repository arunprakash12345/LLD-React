# useMemo

## What is useMemo?

`useMemo` is a React Hook that memoizes the result of an expensive calculation and recomputes it only when its dependencies change.

---

## Why use useMemo?

React re-renders components frequently.

Without `useMemo`, expensive calculations execute on every render.

With `useMemo`, React reuses the cached result when dependencies remain unchanged.

---

## Syntax

```jsx
const value = useMemo(() => {

    return expensiveCalculation();

}, [dependencies]);
```

---

## Internal Working

- First render:
  - Execute calculation.
  - Store result.
  - Store dependencies.

- Later renders:
  - Compare dependencies.
  - If changed → Recalculate.
  - If unchanged → Return cached value.

---

## Common Use Cases

- Filtering
- Sorting
- Expensive calculations
- Large derived datasets

---

## useMemo vs useRef

useMemo

- Caches calculated values.
- Dependency-based.

useRef

- Stores mutable values.
- No automatic recalculation.

---

## Common Mistakes

- Memoizing simple values.
- Missing dependencies.
- Confusing useMemo with state.

---

## Interview Answer

`useMemo` is a performance optimization Hook that caches the result of expensive calculations. React recomputes the value only when the specified dependencies change.

---

## Key Takeaways

- Optimizes expensive calculations.
- Uses dependency arrays.
- Returns cached values.
- Not a replacement for state.