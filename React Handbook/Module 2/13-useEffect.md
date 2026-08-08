# useEffect

## What is useEffect?

`useEffect` is a React Hook that allows you to perform **side effects** after React has rendered the component.

---

## Why do we need useEffect?

The component function executes on every render.

If side-effect code is written directly inside the component, it will execute on every render.

Example:

```jsx
function User() {
    fetch("/users");

    return <h1>User</h1>;
}
```

Every re-render triggers another API request.

---

## What is a Side Effect?

A side effect is any operation that interacts with something outside React's rendering process.

Examples:

- API Calls
- Updating `document.title`
- Timers (`setInterval`)
- Event Listeners
- Local Storage
- WebSocket Connections

---

## Rendering Flow

State Update

↓

Component Executes

↓

Returns JSX

↓

Reconciliation

↓

ReactDOM Updates Real DOM

↓

Browser Paint

↓

useEffect Executes

---

## Component vs useEffect

Component:

- Calculates UI
- Returns JSX
- Runs every render

useEffect:

- Performs side effects
- Runs after rendering
- React controls when it executes

---

## Interview Answer

`useEffect` is a React Hook used to perform side effects after rendering. It keeps rendering pure by separating UI calculation from operations such as API calls, timers, event listeners, and DOM interactions.

---

## Key Takeaways

- Components describe the UI.
- Side effects belong in `useEffect`.
- `useEffect` runs after rendering.
- Rendering stays pure and predictable.
- React controls when effects execute.