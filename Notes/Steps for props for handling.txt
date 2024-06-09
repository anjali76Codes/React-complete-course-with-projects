Props are used to pass data and functions from one component to another.

In the JSX file, we can use   * props.something*     to access the data or functions passed down from the parent component.

 this is a method to give the style in the html
  
style={{ color:props.mode === 'dark' ? 'white' : 'brown' }}



3. Syntax for Embedding JavaScript in JSX
To embed JavaScript expressions in JSX, we use curly braces   `{}` .  This allows us to include any JavaScript code or variables directly within our JSX markup.


Example:


const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>  {/* Using props to display the title */}
      <button onClick={props.handleClick}>Click Me</button>  {/* Using props to handle button click */}
    </div>
  );
};
