import React, { useState } from 'react'
import { useRef } from 'react'

export const Uncontrolled = () => {
    const name = useRef('')
    const surname = useRef('')
    const email = useRef('')
    const password = useRef('')
    console.log(name, 'Uncontrolled')

    const register = () => {
        console.log(name.current.value)
        console.log(surname.current.value)
        console.log(email.current.value)
        console.log(password.current.value)
    }
  return (
    <div style={{flex: 1}}>
        <h2>Uncontrolled </h2>
        <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
            <input ref={name} type="text" placeholder='Name' />
            <input ref={surname} type="text" placeholder='Surname' />
            <input ref={email} type="text" placeholder='Email' />
            <input ref={password} type="text" placeholder='Password' />
            <button onClick={register}>Register</button>
        </div>
    </div>

  )
}
