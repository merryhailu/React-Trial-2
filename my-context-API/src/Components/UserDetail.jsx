import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function UserDetail() {

    const {userData} = useContext(UserContext)
  return (
    <>

    <p>Name : {userData.name}</p>
    <p>Email: {userData.email}</p>

    </>
  )
}

export default UserDetail