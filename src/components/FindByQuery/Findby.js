import React, { useEffect, useState } from 'react'

const Findby = () => {
  const [promise,setPromise] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setPromise(true)
    },1990)
  },[])

  return (
    <div>
       {
        promise 
        ?
        <p>Promise received</p>
        :
        <p>Promise not recieved</p>
       }
    </div>
  )
}

export default Findby