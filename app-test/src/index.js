// create-react-app comes with bunch of boiler-plate
// john wants me to do something barbaric 
// ie, delete all the files in src, except index.js
// also wanna wipe index.js clean ie, delete all the content of the file index.js

// After doning all that let's start our journey to our react land adventure

import React from "react";
import ReactDom from "react-dom";
// CSS
import "./index.css";

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

// const Greeting = () => {
//   return React.createElement("div", {}, 
//     React.createElement("h1", {}, "Hello World"));
// }

// ReactDom.render(
//   <Greeting/>, document.getElementById("root")
// ); 
// In react we must not leave the tags unclosed eg. <Greeting>, we can do 
/* <Greeting></Greeting> this or <Greeting/> this. */
// In react you must have the self-closing tag if there is no closing-tag.

// ---------------------------------------------------------------------------

// JSX Rules
// Always Return a single element
// div / section / article or Fragment
// Use camelCase for HTML attribute
// className instead of class
// Close every element
// formatting

// const Greeting = () => {
//   return (
//     <React.Fragment>
//     <section>
//       <article>
//         <div className="">
//         <h1>Hello Friends</h1>
//           <ul>
//             <li>
//               <a href="#">Hello</a>
//             </li>
//           </ul>
//           <img src="" alt=""/>
//           <input type="text" name="" id=""/>
//         </div>
//       </article>
//     </section>    
//     <div></div> 
//     {/* // only return single element 
//         or instead wrap it in <>..</>*/}
//     </React.Fragment>
//   );
// };

// ReactDom.render(
//   <Greeting/>, document.getElementById("root")
// ); 

// --------------------------------------------------------------------------------------------------

// Nested Components and React Tools
// If you want you can place your whole app in a single component
// It somewhat defeats the purpose of why you want to use the react
// in the first place. The idea is that you can split-up your app into
// nice seperate chunks of functionality

// const Greetings = () => {
//   return (
//     <section>
//       <Person/> 
//       {/* {components nested inside the root component. */}
//       <Age/>
//     </section>
//   );
// }

// const Person = () => <h1>Hello! I'm Santosh</h1>;
// const Age = () => {
//   return (
//     <p>I'm {Number(prompt("Enter your age: "))} years old.</p>
//     // {/* You can write javascpit in react inside single flower brackets like 
//     //   shown above. */}
//   );
// }

// ReactDom.render(
//   <Greetings/>, document.getElementById("root")
// ); 

// ------------------------------------------------------------------------------------------

// Mini Book Project

const BookList = () => {
  return (
    <section className="bookList">
      <Book/>
    </section>
    
  );
}

const author = "Paulo Coelho";
const Book = () => {
  const title = "The Alchemist";
  return (
    <article className="book">
      <img 
src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg" 
alt=""/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <p>{let x = 6;}</p> */}
      <p>{6+6}</p>
    </article>
  );
}
 

ReactDom.render(
  <BookList/>, document.getElementById("root")
);







// ---------------------------------------------------------------------------------------------------

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
