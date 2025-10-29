import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div id="card">
        <img src="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_1280.png" height={350} width={350} alt="" />
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
    </div>
  )
}

export default Card