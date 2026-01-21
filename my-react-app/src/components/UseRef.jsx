import React, { useState } from 'react'

const UseRef = () => {
    const [name,setName] = useState('');
  return (
    <div>
 <input type="text" onChange={(e) => setName(e.target.value)} />
 <h2>name {name}</h2>
    </div>
  )
}

export default UseRef