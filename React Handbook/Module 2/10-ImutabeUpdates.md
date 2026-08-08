# Immutable Updates in React

## What is Immutability?

Immutability means **never modifying existing state directly**.

Instead, create a new object or array containing the updated values.

---

## Mutable Update

```jsx
user.age = 26;

setUser(user);
```

Same object reference.

---

## Immutable Update

```jsx
setUser(prev => ({
    ...prev,
    age: 26,
}));
```

Creates a new object with a new reference.

---

## Why does React prefer Immutable Updates?

React detects state changes using **reference comparison**.

```text
Old Reference === New Reference
```

If the references are different, React knows the state has changed.

---

## Reference Comparison

```jsx
oldObject === newObject
```

- Same reference → No new object
- Different reference → New object

---

## Why not Deep Comparison?

Deep comparison checks every nested property.

Reference comparison checks only the object reference.

Reference comparison is significantly faster.

---

## Object Update

```jsx
setUser(prev => ({
    ...prev,
    age: 26,
}));
```

---

## Array Update

### Add

```jsx
setTodos(prev => [...prev, newTodo]);
```

### Remove

```jsx
setTodos(prev =>
    prev.filter(todo => todo.id !== id)
);
```

### Update

```jsx
setTodos(prev =>
    prev.map(todo =>
        todo.id === id
            ? updatedTodo
            : todo
    )
);
```

---

## Common Mistakes

❌

```jsx
user.age = 26;
setUser(user);
```

❌

```jsx
todos.push(todo);
setTodos(todos);
```

❌

```jsx
todos.splice(index, 1);
setTodos(todos);
```

---

## Interview Answer

React recommends immutable updates because they create new object or array references. React can efficiently detect these changes using reference comparison, which is much faster than performing deep comparisons.

---

## Key Takeaways

- Never mutate state directly.
- Always create a new object or array.
- React relies on reference comparison.
- Reference comparison is faster than deep comparison.
- Use the spread operator for objects and arrays.
- Use `map()`, `filter()`, and spread for array updates.