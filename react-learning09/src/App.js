import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Login from './componants/Login';
import Signup from './componants/Signup';
import Home from './componants/Home';
import NavBar from './Navbar';
import Student from './componants/student/Student';
import Teacher from './componants/teacher/Teacher';
import Error from './componants/Error';


function App() {

    const {role, loggedIn} = useSelector(state => state.user);

    return(        
        <Router>
          <NavBar />
          {!loggedIn && (
            <Routes>
                <Route path='/' element={ <Home /> } > </Route>
                <Route path='/login' element={ <Login /> } ></Route>
                <Route path='/signup' element={ <Signup /> } ></Route>
                <Route path='*' element={ <Error /> } ></Route>
            </Routes>
          )}
          {loggedIn && role === 'student' && (
            <Routes>
                <Route path='/' element={ <Home /> } > </Route>
                <Route path='/login' element={ <Home /> } > </Route>
                <Route path='/student' element={ <Student /> } > </Route>
                <Route path='*' element={ <Error /> } ></Route>
            </Routes>
          )}
          {loggedIn && role === 'teacher' && (
            <Routes>
                <Route path='/' element={ <Home /> } > </Route>
                <Route path='/login' element={ <Home /> } > </Route>
                <Route path='/teacher' element={ <Teacher /> } > </Route>
                <Route path='*' element={ <Error /> } ></Route>
            </Routes>
          )}
        </Router>               
    );
}


export default App;