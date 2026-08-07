# State as a Snapshot

## Definition

React state behaves like a **snapshot**, not a live variable.

Each render receives its own fixed copy of state.

Calling `setState()` does **not** change the current snapshot.

Instead, React schedules a new render with a new snapshot.

---

## Render Timeline

Render #1

count = 0

↓

setCount(1)

↓

Current render still sees

count = 0

↓

React schedules Render #2

↓

Render #2

count = 1

---

## Example

```jsx
console.log(count);

setCount(count + 1);

console.log(count);
```

Output

```text
0
0
```

Both statements belong to the same render snapshot.

---

## Key Takeaways

- State is immutable within a render.
- `setState()` schedules a new render.
- Every render receives its own snapshot.
- The current render never sees future state updates.
- New state is available only in the next render.