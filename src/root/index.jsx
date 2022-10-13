import React from 'react'
import { Navbar } from '../Components/Navbar'
import { UseContext } from '../Components/UseContext'
import Context from '../context/Context'

export const Root = () => {
  return (
    <div>
        <Context >
          <Navbar />
          <UseContext />
        </Context>
    </div>
  )
}
