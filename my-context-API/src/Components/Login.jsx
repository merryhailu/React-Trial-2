import React, {  useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import Profile from './Profile'


function Login() {
   const { setUsername, setShowProfile}= useContext(LoginContext)

   function loginFun(){
    setShowProfile(true)
   }

  return (

   
   
    <>

           <input type="text"  placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
           <input type='password' placeholder='Password'/>
<button onClick={loginFun} >Login</button>




    </>
  )
}

export default Login