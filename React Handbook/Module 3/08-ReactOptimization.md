# Rendering Optimization

## What Triggers a Re-render?

- State changes
- Props changes
- Context changes
- Parent re-renders

---

## Parent → Child Re-render

When a parent re-renders, child components also execute by default.

---

## Unnecessary Re-renders

A child may re-render even if its UI and props haven't changed.

---

## React.memo

`React.memo` memoizes a component.

If the props are unchanged, React skips re-rendering the component.

---

## Flow

Parent Re-renders

↓

React.memo?

↓

Compare Props

↓

Same?

↓

Skip Child

↓

Different?

↓

Render Child

---

## React.memo vs useMemo vs useCallback

React.memo

- Memoizes a component.

useMemo

- Memoizes a value.

useCallback

- Memoizes a function.

---

## Common Misconceptions

- React.memo doesn't stop all re-renders.
- Parent re-render doesn't always mean Real DOM updates.
- Use React.memo only when it provides a performance benefit.

---

## Interview Answer

Rendering optimization in React focuses on avoiding unnecessary component executions and DOM updates. Techniques like `React.memo` help skip re-rendering components when their props haven't changed.
