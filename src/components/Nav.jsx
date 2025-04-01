import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function nav() {
  return (
    <div><nav className="navbar fixed-top bg-primary" data-bs-theme="dark">
    <a className="navbar-brand" href="#">FreeInvoice</a>
    <div>
      <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
        <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Sign In</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
      </ul>
    </div>
  </nav></div>
  )
}

export default nav