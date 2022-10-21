import React from 'react'
import { Axios } from '../Components/Axios'
import { Fetch } from '../Components/Fetch'
import { Login } from '../Components/Login'

export const Root = () => {
  return (
    <div>
      <Login />
        <Fetch />
        {/* <Axios /> */}
    </div>
  )
}