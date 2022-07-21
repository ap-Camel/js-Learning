import React from 'react';
import { Navigate } from 'react-router-dom';


function Signup() {

    const [user, setUser] = React.useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        password: ""
    })

    const [navigate, setNavigate] = React.useState(false);

    function handleForm(event) {
       
        setUser(user => {
            return {...user, [event.target.name]: event.target.value}
        });
        
    }

    async function signUp(event) {
        event.preventDefault();

        if(user.firstName !== "" && user.lastName !== "" && user.role !== "" && user.email !== "" && user.password !== "") {
            if(user.password.length > 7) {
                const res = await fetch("https://localhost:7068/users", {
                    method: "POST",
                    headers:{
                        'accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(user)
                });
                if(res.status === 200) {
                    alert("user was creates successfully");
                    setNavigate(true);                    
                } else if(res.status === 409) {
                    alert("email is already in use");
                } else {
                    alert("something went wrong" + res.status);
                }
            } else {
                alert("password must be atleast 8 characters");
            }
        } else {
            alert("please fill in all the boxes");
        }


    }

    return(
        <form className='login-container' onSubmit={signUp} >
            {navigate && (<Navigate to="/login" replace={true}/>)}
            <p>first name</p>
            <input
                type='text'
                name="firstName"
                value={user.firstName}
                onChange={handleForm}
                placeholder="first name"
                
            />
            <p>lastname</p>
            <input 
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleForm}
                placeholder="last name"

            />
            <p>role</p>
            <select
                name="role"
                onChange={handleForm}
                value={user.role}
                >
                <option value="">-- choose --</option>
                <option value="student">student</option>
                <option value="teacher">teacher</option>
            </select>
            <p>email</p>
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleForm}
                placeholder="example@example.com"
            />
            <p>password</p>
            <input 
                type="password"
                name="password"
                value={user.password}
                onChange={handleForm}
                placeholder="password"
            />
            <button type='submit' >signup</button>
        </form>
    );
}


export default Signup;