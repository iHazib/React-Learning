import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'


function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumPerm] = useState(false);
  const [charAllowed, setCharPerm] = useState(false);
  const [password, setPassword] = useState("")

  //ref hook
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-+{}?/<>,~`\|"

    for (let i=1 ; i<= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyToClipBoard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  } , [length, numAllowed, charAllowed, passwordGenerator])

return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800'>
      <h1 className='text-center text-white mb-3 py-3'>Password Generator:</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text' 
          value={password} 
          className=' outline-none w-full py-2 px-3 text-orange-700 bg-white mb-3 rounded-md'
          placeholder='password' 
          readOnly
          ref={passRef}
        />
        <button onClick={copyToClipBoard}
        className=' outline-none bg-blue-700 text-white px-3 py-0.5 shring-0 mb-3 ml-1 rounded-md'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={32}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => {
            setLength(e.target.value)
          }}/>
          <label className='text-orange-500'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
            setNumPerm((prev) => !prev)
          }} />
          <label htmlFor='numberInput' className='text-orange-500'>Numbers</label>

          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => 
            setCharPerm((prev) => !prev)} />
          <label htmlFor='charInput' className='text-orange-500'>Characters</label>  
        </div>
      </div>
    </div>
  </>
)

}


export default App
