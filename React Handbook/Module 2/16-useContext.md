# useContext

## What is useContext?

`useContext` is a React Hook that allows components to access shared data from the nearest Context Provider without manually passing props through intermediate components.

---

## Why use useContext?

It solves **prop drilling**.

Without Context:

App

↓

Dashboard

↓

Sidebar

↓

UserProfile

Props are passed through every component.

With Context:

Provider

↓

Any Descendant

↓

useContext()

Direct access.

---

## Steps

### Create Context

```jsx
const UserContext = createContext();
```

### Provide Value

```jsx
<UserContext.Provider value={user}>
```

### Consume Value

```jsx
const user = useContext(UserContext);
```

---

## Internal Working

- Provider stores the current value.
- `useContext()` reads the nearest Provider's value.
- When the Provider's value changes, consuming components re-render.

---

## Common Use Cases

- Authentication
- Theme
- Language
- Current User
- Permissions

---

## Props vs Context

Props:

- Parent → Child
- Manual passing

Context:

- Shared application data
- No prop drilling

---

## Common Mistakes

- Using Context for everything.
- Forgetting the Provider.
- Replacing simple props with Context unnecessarily.

---

## Interview Answer

`useContext` is used to share application-level data across components without prop drilling. Components read shared values directly from the nearest Context Provider.

---

## Key Takeaways

- Solves prop drilling.
- Uses Provider and Consumer (`useContext`).
- Best for shared data.
- Context updates re-render consuming components.