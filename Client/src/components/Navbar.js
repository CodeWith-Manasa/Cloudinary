import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white my-1" to="/Home">
         <div style={{fontSize:"22px",fontFamily:"initial"}}>Cloudinary</div> 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active text-white" to="/Home">
              <div style={{fontSize:"22px",fontFamily:"initial"}}> Home</div>
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/Display"
              >
                <div style={{fontSize:"22px",fontFamily:"initial"}}>Display</div> 
               
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
