# Common Mistakes in useState

## 1. Expecting Immediate State Updates

```jsx
setCount(count + 1);

console.log(count);
```

Current render still sees the old state.

---

## 2. Using Normal Updates Instead of Functional Updates

❌

```jsx
setCount(count + 1);
setCount(count + 1);
```

✅

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

---

## 3. Mutating Objects

❌

```jsx
user.age = 26;

setUser(user);
```

✅

```jsx
setUser(prev => ({
    ...prev,
    age: 26
}));
```

---

## 4. Mutating Arrays

❌

```jsx
todos.push(todo);

setTodos(todos);
```

✅

```jsx
setTodos(prev => [...prev, todo]);
```

---

## 5. Forgetting Previous Object

❌

```jsx
setUser({
    age: 26
});
```

✅

```jsx
setUser(prev => ({
    ...prev,
    age: 26
}));
```

---

## 6. Calling Hooks Conditionally

Hooks must always execute in the same order.

---

## 7. Not Using Lazy Initialization

❌

```jsx
useState(expensiveCalculation());
```

✅

```jsx
useState(() => expensiveCalculation());
```

---

## 8. Using One Huge State Object

Keep unrelated state separate.

---

## 9. Misunderstanding Batching

React queues updates.

It does not ignore them.

---

## 10. Thinking Only One Variable Re-renders

Entire component executes again.

React updates only the changed DOM nodes.

---

# Key Takeaways

- State is a snapshot.
- Use Functional Updates when the next state depends on the previous state.
- Never mutate state directly.
- Keep Hooks at the top level.
- Use Lazy Initialization for expensive computations.
- React batches updates into one re-render.