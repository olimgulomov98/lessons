import React from 'react'
import { useState } from 'react'

export const Controlled = () => {
    const [state, setState] = useState('')
    const onChange = (e) => {
        setState(e.target.value)
    } 
    console.log(state, 'Controlled')
  return (
    <div style={{flex: 1}}>
        <h2>Controlled {state}</h2>
        <div style={{display: 'flex', flexDirection: 'column', width: '250px'}}>
            <input type="text" onChange={onChange} placeholder='Name' />
            <input type="text" onChange={onChange} placeholder='Surname' />
            <input type="text" onChange={onChange} placeholder='Email' />
            <input type="text" onChange={onChange} placeholder='Password' />
            <button>Register</button>
        </div>
    </div>
  )
}
