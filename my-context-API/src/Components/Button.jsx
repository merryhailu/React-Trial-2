import React from 'react'

function Button({isLoading , onClickSubmit }) {
  return (
    <div>
        <button  onClick={onClickSubmit} disabled={isLoading}>
             {isLoading ? "...loading" : "submit"}
        </button>
    </div>
  )
}

export default Button