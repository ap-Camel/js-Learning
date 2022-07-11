import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import ToDo from './ToDo.js';
import data from '../data.js';

function ToDoList() {
    const [list, setList] = React.useState(data.map( item => {
        return(
            <ToDo item={item}  key={item.id}  handleClick={removeToDo}/>
        );
    }))

    // const list = data.map( item => {
    //     return(
    //         <ToDo item={item}  key={item.id}/>
    //     );
    // })

    function removeToDo(number) {
        console.log("entered parent remove");
        console.log(number);
        setList(oldList => {
            const newList = oldList.filter( toDo => toDo.props.item.id !== number);
            console.log(newList);
            return newList;            
        });
    }

    function addToDo() {
        var input = document.getElementById("toDoInput");
        const val = input.value;
        if(!(val === "" || val === " ")) {
            setList(oldList => {
                const count = parseInt(oldList[oldList.length - 1].key);
                const newList = [...oldList, 
                <ToDo 
                    key={count + 1}
                    item={{id: count + 1, title: val}}
                    handleClick={removeToDo}
                     />
                ]
                return newList;
                //[...oldList, <ToDo key={count + 1} item={{id: count + 1, title: input.value}} />]
            })            
            input.value = "";
        }
       
    };

    

    return(
        <div className="toDoList">
            {list}
            <div className="addToDo">
                <input id='toDoInput'/>
                <button onClick={addToDo}> add </button>
            </div>
        </div>
    );
}


export default ToDoList;
