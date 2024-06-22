import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name ="John Bradley"
  const moreDetails={
    age: 25,
    city: "New York",
    country: "USA"

  }

  return (
    <>
     <h2 style={{backgroundColor:"green"}}>Hello World MY NAME IS {"name"} </h2>
     <p>My height age is {moreDetails.age}</p>
     </>
  )
}

export default App
