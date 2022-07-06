import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function MyApp() {
  return(
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>i dont know</li>
        <li>i still dont know</li>
        <li>im just starting how should i knonw?</li>
      </ul>
    </div>
  );
}

function ReactLogo() {
  return(
    <img src="logo512.png" alt="Girl in a jacket" width="80" height="80"/>
  );
}

function Header() {
  return(
    <nav className="nav01">
      <ReactLogo />
      <ul className="ul01">
        <li>Price</li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* *<App /> */}
    <Header />
    <MyApp />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

