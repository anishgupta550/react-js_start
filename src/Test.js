import React from 'react'
import { Link } from 'react-router-dom'

const Test = (props) => {
  return (
    <div>
      <h1>Hello I am {props.name}</h1>
      <button><Link to="/Next">Next page</Link></button>
    </div>
  )
}

export default Test
