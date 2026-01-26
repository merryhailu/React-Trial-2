import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DashboardItem = () => {
    const {userid} =useParams();
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}/todos`)
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((error) => console.error('error fecthing', error))
     }, [userid])
    

  return (
    <>
    <h1>History</h1>
       <p>{userid}</p>

       <ul>
{  todos.map((todo) => 

        <li key={todo.id}>
        <h3>{todo.title} </h3>
        <p> status: {todo.completed ? "completed" : "pending"}</p>
        </li>
        )
        }
       </ul>
       
  
    </>
  )
}

export default DashboardItem