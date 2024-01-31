
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
 <nav className={`navbar ${showNavbar && 'active'}`}>
        <div className="container">
          <div >
            <h1 id="hh2">Agro Finance Pro</h1>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <div>☰</div>
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/AdHome">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Appliedloan">Applied Loans</NavLink>
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