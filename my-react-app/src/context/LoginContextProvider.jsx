import React, { Children, createContext, useState } from 'react'

export const LoginContext = createContext();

const LoginContextProvider = ({Children}) => {
const [userDetails, setUserDetails] = useState(true)

  return (
   <LoginContextProvider value = {userDetails}>
    {Children}
   </LoginContextProvider>
  )
}

export default LoginContextProvider