import React from 'react';
import Person from './Person.js';
import data from '../data.js';


function People(prop) {

    const [people, setPeople] = React.useState("");

    React.useEffect(() => {
        setPeople(() => {
            return data.map(person => {
                return(
                    <Person key={person.id} data={person}/>
                );
            });
        });
    }, [])

    return(
        <div>
            {people}
        </div>
    );
}


export default People;