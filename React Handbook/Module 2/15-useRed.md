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




# useRef

## What is useRef?

`useRef` is a React Hook that stores a mutable value that persists across re-renders without causing a re-render when updated.

---

## Why use useRef?

Use `useRef` when you need to:

- Persist values across renders.
- Store DOM elements.
- Store timer IDs.
- Store previous values.
- Avoid unnecessary re-renders.

---

## Syntax

```jsx
const ref = useRef(initialValue);
```

Internally:

```jsx
{
    current: initialValue
}
```

---

## How useRef Works

- React creates the ref object during the first render.
- The same object is returned on every subsequent render.
- Updating `ref.current` changes the stored value.
- Updating a ref does **not** trigger a re-render.

---

## useState vs useRef

| useState | useRef |
|----------|---------|
| Stores UI state | Stores mutable values |
| Triggers re-render | Does not trigger re-render |
| Uses setter | Updates `.current` directly |

---

## Common Use Cases

- Focus input
- Store DOM elements
- Store timer IDs
- Store previous values
- Store scroll positions

---

## Common Mistakes

❌ Expecting `ref.current` updates to re-render.

❌ Using refs instead of state for UI.

❌ Forgetting `.current`.

---

## Interview Answer

`useRef` is used to store mutable values or DOM references that persist across renders without causing re-renders. It is commonly used for DOM access, timers, previous values, and other data that should not affect the UI.

---

## Key Takeaways

- Persists across renders.
- Mutable (`.current` can change).
- No re-render on updates.
- Ideal for DOM access and persistent non-UI values.