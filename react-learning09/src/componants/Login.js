import React from 'react';


function Login() {

    const [login, setLogin] = React.useState({ email: "", password: "" });

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

        let text = "";
        if(res.status === 200) {
            text = await res.json();
            console.log(text);
        }

        switch(res.status) {
            case 200:
                if(localStorage.getItem("jwt-Token") === null) {
                    localStorage.setItem("jwt-Token", "");
                } else {
                    localStorage.setItem("jwt-Token", text);
                }
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
                <a href="">no account? login</a>
            </form>
        </div>
        
    );
}



export default Login;