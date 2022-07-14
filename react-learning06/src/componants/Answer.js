import React from 'react';
import ReactDOM from 'react-dom/client';

function Answer(prop) {

    // function for sending the choosen answer to the parent Question componant
    function chooseAnswer() {
        //console.log(`answer inside${prop.answer.description} and choosenAnswer is ${prop.choosen}`);
        prop.handleAnswer(prop.answer.description);
    }

    return(
        <div className="answer">
            <button type="button" onClick={chooseAnswer} style={prop.answer.description === prop.choosen ? {backgroundColor: 'blue'} : {backgroundColor: ''}}  >{prop.button}</button>
            <p>{prop.answer.description}</p>
        </div>
    );
}

export default Answer;