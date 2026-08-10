# useRef

## What is useRef?

`useRef` is a React Hook that stores a mutable value that persists across re-renders without causing a re-render when updated.

---

## Why do we need useRef?

Some values need to persist across renders but should not update the UI.

Examples:

- DOM elements
- Timer IDs
- Previous values
- Scroll positions

---

## DOM Example

```jsx
const inputRef = useRef(null);

<input ref={inputRef} />

inputRef.current.focus();
```

---

## Mutable Value Example

```jsx
const countRef = useRef(0);

countRef.current++;
```

Updating a ref does **not** trigger a re-render.

---

## useState vs useRef

### useState

- Stores UI state.
- Updating state triggers a re-render.

### useRef

- Stores mutable values.
- Updating a ref does not trigger a re-render.

---

## Internal Flow

### useState

setState()

↓

React Stores State

↓

Re-render

### useRef

ref.current = value

↓

React Updates Ref

↓

No Re-render

---

## Interview Answer

`useRef` is used to store mutable values or DOM references that persist across renders without causing the component to re-render when updated.

---

## Key Takeaways

- Persists across renders.
- Does not trigger re-renders.
- Commonly used for DOM access.
- Also useful for timers and previous values.