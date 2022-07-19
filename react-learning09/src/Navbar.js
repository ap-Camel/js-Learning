import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function NavBar() {



    return(
        <header>
            <nav className="navbar">
                <div className="brand-title">Brand Name</div>
                <a href="#" className="toggle-button" onClick={() => {
                    document.getElementsByClassName('navbar-links')[0].classList.toggle('active');
                }}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </a>
                <div className="navbar-links">
                  <ul>
                    <li><Link to="/" > home </Link></li>
                    <li><Link to="/login" > Login </Link></li>
                    <li><Link to="/signup" > Signup </Link></li>
                  </ul>
                </div>
            </nav>
        </header>
    );
}


export default NavBar;