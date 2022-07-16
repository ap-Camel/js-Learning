import React from 'react';
import { listContext } from './List.js';
import { Link } from 'react-router-dom';

function Person(prop) {

    const context = React.useContext(listContext);

    return(
        <div>
            <h5>{prop.data.name}</h5>
            <button type="button" onClick={() => {context.removePerson(prop.data.id)}}>remove</button>
            <Link to={ `/List/People/Person/${prop.data.id}` } > got to person </Link>
        </div>
    );
}


export default Person;