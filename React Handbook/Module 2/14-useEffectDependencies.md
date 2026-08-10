# Dependency Array in useEffect

## What is a Dependency Array?

The dependency array tells React **when to execute a useEffect**.

Syntax:

```jsx
useEffect(() => {

}, [dependencies]);
```

---

## 1. No Dependency Array

```jsx
useEffect(() => {
    console.log("Effect");
});
```

Runs after **every render**.

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {
    console.log("Effect");
}, []);
```

Runs **only once** after the initial render.

Common use case:

- API calls
- Initial setup

---

## 3. Specific Dependencies

```jsx
useEffect(() => {

}, [count]);
```

Runs whenever `count` changes.

---

## Multiple Dependencies

```jsx
useEffect(() => {

}, [count, theme]);
```

Runs when **count** or **theme** changes.

---

## Internal Flow

Render

↓

React compares previous dependencies with current dependencies.

↓

If any dependency changed

↓

Run Effect

↓

Otherwise

↓

Skip Effect

---

## Interview Answer

The dependency array controls when a `useEffect` executes. React compares the current dependency values with those from the previous render. If any dependency changes, the effect runs after rendering.

---

## Key Takeaways

- No dependency array → Runs after every render.
- Empty array (`[]`) → Runs once after the initial render.
- Specific dependencies (`[count]`) → Runs when those values change.
- React compares dependencies between renders to decide whether to execute the effect.


# Infinite Loops in useEffect

## What is an Infinite Loop?

An infinite loop occurs when a `useEffect` repeatedly updates state, causing continuous re-renders and repeated execution of the same effect.

---

## Example

```jsx
useEffect(() => {
    setCount(count + 1);
});
```

Flow:

Render

↓

Effect

↓

State Update

↓

Render

↓

Effect

↓

...

Infinite Loop

---

## Common Causes

### 1. Missing Dependency Array

```jsx
useEffect(() => {
    setCount(count + 1);
});
```

Runs after every render.

---

### 2. Updating a Dependency

```jsx
useEffect(() => {
    setCount(count + 1);
}, [count]);
```

Changing `count` causes the effect to run again.

---

## Safe Example

```jsx
useEffect(() => {
    fetch("/users")
        .then(res => res.json())
        .then(data => setUsers(data));
}, []);
```

The effect runs once, updates state once, and does not run again.

---

## Mental Model

Ask:

1. Does the effect update state?
2. Will that state update cause the same effect to run again?

If both answers are **yes**, an infinite loop is likely.

---

## Interview Answer

An infinite loop happens when a `useEffect` updates state, and that state change causes the same effect to execute repeatedly. The solution is to use the correct dependency array and avoid creating circular update cycles.

---

## Key Takeaways

- Effects can update state.
- State updates trigger re-renders.
- Incorrect dependencies can cause infinite loops.
- Always think about whether an effect depends on the state it updates.