import React, { useState } from 'react'

const Queryby = () => {
  
  const [loggedIn,setLoggedIn] = useState(false)  

  return (
    <div>
        {
            loggedIn 
            ? 
            <button>Hello User</button>
            :
            <button 
                onClick={() => setLoggedIn(true)}>
            Login
            </button>
        }
    </div>
  )
}

export default Queryby