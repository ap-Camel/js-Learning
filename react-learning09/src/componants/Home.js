import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {loggOut} from '../features/user/userSlice';

function Home() {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [navigate, setNavigate] = React.useState(false);

    async function getExam() {
        if(user.loggedIn) {
            const res = await fetch("https://localhost:7068/answers/1", {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization': `bearer ${localStorage.getItem("jwt-Token")}`
                },                
            });
            switch(res.status) {
                case 200:
                    const text = res.json();
                    console.log(text);
                break;
                case 401:
                    console.log("token expired");
                    console.log(localStorage.getItem("jwt-Token"));
                    dispatch(loggOut());
                    setNavigate(true);
                break;
            }
        } else {
            alert("you are not logged in");
            setNavigate(true);
        }
    }

    return(
        <div>
            {navigate && <Navigate to="/login" replace={true} />}
            <button onClick={getExam} >get answers</button>
            <h1>your role is set to {user.role}</h1>
        </div>
    );
}

export default Home;