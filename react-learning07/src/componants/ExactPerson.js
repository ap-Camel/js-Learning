import React from 'react';
import { useParams } from 'react-router-dom';

function ExactPerson() {

    const params = useParams();

    return(
        <div>
            <h1>{params.id}</h1>
        </div>
    );
}

export default ExactPerson;