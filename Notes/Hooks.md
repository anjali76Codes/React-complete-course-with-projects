const [count , setCount] = useState(0)




## useState()
useState is a way to add state to functional components in React. It allows us to change the state multiple times for multiple variables without reloading the page.


Hooks :

* Rules of Hooks ->
Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

Only call Hooks at the top level
Only call Hooks from React functions



***** Functions whose names start with use are called Hooks in React.


## useState()

This is a way by using this we can change the state multiple times at a time to multiple variables without reloading the page.

## Hooks

### Rules of Hooks
Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

1. **Only call Hooks at the top level:**
   - Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. Instead, always use Hooks at the top level of your React function, before any early returns.
   
2. **Only call Hooks from React functions:**
   - You can only call Hooks while React is rendering a function component.

### Functions whose names start with `use` are called Hooks in React.

#### Example:

```jsx
function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}

Example : 

function Counter() {
  // ✅ Good: top-level in a function component
  const [count, setCount] = useState(0);
  // ...
}



Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. Instead, always use Hooks at the top level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:


** Note ::

✅ Call them at the top level in the body of a function component.
✅ Call them at the top level in the body of a custom Hook.









