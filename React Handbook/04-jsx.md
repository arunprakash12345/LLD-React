# JSX (Part 1)

## What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to describe UI using an HTML-like syntax.

JSX is **not HTML**.

---

## Why JSX Was Introduced

JavaScript can create UI using DOM APIs or `React.createElement()`, but the syntax becomes verbose and difficult to read.

JSX provides a cleaner and more readable way to describe UI.

---

## Is JSX HTML?

No.

JSX only looks like HTML.

Browsers cannot understand JSX directly.

---

## JSX Execution Flow

JSX
    ↓
Babel
    ↓
JavaScript (`React.createElement`)
    ↓
React Elements
    ↓
ReactDOM
    ↓
Browser

---

## Is JSX Mandatory?

No.

React applications can be written without JSX using `React.createElement()`.

JSX is syntactic sugar for writing React elements more conveniently.

---

## Key Takeaways

- JSX is not HTML.
- JSX is not executed by the browser.
- JSX is transformed into JavaScript.
- JSX improves readability and developer experience.
- React works even without JSX.