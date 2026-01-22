import React, { useState, useMemo, useCallback } from 'react'
import PrintTable from './PrintTable'

const UseMemo = () => {

    const [number, setNumber] = useState(1)
    const [dark, setDark]=useState(false)

  
//      const memoCalculation = useMemo(() =>{
//     return expensiveFunction(number)
// },[number])

const calculateTable = useCallback(() => {
    return [number * 1,number * 2,number * 3,number * 4 ]
}, [number])



    const cssStyle = {
backgroundColor: dark ? 'black' : 'white',
color: dark ? 'white' : 'black'
    }

    const togglebw = () => {
        setDark(!dark)
    }

  return (
    <div style={cssStyle}>

        <input type="number" onChange={(e) => {
            setNumber(e.target.value)
        }} value={number} />

        <PrintTable calculateTable= {calculateTable}/>
{/* 
        <h2>calculation: {memoCalculation}</h2> */}
        <button onClick={togglebw}>toggle</button>
    </div>
  )

// function expensiveFunction(num){
//     console.log('hello');
//     for(let i=0; i<100000; i++){
        
//     }
//     return num;
// }


}

export default UseMemo