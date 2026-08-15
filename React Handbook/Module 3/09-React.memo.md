# React.memo

## What is React.memo?

`React.memo` is a higher-order component that memoizes a component and allows React to skip rendering it when its props haven't changed.

## Why use React.memo?

A parent re-render normally causes its child components to render again.

If the child's props haven't changed, `React.memo` can skip that render.

## How it works

1. React stores the previous props.
2. Parent renders again.
3. React compares previous and new props.
4. If props are equal → skip child render.
5. If props changed → render child.

## Shallow Comparison

Primitive values are compared by value/reference equality.

Objects, arrays, and functions are compared by reference.

```js
{} === {} // false
```
