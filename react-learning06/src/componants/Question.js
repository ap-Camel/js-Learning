import React from 'react';
import ReactDOM from 'react-dom/client';
import Answer from './Answer.js';

function Question(prop) {

    const [choosenAnswer, setChoosenAnswer] = React.useState("hello");

    //console.log("choosen anwer changed");

    // prepare the list of questions to be rendered
    let char = 64;
    const [answersList, setAnswersList] = React.useState(prop.question.answers.map(item => {
        char += 1;
        return(
            <Answer answer={item} key={item.id} button={String.fromCharCode(char)} handleAnswer={returnAnswer} choosen={choosenAnswer}/>
        );
    }));

    // function for handeling when the answer is choosen in the Answer componant, then then 
    // sending the choosen answer with question id back to the Exam componant
    function returnAnswer(answer) {
        setChoosenAnswer(answer);
        //console.log(`in the question choosen answer is ${choosenAnswer} and sent answers is ${answer}`);
        prop.handleQuestion(prop.question.question.id, answer);
    }

    return(
        <div className="question">
            <h4>{prop.question.question.description}</h4>
            {answersList}
        </div>
    );
}

export default Question;