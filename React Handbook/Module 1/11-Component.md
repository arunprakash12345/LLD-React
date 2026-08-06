# React Components

## Definition

A React Component is a reusable JavaScript function that returns React Elements describing a part of the UI.

---

## Rendering Flow

Component
↓
Returns JSX
↓
Babel
↓
React.createElement()
↓
React Element
↓
ReactDOM
↓
Browser

---

## Why Components?

- Reusability
- Maintainability
- Scalability
- Separation of Concerns
- Easier Testing

---

## Component Composition

Small reusable components combine to create larger applications.

Example:

App
├── Navbar
├── Sidebar
├── ProductGrid
│ ├── ProductCard
│ └── ProductCard
└── Footer

---

## Naming Rules

✔️ Component names must begin with a capital letter.

Example:

```jsx
function Navbar() {}
```

---

## Component vs React Element

Component

↓

Returns

↓

React Element

---

## Key Takeaways

- Components are JavaScript functions.
- Components return React Elements.
- Components never manipulate the DOM directly.
- Components should follow the Single Responsibility Principle.
- Components encourage reusable UI architecture.