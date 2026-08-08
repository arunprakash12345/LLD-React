# Batching in React

## What is Batching?

Batching is React's optimization where multiple state updates are grouped together into a single re-render.

---

## Why do we need Batching?

Without batching:

Update
↓
Render

Update
↓
Render

Update
↓
Render

Three updates result in three renders.

With batching:

Update
↓
Update
↓
Update
↓
Single Render

This improves performance.

---

## Render Flow

User Event

↓

State Updates Queued

↓

Event Handler Completes

↓

React Processes Updates

↓

Single Re-render

↓

Updated UI

---

## Example

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Result:

- Final State = 3
- Re-renders = 1

---

## Important Points

- React queues multiple updates.
- Updates are processed in order.
- React performs one re-render after processing the queue.
- Batching improves performance by reducing unnecessary renders.

---

## Interview Answer

Batching is React's optimization that groups multiple state updates together and performs a single re-render instead of rendering after every update. This reduces unnecessary rendering work and improves performance.

---

## Key Takeaways

- Multiple updates are queued.
- React processes queued updates together.
- Only one re-render occurs.
- Batching improves performance.