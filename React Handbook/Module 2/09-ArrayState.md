# Array State in React

## Why use Array State?

Arrays are commonly used to store collections of data.

Examples:

- Todo List
- Shopping Cart
- Chat Messages
- Notifications
- Products

```jsx
const [todos, setTodos] = useState([]);
```

---

## Add an Item

```jsx
setTodos(prev => [...prev, newTodo]);
```

---

## Remove an Item

```jsx
setTodos(prev =>
    prev.filter(todo => todo.id !== id)
);
```

---

## Update an Item

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

## Replace Entire Array

```jsx
setTodos(newArray);
```

Useful after API calls.

---

## Common Operations

### Add

```jsx
setItems(prev => [...prev, item]);
```

### Remove

```jsx
setItems(prev =>
    prev.filter(item => item.id !== id)
);
```

### Update

```jsx
setItems(prev =>
    prev.map(item =>
        item.id === id
            ? updatedItem
            : item
    )
);
```

### Replace

```jsx
setItems(newArray);
```

---

## Common Mistakes

❌

```jsx
todos.push(item);
setTodos(todos);
```

❌

```jsx
todos.splice(index,1);
setTodos(todos);
```

❌

```jsx
todos[0]="React";
setTodos(todos);
```

---

## Interview Answer

For array state:

- Use **spread (`...`)** to add items.
- Use **`filter()`** to remove items.
- Use **`map()`** to update items.
- Replace the entire array when loading new data from an API.

---

## Key Takeaways

- Store collections using array state.
- Use `...` to add items.
- Use `filter()` to remove items.
- Use `map()` to update items.
- Use a new array when replacing the entire dataset.