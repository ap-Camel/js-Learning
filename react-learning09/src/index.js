import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './componants/Login';
import Signup from './componants/Signup';
import Home from './componants/Home';
import NavBar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } > </Route>
        <Route path='/login' element={ <Login /> } ></Route>
        <Route path='/signup' element={ <Signup /> } ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
