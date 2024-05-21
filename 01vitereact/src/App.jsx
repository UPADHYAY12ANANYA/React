import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from "./chai"

function App() {
  const username = "chai aur code"
  return (
    <>
    <Chai/>
    <h1>Chai aur react {username}</h1>
    </>
  )
}

export default App
