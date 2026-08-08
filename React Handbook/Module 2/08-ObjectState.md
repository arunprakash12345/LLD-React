# Object State in React

## Why can't we update object state directly?

`useState` replaces the entire state value.

Example:

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

Previous properties are lost.

---

## Correct Way

```jsx
setUser(prev => ({
  ...prev,
  age: 26,
}));
```

Flow:

Previous Object

↓

Spread Previous Properties

↓

Override Required Property

↓

Create New Object

↓

React Stores New Object

---

## Why shouldn't we mutate objects?

Wrong:

```jsx
user.age = 26;
setUser(user);
```

Reason:

- Same object reference
- React compares references
- React may not detect the update correctly

---

## Correct Approach

Always create a new object.

```jsx
setUser(prev => ({
  ...prev,
  age: 26,
}));
```

---

## Nested Object Update

```jsx
setUser(prev => ({
  ...prev,
  address: {
    ...prev.address,
    city: "Bangalore",
  },
}));
```

Spread every nested level that changes.

---

## Why is Immutability Important?

React compares object references.

Old Object !== New Object

↓

React knows state changed.

Benefits:

- Fast reference comparison
- Predictable state updates
- Better performance
- Easier debugging

---

## Common Mistakes

❌ Direct mutation

```jsx
user.age = 26;
setUser(user);
```

❌ Forgetting the spread operator

```jsx
setUser({
  age: 26,
});
```

✅ Correct

```jsx
setUser(prev => ({
  ...prev,
  age: 26,
}));
```

---

## Interview Answer

React state should never be mutated directly. Instead, create a new object using the spread operator and update only the required properties. React relies on reference comparison to detect state changes, making immutable updates essential for correct rendering and performance.

---

## Key Takeaways

- `useState` replaces the entire object.
- Never mutate state directly.
- Always create a new object.
- Use the spread operator to preserve existing properties.
- Spread every nested level that changes.
- React uses reference comparison (`!==`) to detect object state changes.