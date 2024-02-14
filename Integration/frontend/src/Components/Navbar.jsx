
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
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
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Applyloan">Apply for Loan</NavLink>
              </li>
            
              <li>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/AdSignin">Switch Admin</NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar