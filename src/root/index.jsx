import React from 'react'
import { Add } from '../Components/Add'
import { Axios } from '../Components/Axios'
import Delete from '../Components/Delete'
import { Edit } from '../Components/Edit'
import { Fetch } from '../Components/Fetch'
import { Login } from '../Components/Login'

export const Root = () => {
  return (
    <div>
        <Add />
        {/* <Edit /> */}
      <Login />
        {/* <Delete /> */}
        <hr />
        <Fetch />

    </div>
  )
}