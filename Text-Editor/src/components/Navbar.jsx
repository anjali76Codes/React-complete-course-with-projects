import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>

      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>

          {/* Dropdown for mode selection */}
          <div className="dropdown "  >
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mode Selection
            </button>
            <ul className="dropdown-menu " >
              <li><a className="dropdown-item" onClick={() => props.toggleModes('dark')} href="#">Dark Mode</a></li>
              <li><a className="dropdown-item" onClick={() => props.toggleModes('light')} href="#">Light Mode</a></li>
              <li><a className="dropdown-item" onClick={() => props.toggleModes('light blue')} href="#">light blue Mode</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
