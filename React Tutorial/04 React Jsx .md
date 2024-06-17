React JSX
What is JSX?
JSX stands for JavaScript XML. It is similar in appearance to HTML, hence provides a way to easily write HTML in react. 

Coding in JSX
Earlier we had to make an HTML element or append it into existing ones with methods like createElement() / appendChild() 

const elem = React.createElement('h1', {}, 'Hello World!');
Now we can just do it directly, like this: 

const elem = <h1>Hello World!</h1>
Expressions in JSX
You can write the expression in {}

You can write simple mathematical operations to variable to states to complicated operations with ternary operators and it will return the result, like:

Mathematical Operations:

const elem = <h1>React was released in {2010+3}</h1>
Variables/States:

const name = "CWH"
const elem = <h1>My name is {name}</h1>
Ternary Operators:

const elem = <h1>Hello {name ? name : 'World'}</h1>