# Render Phase

## What is the Render Phase?

The Render Phase is the phase where React executes components, creates a new React Element Tree, compares it with the previous tree, and determines what changes are required.

The Real DOM is **not** updated during this phase.

---

## Flow

setState()

↓

React Updates State

↓

Render Phase

↓

Component Executes

↓

Returns JSX

↓

React.createElement()

↓

React Elements

↓

New React Element Tree

↓

Reconciliation

↓

Required Changes Identified

↓

Commit Phase

---

## What Happens?

- Component execution
- JSX creation
- React Elements creation
- New React Element Tree
- Reconciliation

---

## What Does NOT Happen?

- No Real DOM updates
- No Browser Paint
- No Layout
- No Composite

---

## Mental Model

Render Phase

↓

Think

↓

Calculate

↓

Compare

↓

Prepare

Commit Phase

↓

Apply Changes

---

## Interview Answer

The Render Phase is where React executes components, creates a new React Element Tree, performs reconciliation, and determines what changes are needed. It does not update the Real DOM or the browser.