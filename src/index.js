import React from 'react'
import ReactDOM from 'react-dom'



const title =React.createElement(
  'h1',
  {id:'title',classname:'header'},
  'Hello to React\'s World'
)

ReactDOM.render(
  title,
  document.getElementById('root')
)
