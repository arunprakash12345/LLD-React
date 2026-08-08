# Lazy Initialization in `useState`

## Why do we need Lazy Initialization?

Normally, the initial value passed to `useState` is **evaluated by JavaScript on every render**, even though React only uses it during the first render.

This can become expensive if the initial value requires heavy computation.

---

## Normal Initialization

```jsx
function expensiveCalculation() {
  console.log("Running...");
  return 100;
}

function Counter() {
  const [count] = useState(expensiveCalculation());

  return <h1>{count}</h1>;
}
```

### What happens?

On **every render**:

1. JavaScript executes `expensiveCalculation()`.
2. The returned value (`100`) is passed to `useState()`.
3. React ignores the value after the first render because the state already exists.

### Render Flow

```text
Component Render
        ↓
JavaScript executes expensiveCalculation()
        ↓
useState(100)
        ↓
React returns stored state
```

> **Important:** The function executes **every render**, but React uses its result only during the first render.

---

## Lazy Initialization

Instead of passing the computed value:

```jsx
const [count] = useState(expensiveCalculation());
```

Pass a function:

```jsx
const [count] = useState(() => expensiveCalculation());
```

### What happens?

### First Render

1. React receives the function.
2. React executes the function.
3. React stores the returned value as the initial state.

### Subsequent Renders

- React already has the stored state.
- The initialization function is **not executed again**.
- React simply returns the stored state.

### Render Flow

```text
First Render

React receives function
        ↓
React executes function
        ↓
Stores returned value
        ↓
State initialized

--------------------------------

Subsequent Renders

React already has state
        ↓
Initialization function is skipped
        ↓
Stored state is returned
```

---

## Normal Initialization vs Lazy Initialization

| Normal Initialization | Lazy Initialization |
|-----------------------|---------------------|
| `useState(expensiveCalculation())` | `useState(() => expensiveCalculation())` |
| JavaScript executes the function on every render | React executes the function only on the first render |
| React ignores the computed value after initialization | React stores the computed value once and reuses it |
| Can be expensive | Optimized for performance |

---

## Why does this happen?

JavaScript always evaluates function arguments **before** calling a function.

Example:

```jsx
useState(expensiveCalculation());
```

JavaScript first executes:

```jsx
expensiveCalculation();
```

Then calls:

```jsx
useState(100);
```

React has no control over this because JavaScript has already evaluated the argument.

When using Lazy Initialization:

```jsx
useState(() => expensiveCalculation());
```

JavaScript **does not execute** `expensiveCalculation()`.

Instead, it creates a function and passes it to React.

React decides **when** to execute that function, which is only during the initial render.

---

## When should you use Lazy Initialization?

Use Lazy Initialization whenever computing the initial state is expensive.

Examples:

- Reading from `localStorage`
- Parsing large JSON
- Complex calculations
- Large array processing
- Heavy initialization logic

Example:

```jsx
const [todos] = useState(() => {
  return JSON.parse(localStorage.getItem("todos")) || [];
});
```

Without Lazy Initialization, `localStorage.getItem()` would execute on every render.

---

## Common Mistakes

❌ Normal Initialization

```jsx
const [count] = useState(expensiveCalculation());
```

The expensive function executes on every render.

---

✅ Lazy Initialization

```jsx
const [count] = useState(() => expensiveCalculation());
```

The expensive function executes only once during the initial render.

---

## Interview Questions

### Why does React provide Lazy Initialization?

React provides Lazy Initialization to avoid executing expensive initialization logic on every render. By passing a function to `useState`, React executes it only during the first render and reuses the stored state on future renders.

---

### Why is `useState(expensiveCalculation())` inefficient?

Because JavaScript evaluates `expensiveCalculation()` before calling `useState()` on every render, even though React ignores the result after the initial render.

---

### When should you use Lazy Initialization?

Use it whenever the initial state requires expensive computation or external reads, such as:

- `localStorage`
- Large calculations
- Data parsing
- Expensive initialization logic

---

# Key Takeaways

- JavaScript evaluates function arguments before calling `useState()`.
- React uses the initial state only during the first render.
- `useState(expensiveCalculation())` executes the function on every render.
- `useState(() => expensiveCalculation())` passes a function to React.
- React executes the initialization function only once.
- Lazy Initialization improves performance by avoiding unnecessary computations.