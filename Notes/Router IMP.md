// installation 

npm i react-router-dom



// imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



// Routes methods

   <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>

        