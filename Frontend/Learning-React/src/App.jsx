import React,{ useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
import UseState from './useState.jsx'
import Count1 from './components/Count1.jsx'
import Fashion from './components/Fashion.jsx'

function App() {
  const [showFashion, setShowFashion] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setShowFashion(data))
    .catch(err => console.error(err));
  }, []);

  return (

    <div>
      <div>
        <h1>Fashion Show</h1>
      </div>

{/* JSON  */}
      {
        showFashion.map((item) => (
          <Fashion 
            key = {item.id}  
            image={item.image}
            title={item.title}
            price={item.price}/>
        ))
      }

    </div>

    // <div id='main-container'>
    //   <div id='nav-container'>
    //     <Navbar navheader= "HOME"/>
    //     <br />
    //   </div>

    //   <div id="cards-container">
    //     <Card name = "Batman1" age = "45"/>
    //     <br />
    //     <Card name = "Batman2" age ="50"/>
    //     <br />
    //     <Card name = "Batman3" age = "62"/>
    //     <br />
    //   </div>
      
    //   <div>
    //     <UseState />
    //     <Count1 />
    //   </div>
    // </div>
  )
}

export default App