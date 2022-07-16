import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './componants/List.js';
import NavBar from './componants/NavBar.js';
import Home from './componants/Home.js';
import Error from './componants/Error.js';
import ExactPerson from './componants/ExactPerson.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes >
        <Route path="/" element={ <Home /> } > </Route>
        <Route path="/List" element={ <List /> } >  </Route>
        <Route path="/List/People/Person/:id" element={ <ExactPerson /> } ></Route>
        <Route path="*" element={ <Error /> } ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
