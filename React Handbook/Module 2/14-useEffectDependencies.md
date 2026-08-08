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