import { useState , createContext } from 'react'

import './App.css'
import Layout from './Components/Layout'


export const AppState = createContext();
function App() {



  const [loading, setLoading]= useState(false);

const onSubmit= () => {
  setLoading(true)

  setTimeout(() => {
     setLoading(false)
  }, 2000)
}

  return (
    <>
<AppState.Provider value={{loading , onSubmit}}>
<Layout  /> 
</AppState.Provider>
    </>
  )
}

export default App
