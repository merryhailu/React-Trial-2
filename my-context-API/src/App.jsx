import { useState } from 'react'

import './App.css'
import Layout from './Components/Layout'

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

<Layout isLoading={loading} onClickSubmit={onSubmit} /> 
     
    </>
  )
}

export default App
