import React from 'react'

const Book = ({img, title, author}) => {
  // console.log(props);
  // const {img, title, author} = props; // props Destructuring
  const clickHandler = (e) => {
    // console.log(e);
    // console.log(e.target);
    alert("Hello World!");
  }

  const complexExample = (author) => {
    console.log(author);
  }
//   onMouseOver={() => alert(author)}
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>reference example</button>
      <button onClick={() => complexExample(author)}>more complex example</button>
      {/* <p>{let x = 6;}</p> won't work */}
      {/* <p>{6+6}</p> will work */}
      {/* {props.children} */}
    </article>
  );
}

export default Book
