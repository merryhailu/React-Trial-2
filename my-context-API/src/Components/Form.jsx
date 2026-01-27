import React from 'react'
import Button from './Button'

function Form({isLoading, onClickSubmit}) {
  return (
    <form>
        <Button isLoading={isLoading} onClickSubmit={onClickSubmit} />
    </form>
  )
}

export default Form