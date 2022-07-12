import React from 'react';
import ReactDOM from 'react-dom/client';
import Question from './Question.js';

function Exam() {

    const [questionList, setQuestionList] = React.useState(<Question />);

    React.useEffect(() => {
        async function getExam() {
            const res = await fetch("https://localhost:7068/exams");
            const data = await res.json();
            const list = data.map(item => {
                return ( <Question key={item.question.id} question={item} />)
            })
            console.log(data);
            setQuestionList(list);
        }
        getExam();
    }, [])

    

    console.log(questionList);

    return(
        <div>
            {questionList}
        </div>
    );
}

export default Exam;