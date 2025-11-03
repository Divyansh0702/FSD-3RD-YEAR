import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from '/Component/Book.jsx'

function App() {
  return(
    <div id="books">
      <Book />
      <Book />
      <Book />
    </div>
  )
}

export default App
