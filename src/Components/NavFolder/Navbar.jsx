import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.jpeg'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
   <>
 
 
   <nav className={`${styles.navBgColor } navbar navbar-expand-lg navbar-light fixed-top `}>
  <div className="container">
    <Link className="navbar-brand" to="home"> <img src={logo} alt="ach" className={`${styles.logoSize }`}/> </Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

          <li className="nav-item dropdown">
          <Link className={`${styles.linkHover } px-3 dropdown-toggle `} to="aboutus" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us  
          </Link>
          <ul className={`dropdown-menu `} aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item " to="founders">Founder</Link></li>
            <li><Link className="dropdown-item " to="p&c">Policies & Certifications</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`${styles.linkHover } px-3 dropdown-toggle `} to="projects" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul className={`dropdown-menu `} aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item " to="proj1">Industrial Projects</Link></li>
            <li><Link className="dropdown-item " to="proj2">Building Projects </Link></li>
            <li><Link className="dropdown-item " to="proj4">Interior Design</Link></li>
            <li><Link className="dropdown-item " to="proj5">Urban Planning</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className={`${styles.linkHover} px-3 `} to="services">Services </Link>
        </li>
        <li className="nav-item">
          <a className={`${styles.linkHover} px-3 `} href="#contactus">Contact Us </a>
        </li>
        
        <li className="nav-item">
          <a className={`${styles.linkHover} px-3 `} href="#career">Careers</a>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav> 

   </>
  )
}
