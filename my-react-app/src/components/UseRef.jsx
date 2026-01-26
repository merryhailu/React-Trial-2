import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [name,setName] = useState('');
 const count = useRef(0)
 const inputEle = useRef()



 useEffect( () => {
    count.current = count.current + 1
 })

console.log(count.current)

const handleClick = () =>{
    console.log('function done')
    inputEle.current.style.background = "blue" ;
}

  return (
    <div>
 <input type="text" onChange={(e) => setName(e.target.value)} />
 <h2>name {name}</h2>
 <h3>Count {count.current}</h3>

 <input type='number'/>


 <input type='text' ref={inputEle}/>
 
 <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default UseRef