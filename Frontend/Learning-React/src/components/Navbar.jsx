import React from 'react'
import './navbar.css'


function Navbar(props) {
  return (
    <div id='nav'>
        <h1>{props.navheader}</h1>
    </div>
  )
}

export default Navbar