import React from 'react';
import { listContext } from './List.js';

function Person(prop) {

    const context = React.useContext(listContext);

    return(
        <div>
            <h5>{prop.data.name}</h5>
            <button type="button" onClick={() => {context.removePerson(prop.data.id)}}>remove</button>
        </div>
    );
}


export default Person;