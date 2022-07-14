import React from 'react';
import ReactDOM from 'react-dom/client';
import Question from './Question.js';

function Exam() {

    const [questionList, setQuestionList] = React.useState("");

    // react useEffect so the page doesnt refresh when we make api call to feth the data
    React.useEffect(() => {
        async function getExam() {
            const res = await fetch("https://localhost:7068/exams");
            const data = await res.json();
            const list = data.map(item => {
                return ( <Question key={item.question.id} question={item} handleQuestion={returnQuestion}/>)
            })
            console.log(data);
            setQuestionList(list);
        }
        getExam();
    }, [])

    // to prepare the JSON array which we POST to the api
    let tempAnswersList = [];
    const [answersList, setAnswersList] = React.useState("");

    // function for handling when in the question componant, an answer is choosen
    function returnQuestion(QuestionID, Answer) {
        
        let index = 0;
        let exists = false;
        // looping through the list of answers to see if the answer already exists
        tempAnswersList.map((item, i) => {
            if(tempAnswersList !== null && item.questionID === QuestionID) {
                exists = true;
                index = i;
            }
        });

        // if the answer is already in the list, update it. Else, add the new answer to the list
        if(exists === true) {
            tempAnswersList[index] = {
                questionID: QuestionID,
                answer: Answer
            }
        } else {
            tempAnswersList.push({                                 
                questionID: QuestionID,
                answer: Answer
            });
        }

        console.log(JSON.stringify(tempAnswersList));
        setAnswersList(tempAnswersList);
    }

    // function for submitting the answers to the API
    async function submitAnswers(event) {
        event.preventDefault();
        let res = await fetch("https://localhost:7068/exams", {
        method: "POST",
        headers:{
            'accept': '*/*',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(answersList),
        });

        let resJson = await res.json();
        console.log(resJson);
    }

    return(
        <form onSubmit={submitAnswers} className="exam">
            {questionList}
            <button type="submit" className='btn-submit'>submit</button>
        </form>
    );
}

export default Exam;