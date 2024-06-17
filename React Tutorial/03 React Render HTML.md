React Render HTML
React renders HTML to the web page by using a function called ReactDOM.render().

ReactDOM.render()
This function takes two arguments:

HTML content: The content you want to display on the page.
HTML element: The element where you want to place the HTML content (first argument).
Where Will It Find That Element?
The element is located in the index.html file inside the public folder. In that file, you will find a <div> with the id root. This is where all the React content will be rendered.

Here’s how you use ReactDOM.render():


ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

