# Props & State

## Props

### Definition

Props (Properties) are read-only inputs passed from a parent component to a child component.

### Characteristics

- Read-only
- Passed by Parent
- Support One-Way Data Flow
- Improve Component Reusability

Example

```jsx
<Button text="Login" />
```

---

## State

### Definition

State is mutable data owned by a component that determines its UI.

### Characteristics

- Internal to Component
- Mutable using Setter Function
- Triggers Re-render
- Used for Dynamic UI

Example

```jsx
const [count, setCount] = useState(0);
```

---

## Props vs State

| Props | State |
|--------|-------|
| Parent owns it | Component owns it |
| Read-only | Mutable |
| External Data | Internal Data |
| No direct modification | Updated through Setter |

---

## Key Takeaways

- Props make components reusable.
- State makes components interactive.
- Props flow from Parent → Child.
- State changes trigger React re-renders.
- Normal variables do not trigger React re-renders.