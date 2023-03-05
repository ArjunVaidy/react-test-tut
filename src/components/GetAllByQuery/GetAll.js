import React from 'react'

const GetAll = () => {
  const programming = ['Javascript','Python','Java','C','C++']
  return (
    <div>
        {
            <ul>
            {programming.map(pro => (
                <li key={pro}>{pro}</li>
            ))}
            </ul>
        }
    </div>
  )
}

export default GetAll