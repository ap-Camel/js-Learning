import React from 'react';
import ReactDOM from 'react-dom/client';

function Answer(prop) {
    return(
        <div className="answer">
            <button>{prop.button}</button>
            <h5>{prop.answer.description}</h5>
        </div>
    );
}

export default Answer;