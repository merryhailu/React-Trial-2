import { useState , createContext } from 'react'

import './App.css'
import Layout from './Components/Layout'
import Login from './Components/Login';
import Profile from './Components/Profile';
import { LoginContext } from './context/LoginContext';
import Counter from './Components/Counter';
import ProfilePage from './Components/ProfilePage';
import { UserContext } from './context/UserContext';


export const AppState = createContext();




function App() {

const userData = {
  name: "Meron Hailu",
  email: "meron@email.com"
}


// const [username, setUsername] = useState()
// const [showProfile, setShowProfile] = useState(false)

//   const [loading, setLoading]= useState(false);
// const onSubmit= () => {
//   setLoading(true)
//   setTimeout(() => {
//      setLoading(false)
//   }, 2000)
// }
  return (
    <>
{/* <AppState.Provider value={{loading , onSubmit}}>
<Layout  /> 
</AppState.Provider> */}
 
 {/* <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
   {showProfile ? <Profile/> : <Login />}
 </LoginContext.Provider> */}

{/* <Counter /> */}

<UserContext.Provider value={{userData}}>

<ProfilePage  />
</UserContext.Provider>

    </>
  )
}

export default App
