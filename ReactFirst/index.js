import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // 
root.render(<h1> hello everyone </h1>);


//ReactDOM.render(<h1> hello everyone </h1>, document.getElementById("root").innerHTML);
//ReactDOM.render(<p>helo you</p>, document.getElementById("root"))