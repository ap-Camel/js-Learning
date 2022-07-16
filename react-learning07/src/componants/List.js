import React from 'react';
import People from './People.js';
import Person from './Person.js';
import data from '../data.js';

export const listContext = React.createContext();

function List() {

    const [actualData, setActualData] = React.useState(data);
    const [peopleData, setPeopleData] = React.useState(
        <People data={actualData} />
    );
    

    // React.useEffect(() => {
    //     setPeopleData(
    //         <People data={actualData} />
    //     );

    //     setActualData(data);
    // }, []);

    function removePerson(id) {
        console.log("entering remove from list, id is " + id);

        setActualData(actualData => {
            return actualData.filter(person => {
                return person.id !== id;
            });
        });

        setPeopleData(
            <People data={actualData} />
        );

        // setPeopleData(people => {
        //     return people.filter(person => {
        //         return person.id !== id;
        //     });
        // });
        
        
        console.log(actualData);
    } 

    return(
        <listContext.Provider value={{removePerson}}>
            {peopleData}
        </listContext.Provider>
    );
}

export default List;