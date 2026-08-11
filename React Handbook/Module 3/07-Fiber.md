# React Fiber

## What is React Fiber?

React Fiber is the reconciliation engine introduced in React 16. It breaks rendering work into smaller units, allowing React to pause, resume, prioritize, and schedule rendering efficiently.

---

## Why Fiber?

Before Fiber:

- Rendering was synchronous.
- Large updates could block the browser.

Fiber solves this by breaking rendering into small units of work.

---

## Fiber Architecture

Each React component has a Fiber node.

React processes Fiber nodes incrementally instead of rendering the entire tree at once.

---

## Time Slicing

Large rendering work is divided into smaller chunks.

React can pause rendering, let the browser handle user interactions, and then continue rendering.

---

## Benefits

- Better responsiveness
- Priority scheduling
- Time slicing
- Foundation for concurrent rendering

---

## Limitations

- Does not eliminate expensive computations.
- Commit Phase is still synchronous.

---

## Interview Answer

React Fiber is the reconciliation engine introduced in React 16. It breaks rendering work into smaller units so React can pause, resume, prioritize, and schedule updates efficiently, improving application responsiveness.
