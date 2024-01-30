
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div className="back">
 <nav className={`navbar ${showNavbar && 'active'}`}>
        <div className="container">
          <div className="logo">
            <h1 id="hh1">Agro Finance Pro</h1>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <div>☰</div>
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Applyloan">Apply for Loan</NavLink>
              </li>
              <li>
                <NavLink to="/eligibility">Loan Eligibility</NavLink>
              </li>
              <li>
                <NavLink to="/benefits">Benefits</NavLink>
              </li>
              <li>
                <NavLink to="/">Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar