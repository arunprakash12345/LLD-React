# Why useState?

## Why was useState introduced?

Normal JavaScript variables are not enough for building dynamic React applications because:

- They do not persist across renders.
- React does not track changes to them.
- Updating a normal variable does not trigger a re-render.

---

## What is useState?

`useState` is a React Hook that allows a component to:

1. Persist data between renders.
2. Notify React to re-render when the data changes.

---

## Why not use normal variables?

```jsx
let count = 0;

count++;
```

Although the variable changes, React does not know about the update, so the UI remains unchanged.

---

## Using useState

```jsx
const [count, setCount] = useState(0);
```

Updating state:

```jsx
setCount(count + 1);
```

React schedules a new render and updates the UI.

---

## Responsibilities of useState

- Stores state across renders.
- Triggers re-render on updates.
- Keeps the UI synchronized with state.

---

## Variables vs State

| Variable | State |
|----------|-------|
| JavaScript owns it | React owns it |
| Lost on re-render | Persisted across renders |
| No re-render | Triggers re-render |
| React doesn't track it | React tracks it |

---

## Key Takeaways

- React does not watch normal variables.
- State is React's mechanism for dynamic UI.
- useState tells React which values affect the UI.
- Changing state schedules a re-render.


# How useState Works Internally

## Where is State Stored?

State is **not stored inside the component**.

React stores state internally and provides the current value whenever the component renders.

---

## First Render

```jsx
const [count] = useState(0);
```

React:

- Creates a state entry.
- Stores the initial value (`0`).
- Returns `0`.

---

## Re-render

```jsx
const [count] = useState(0);
```

React:

- Ignores the initial value.
- Returns the previously stored state.

---

## State Flow

Component
↓
Calls useState()
↓
React returns stored state
↓
Component renders
↓
setState()
↓
React updates stored state
↓
Component renders again

---

## Hook Identification

React identifies Hooks **by call order**, not by variable names.

Example:

Hook #1 → count

Hook #2 → name

Changing the Hook order breaks React's state mapping.

---

## Key Takeaways

- Components do not own state.
- React owns and stores state internally.
- `useState(initialValue)` uses the initial value only once.
- React matches Hooks based on their execution order.
- This is why Hooks must always be called in the same order.