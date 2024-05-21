import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
  const addvalue = () => {
    counter = counter+1
    console.log("value Added", counter);
    setCounter(counter)
  }

  const removevalue = ()=> {
    counter = counter-1
    console.log("value decreased", counter);
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br/>
      <button onClick={removevalue}>Remove Value {counter}</button>
    </>
  )
}

export default App
