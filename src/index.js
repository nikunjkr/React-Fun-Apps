import React from 'react'
import ReactDOM from 'react-dom'

var style={
  background:'blue',
  color: 'white' ,
  fontFamily: 'Arial'
  

  
}

//  using ES6 syntax 

ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello to react's World</h1>
    <p>
      React is a javascript library that makes frontend look cool.
    </p>
  </div>,
  document.getElementById('root')

)
