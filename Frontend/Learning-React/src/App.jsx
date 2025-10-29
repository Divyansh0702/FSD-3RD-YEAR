import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (

    <div id='main-container'>
      <div id='nav-container'>
        <Navbar navheader= "HOME"/>
        <br />
      </div>

      <div id="cards-container">
        <Card name = "Batman1" age = "45"/>
        <br />
        <Card name = "Batman2" age ="50"/>
        <br />
        <Card name = "Batman3" age = "62"/>
        <br />
      </div>
      
    </div>
  )
}

export default App