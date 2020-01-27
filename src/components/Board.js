import React from 'react';

function Board() {
  function sayHello(e) {
    console.log('hello')
    console.log(e.target.id)
  }
  return (
    <div className="grid-container">
      <button id="1" onClick={sayHello}></button>
      <button id="2" onClick={sayHello}></button>
      <button id="3" onClick={sayHello}></button>
      <button id="4" onClick={sayHello}></button>
      <button id="5" onClick={sayHello}></button>
      <button id="6" onClick={sayHello}></button>
      <button id="7" onClick={sayHello}></button>
      <button id="8" onClick={sayHello}></button>
      <button id="9" onClick={sayHello}></button>
    </div>
  )
}

export default Board;
