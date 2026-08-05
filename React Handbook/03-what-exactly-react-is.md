# What is React?

## Definition

React is an open-source JavaScript library for building reusable, component-based user interfaces.

It helps developers create dynamic and interactive web applications by keeping the UI synchronized with application state.

---

## Why React?

React was created by Facebook to solve the complexity of manually updating the DOM in large-scale applications.

Instead of manually manipulating the DOM, developers describe the desired UI, and React efficiently updates the browser whenever the application state changes.

---

## Core Philosophy

React follows a **declarative programming** approach.

Instead of telling the browser **how** to update the UI step by step, developers describe **what** the UI should look like for a given state, and React handles the DOM updates.

---

## Responsibilities of React

React is responsible for:

- Creating reusable UI components.
- Managing application state.
- Keeping the UI synchronized with data.
- Creating React Elements.
- Determining what changed in the UI (Reconciliation).
- Passing the required DOM updates to ReactDOM.

React is **not responsible** for rendering HTML directly or interacting with the browser.

---

## React vs ReactDOM

### React

React is the core library responsible for:

- Components
- JSX transformation target (`React.createElement`)
- Hooks
- State
- Context
- React Elements
- Reconciliation

React does **not** know anything about browsers.

---

### ReactDOM

ReactDOM is the renderer for web applications.

Its responsibilities include:

- Creating Real DOM nodes.
- Updating the Real DOM.
- Communicating with the browser.

ReactDOM acts as a bridge between React and the browser.

---

## Why are React and ReactDOM separate?

React is platform-independent.

The same React library can be used with different renderers:

- ReactDOM → Web Applications
- React Native → Mobile Applications
- React PDF → PDF Rendering

This separation allows React to work across multiple platforms while keeping the core library unchanged.

---

## Why is React called a Library?

React is a library because it focuses only on building user interfaces.

It does not enforce how you should handle:

- Routing
- State Management
- HTTP Requests
- Authentication

Developers are free to choose libraries such as:

- React Router
- Redux / Zustand
- Axios / Fetch

A framework usually provides opinions and built-in solutions for most of these concerns, whereas React focuses only on the UI layer.

---

## React Rendering Flow

Developer
↓
Writes JSX
↓
Babel
↓
React.createElement()
↓
React Element
↓
ReactDOM
↓
Real DOM
↓
Browser
↓
Rendered UI

---

## Key Characteristics

- Component-Based Architecture
- Declarative Programming
- Reusable Components
- One-Way Data Flow
- Platform Independent
- Efficient UI Updates
- Virtual DOM based reconciliation

---

## Common Misconceptions

❌ React is a framework.

✔️ React is a JavaScript library.

---

❌ React replaces the browser DOM.

✔️ React works with the browser DOM through ReactDOM.

---

❌ React renders HTML.

✔️ React creates React Elements, and ReactDOM converts them into Real DOM nodes.

---

❌ React is only for websites.

✔️ React can work on multiple platforms through different renderers like ReactDOM and React Native.

---

## Interview Answer

**What is React?**

React is an open-source JavaScript library for building reusable, component-based user interfaces. It follows a declarative programming model where developers describe the desired UI, and React keeps the UI synchronized with application state. React creates React Elements to describe the UI, determines what has changed, and delegates DOM updates to ReactDOM, which communicates with the browser.

---

## One-Line Revision

**React is a declarative, component-based JavaScript library that describes the UI, manages UI updates, and delegates rendering to platform-specific renderers like ReactDOM.**