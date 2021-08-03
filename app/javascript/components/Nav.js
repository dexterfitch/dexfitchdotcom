import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <Link to="/" className="display-inline-block">
          <div className="logo-area">
            <img src="/assets/poo.png" className="poo img-fluid mx-auto d-block" />
          </div>
        </Link>
        <div className="position-absolute position-center">
          <nav className="nav flex-column text-center">
            <Link className="nav-link nav-type" to="/works">Work</Link>
            <Link className="nav-link nav-type" to="/about">Me</Link>
            <Link className="nav-link nav-type" to="/contact">Talk</Link>
          </nav>
        </div>
        <div className="position-absolute position-bottom-center text-center">
          <div className="available-now">
            <p>Available for Hire</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav