# Initial Render

## What is Initial Render?

Initial Render is the first time React creates and displays the UI in the browser.

It happens when the component is mounted.

---

## Flow

Application Starts

↓

createRoot().render(<App />)

↓

Component Executes

↓

Returns JSX

↓

Babel converts JSX to React.createElement()

↓

React creates React Elements

↓

React builds React Element Tree

↓

ReactDOM creates Real DOM

↓

Browser renders UI

---

## Browser Rendering

Real DOM

↓

CSS Calculation

↓

Layout

↓

Paint

↓

Composite

↓

Display

---

## Initial Render vs Re-render

Initial Render

- Happens once
- Creates UI

Re-render

- Happens after updates
- Updates existing UI

---

## Interview Answer

Initial Render is the first rendering process in React. React executes the component, creates React Elements, builds the element tree, converts it into Real DOM using ReactDOM, and the browser paints the UI on the screen.