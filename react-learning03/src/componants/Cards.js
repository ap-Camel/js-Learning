import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../index.css';
import Card from './Card'
import data from '../data.js';


function Cards() {
    //console.log(prop.item);
    const cards = data.map((item) => {
        return (
            <Card 
                key={item.id}
                item={item} 
            />
        )
    })

    return(
        <div className='cards'>
            {cards}
        </div>
    );
}

export default Cards;