import React from 'react'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
        <div className={`form-check form-switch  text-${props.mode ==='light' ? 'dark' : 'light'} `}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"  />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}



// Navbar .propTypes = {
//     titleHead : PropTypes.string.isRequired ,
//     title: PropTypes.string
// }


// Navbar . defaultProps = {
//     titleHead : 'Set the title ',
//     title : 'About text here'
// }

export default Navbar 