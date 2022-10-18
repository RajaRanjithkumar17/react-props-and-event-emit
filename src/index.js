import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



function Fun1(props){
    console.log( "name",props);
const getData=(data)=>{           //event emmit
  console.log("data",data);

}

  return <div>
  <h1>  
     {props.name} </h1>
    <h1>{props.age}</h1>
    <Fun2 name = {props.name} get={getData} />
    <Fun3/>

  </div>
}

function Fun2(props){
  return <div>
    <h3>react js</h3>
    <button onClick={()=> props.get("mani")}>get</button>
    <h1>{props.name}</h1>
  
  </div>
}
function Fun3(){
  return <div>
    <h3>react-js</h3>
  </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fun1 name={"ramm"} age = {"24"}/>);
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
