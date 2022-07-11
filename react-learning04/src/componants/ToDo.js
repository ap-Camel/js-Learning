import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';


function ToDo(props) {

    // function clicked() {
    //     console.log(this);
    // }

    function remove() {
        console.log("entered remove");
        props.handleClick(props.item.id);
    }

    return(
        <div className="toDo">
            <h4>{props.item.title}</h4>
            <button onClick={remove}>completed</button>
        </div>
    );
}

export default ToDo;