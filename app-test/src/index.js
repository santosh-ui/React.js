// create-react-app comes with bunch of boiler-plate
// john wants me to do something barbaric 
// ie, delete all the files in src, except index.js
// also wanna wipe index.js clean ie, delete all the content of the file index.js

// After doning all that let's start our journey to our react land adventure

import React from "react";
import ReactDom from "react-dom";

// Stateless functional component
// always return jsX

// function Greeting() { // we need to capitalize the name for react to know that it is special
  // ie, it is a component and then from react component we would want to return HTML
  // technically it is not called "HTML", it is jsX
  // return <h4>This is Santosh. This is my first component.</h4>; // this is jsX
  // always MUST return something or else you'll have a big fat error
// }

// function Greeting() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//   </div>
//   );
// };

const Greeting = () => {
  return React.createElement("div", {}, 
    React.createElement("h1", {}, "Hello World"));
}

ReactDom.render(
  <Greeting/>, document.getElementById("root")
); 
// In react we must not leave the tags unclosed eg. <Greeting>, we can do 
/* <Greeting></Greeting> this or <Greeting/> this. */
// In react you must have the self-closing tag if there is no closing-tag.













// I dont like to clean the file so I'm commenting the code below for not effecting the upper part

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>, 
  //  document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
