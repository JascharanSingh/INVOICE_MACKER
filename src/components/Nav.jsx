import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  return (
    <div>
      <nav className="navbar fixed-top bg-primary" data-bs-theme="dark">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">Free Invoice</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav