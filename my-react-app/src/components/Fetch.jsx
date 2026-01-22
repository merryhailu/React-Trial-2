import React, { useEffect, useState } from 'react'

const Fetch = () => {
 const [responses, setResponses] = useState([]);

useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((data) => setResponses(data) )

} , []);


  return (
    <div>
      { responses.map((response) => {
    return (
        <h4 key={response.id}>{response.name}</h4>
     )
})}
    </div>
  )
}

export default Fetch