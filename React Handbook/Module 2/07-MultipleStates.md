# Multiple States in React

## Why does React allow multiple `useState` Hooks?

React allows multiple `useState` Hooks so that **independent pieces of state can be managed separately**.

This improves:

- Readability
- Maintainability
- Simpler state updates
- Better code organization

Each `useState` Hook is independent of the others.

Example:

```jsx
const [count, setCount] = useState(0);
const [theme, setTheme] = useState("light");
const [loading, setLoading] = useState(false);
```

Internally, React stores them separately:

```text
Hook #1 → count
Hook #2 → theme
Hook #3 → loading
```

Updating one state does **not** modify the others.

---

# When should you use Multiple States?

Use multiple `useState` Hooks when the values are **independent**.

Example:

```jsx
const [count, setCount] = useState(0);
const [theme, setTheme] = useState("light");
const [loading, setLoading] = useState(false);
```

These values have no direct relationship with each other.

---

# When should you use Object State?

Use a single object state when multiple values belong to the **same logical entity**.

Example:

```jsx
const [form, setForm] = useState({
  email: "",
  password: "",
});
```

Here, `email` and `password` are both part of the same login form, so grouping them together makes sense.

---

# Why does `useState` replace the entire object?

Unlike the old class component `setState()`, the `useState` setter **does not merge objects**.

It always **replaces the entire state value**.

Example:

```jsx
const [user, setUser] = useState({
  name: "Arun",
  age: 25,
});
```

Updating like this:

```jsx
setUser({
  age: 26,
});
```

Results in:

```jsx
{
  age: 26,
}
```

The `name` property is lost because the previous object is completely replaced.

---

# Correct Way to Update Object State

Use the functional updater and spread the previous object.

```jsx
setUser(prev => ({
  ...prev,
  age: 26,
}));
```

### Flow

```text
Previous Object
        ↓
Spread Existing Properties (...prev)
        ↓
Override Required Property
        ↓
Store New Object
```

Result:

```jsx
{
  name: "Arun",
  age: 26,
}
```

---

# Interview Answer

### Why does React allow multiple `useState` Hooks?

React allows multiple `useState` Hooks so that independent pieces of state can be managed separately. This improves readability, maintainability, and avoids unnecessary complexity. When multiple values represent a single logical entity, such as a form, they can be grouped into an object state.

---

# Common Mistakes

❌ Incorrect

```jsx
setUser({
  age: 26,
});
```

Result:

```jsx
{
  age: 26,
}
```

The previous properties are lost.

---

✅ Correct

```jsx
setUser(prev => ({
  ...prev,
  age: 26,
}));
```

This preserves the existing properties while updating only the required field.

---

# Key Takeaways

- Use **multiple `useState` Hooks** for **independent** values.
- Use **object state** for **related** values.
- `useState` **replaces** the entire state value; it does **not** merge objects.
- Use the **spread operator (`...prev`)** to preserve existing object properties.
- Prefer the **functional updater** when the next state depends on the previous state.
- Keep state **small, focused, and logically grouped** for better maintainability.