import React from 'react'
import { Link } from 'react-router-dom'

const NotfoundPage = () => {
  return (
    <>
    <h1>Oops sorry</h1>
    <Link to={'/'}>
        <button>go back home</button>
    </Link>
    </>
  )
}

export default NotfoundPage