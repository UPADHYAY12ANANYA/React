import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Ananya",
    age: 20
  }
  let arr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-lg mb-4'>Tailwind Test</h1>
      <Card username="Ananya" btntext="Click Me" Object={myObj}  array ={arr}/>  
      <Card username="Arya" btntext="Visit Me"/>  

    </>
  )
}

export default App
