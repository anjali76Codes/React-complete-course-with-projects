React Router

React Router is used for page routing in a React application as it doesn't include routing by default. This guide will walk you through the process of setting up React Router and creating multiple routes in your React application.

Add React Router
To install React Router, run the following command in your terminal:

npm i -D react-router-dom


Creating Multiple Routes
To organize your code, create a folder named pages inside the src directory. Then, create individual files for each page.

Folder Structure


src/
  pages/
    Home.js
    Blogs.js
    Contact.js
    NoPage.js
  index.js
Usage
Set up your routes in src/index.js:




import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


Home.js
Create navigation links using the <Link> component:
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Home;



Blogs.js

const Blogs = () => {
    return <h1>Blogs</h1>;
};

export default Blogs;
Contact.js


const Contact = () => {
    return <h1>Contact</h1>;
};

export default Contact;



NoPage.js
This component will render for any route that doesn't exist, displaying a 404 error message.

const NoPage = () => {
    return <h1>404</h1>;
};

export default NoPage;



Conclusion
With these steps, you have set up React Router in your application and created multiple routes. This allows for navigation between different pages within your React app, providing a seamless user experience.







