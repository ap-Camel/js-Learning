import React from 'react';
import ReactDOM from 'react-dom/client';
import Answer from './Answer.js';

function Question(prop) {

    let char = 64;
    const [answersList, setAnswersList] = React.useState(prop.question.answers.map(item => {
        char += 1;
        return(
            <Answer answer={item} key={item.id} button={String.fromCharCode(char)}/>
        );
    }));

    return(
        <div>
            <h4>{prop.question.question.description}</h4>
            {answersList}
        </div>
    );
}

export default Question;