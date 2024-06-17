React Hooks
Hooks were introduced in React version 16.8, allowing you to use state and other React features without writing a class. While hooks have become the preferred way to manage state and side effects in React applications, classes are still supported and will not be removed.

Key Points to Keep in Mind When Using Hooks
Importing Hooks:


Hooks must be imported from the react package.

import React, { useState, useEffect } from 'react';
Usage Restrictions:

Function Components Only: Hooks can only be used in React function components.
Top-Level Calls Only: Hooks must be called at the top level of a component, not inside conditional blocks, loops, or nested functions.
Prohibited Use:

No Conditional Calls: Hooks cannot be called inside conditional statements.
No Class Components: Hooks cannot be used inside class components.
Example of Using Hooks
Functional Component with Hooks
Here’s an example of a functional component using the useState and useEffect hooks:


import React, { useState, useEffect } from 'react';



const Blogs = () => {
  // Using useState hook to create state variables
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Using useEffect hook to perform side effects
  useEffect(() => {
    // Fetch blogs from an API
    fetch('https://api.example.com/blogs')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  // Conditionally render based on loading state
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;


Rules to Remember
Only Call Hooks at the Top Level: Do not call hooks inside loops, conditions, or nested functions.




const Blogs = () => {
  const [count, setCount] = useState(0); // Valid use

  if (count > 0) {
    // useEffect(() => { ... }); // Invalid use
  }

  return <h1>Blogs</h1>;
};



Only Call Hooks from React Functions: Hooks can be called from React function components or custom hooks.




// Custom hook example
const useCustomHook = () => {
  const [state, setState] = useState(initialState);
  // custom logic
  return [state, setState];
};

const Blogs = () => {
  const [blogs, setBlogs] = useCustomHook();
  return <h1>Blogs</h1>;
};



By adhering to these rules and guidelines, you can effectively use hooks to manage state and side effects in your React applications without the need for class components.








