import React, { useContext } from 'react'
import { AppState } from '../App';


function Button() {
 const {loading , onSubmit} = useContext(AppState);


  return (
    <div>
        <button onClick={onSubmit} disabled={loading} >
           {loading ? "...Loading" : "Submit"}
        </button>
    </div>
  )
}

export default Button