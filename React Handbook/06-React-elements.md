# React Elements

## Definition

A React Element is a lightweight, immutable JavaScript object that describes a UI element.

It is **not** HTML and **not** a DOM node.

---

## JSX Transformation

```jsx
<h1>Hello</h1>
```

↓

```js
React.createElement("h1", null, "Hello")
```

↓

```js
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```

---

## Key Properties

- Plain JavaScript object.
- Immutable.
- Describes the UI.
- Created by `React.createElement()`.

---

## React Element vs DOM Element

React Element

- JavaScript object.
- Blueprint.
- Platform-independent.

DOM Element

- Real browser node.
- Interactive.
- Created by ReactDOM.

---

## React Element vs Component

Component

↓

Returns

↓

React Element

---

## Rendering Flow

JSX
    ↓
Babel
    ↓
React.createElement()
    ↓
React Element
    ↓
ReactDOM
    ↓
Browser DOM

---

## One-Line Revision

**A React Element is a blueprint of the UI, not the UI itself.**


## Why React Elements are JavaScript Objects

React Elements are lightweight JavaScript objects because objects are inexpensive to create and compare.

Instead of immediately creating DOM nodes, React first creates a description of the UI.

Later, ReactDOM converts that description into actual DOM nodes.

---

## Why React Elements are Immutable

React never modifies an existing React Element.

Whenever state changes, React creates a new React Element.

This allows React to compare the previous and current UI descriptions efficiently during reconciliation.

Immutability makes rendering predictable and simplifies change detection.