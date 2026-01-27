import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

const [users, setUsers] = useState([])

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error('error fecthing', error))
 }, [])


  return (

<>
<h1>Dashboard user List</h1>
<ul>
    {users.map((user) => 
    <li key={user.id}>
        <Link to={`/dashboard/${user.id}`}>
         {user.name}
         </Link>
        </li>
    )}


</ul>
</>
  )
}

export default Dashboard