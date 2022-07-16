import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <ul>
                <li>                    
                    <Link to="/" >home</Link>
                </li>
                <li>                    
                    <Link to="/List" >List</Link>
                </li>
            </ul>
        </nav>
    );
}


export default NavBar;