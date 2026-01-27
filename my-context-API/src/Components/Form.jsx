import React, { useContext } from 'react'
import Button from './Button'
import { AppState } from '../App'

function Form() {
   const { loading }= useContext(AppState);
  return (
    <form>
        {loading ? "form is loading" : "not yet"}
        <Button  />
    </form>
  )
}

export default Form