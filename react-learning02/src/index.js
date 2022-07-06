import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import headerImg from './Images/logo512.png';

function Header(){
  return(
    <nav>
      <HeaderImg />
    </nav>
  );
}

function HeaderImg() {
  return(
    <div className="header-nav">
      <img src={headerImg}/>
      <p>hello</p>
    </div>
  );
}

function ImageGrid() {
  return(
    <div className="imageGrid">

    </div>
  );
}

function HeroParagraph(){
  return(
    <div className="heade-with-p">
    <h1>titile titile titile titile</h1>
    <p>paragraoh paragraoh paragraoh paragraoh paragraoh paragraohparagraohparagraohparagraoh paragraoh </p>
  </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <HeroParagraph />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

