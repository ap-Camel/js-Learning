import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../Images/logo512.png'

function Card(prop) {
    return(
        <div className="card">
            <div className="card-image">
                <img src={prop.item.imageUrl}  />
            </div>
            <div className="card-info">
                <div className="maps-link">
                    <img src={logo}/> 
                    <h4>{prop.item.location}</h4>
                    <a href={prop.item.googleMapsUrl} target="_blank">view on google maps</a>
                </div>
                <h2>{prop.item.title}</h2>
                <p>{`${prop.item.startDate} - ${prop.item.endDate}`}</p>
                <p>{prop.item.description}</p>
            </div>
        </div>
    );
}

export default Card;