import React, { useState } from 'react'

const InputField = () => {
  const [num,setNum] = useState(0);
  const [header,setHeader] = useState(null);
  return (
    <>
    <h1>{header}</h1>
    <div>
        <label htmlFor='keyboard'>Type any number</label>
        <input 
            type='number' 
            id='keyboard' 
            onChange={(e) => setNum(e.target.value)}
            />
    </div>
    <div>
        <button 
            onClick={() => setHeader(`Rs.${num}`)}>
         Set
        </button>
    </div>
    </>
  )
}

export default InputField