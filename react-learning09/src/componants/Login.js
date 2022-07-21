import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';


function Login() {

    const [login, setLogin] = React.useState({ email: "", password: "" });

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const location = useLocation();

    function handleForm(event) {
        //console.log(event);

        setLogin(login => {
            return {...login, [event.target.name]: event.target.value}
        })
    }

    async function checkLogin(event) {
        event.preventDefault();

        console.log(JSON.stringify(login));

        const res = await fetch("https://localhost:7068/token", {
            method: "POST",
            headers:{
                'accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(login)
        });

        switch(res.status) {
            case 200:
                //let text = "";
                const text = await res.json();

                if(localStorage.getItem("jwt-Token") === null) {
                    localStorage.setItem("jwt-Token", "");
                } else {
                    localStorage.setItem("jwt-Token", text.token);
                    // console.log(text.token);
                }

                localStorage.setItem("user", JSON.stringify(text.user))
                dispatch(setUser(text.user));
            break;
            case 400:
                alert("invalid credentials", "ok");
            break;
            default:
                alert("something went wrong", "ok")
        }
        
        

        console.log(res);
    }

    return(
        <div className='login-div'>
            {user.loggedIn && <Navigate to="/" state={{from: location}} replace={true} />}
            <form className='login-container' onSubmit={checkLogin}>
                <p>email</p>
                <input 
                    type="text"
                    name="email"
                    value={login.email}
                    placeholder="email"
                    onChange={handleForm}
                 />
                <p>password</p>
                <input 
                    type="text"
                    name="password"
                    value={login.password}
                    placeholder="password"
                    onChange={handleForm}
                    />
                <button type='submit' >login</button>
                <Link to='/signup' > no account? signup</Link>
            </form>
        </div>
        
    );
}



export default Login;