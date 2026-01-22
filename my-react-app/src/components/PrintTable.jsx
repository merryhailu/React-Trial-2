import React, { useEffect, useState } from 'react'

const PrintTable = ({calculateTable}) => {
   const [rows, setRows] = useState([]);

   useEffect(() => {
    console.log('print it')
    setRows(calculateTable());

   }, [calculateTable])


  return rows.map((row,index) => {
    return <p key={index}>{rows}</p>
  }
   
  )
}

export default PrintTable