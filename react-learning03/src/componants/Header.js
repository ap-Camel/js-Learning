import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../Images/logo512.png';

function Header() {
    return(
        <nav className='nav'>
            <img src={logo} />
            <p>my travel journal</p>
        </nav>
    );
}


export default Header;