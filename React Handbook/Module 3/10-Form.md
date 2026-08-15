# Forms & Form Handling in React

## 1. What is Form Handling?

Form handling in React means managing:

- Input values
- User changes
- Form submission
- Validation
- Error states
- Form data

React forms are commonly handled using **controlled components**.

---

# 2. Controlled Form

In a controlled form, **React state is the source of truth**.

The input's value comes from state, and user changes update that state.

```jsx
const [email, setEmail] = useState("");

<input value={email} onChange={(e) => setEmail(e.target.value)} />;
```
