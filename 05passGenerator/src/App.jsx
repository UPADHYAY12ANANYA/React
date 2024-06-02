import { useCallback, useState, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]) //password denge toh infinite loop me fas jayenge
//useCallback me hum method ko optimise karne ki baat kar rahe hai. Isko memory me rakho, apne cache me rakho isko run karna goal nahi hai optimise karna hai

const copyPassToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
}, [password])


  //use effect me agar kisi bhi dependency me change ho toh dubara se run kardo, yaha goal run karne ka hai
  useEffect(()=>{
    passGenerator()
  }, [length, numAllowed, charAllowed, passGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref = {passwordRef}
          />
          <button 
          onClick={copyPassToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6} 
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
              />
              <label htmlFor="passLen">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={(e)=>{setNumAllowed((prev)=>!prev);}}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={(e)=>{setCharAllowed((prev)=>!prev);}}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
