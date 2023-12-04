import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Post from './Post'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  const clickHere = () => {
    alert('Click here')
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={clickHere}>Click Here</button>
      <Post></Post>
    </>
  )
}

export default App
