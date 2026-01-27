import React from 'react'
import Form from './Form'

function Layout({isLoading, onClickSubmit}) {
  return (
    <layout>
        <Form isLoading={isLoading} onClickSubmit={onClickSubmit} />
    </layout>
  )
}

export default Layout