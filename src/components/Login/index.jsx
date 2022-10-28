import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('token', JSON.stringify({
      email: emailRef.current.value,
      password: passwordRef.current.value
    }))
    // navigate('/products')
    navigate(-1) // bitta orqaga qaytarib qoyish yani kelgan joyiga
  }

  return (
    <div>
      <input ref={emailRef} type="text" placeholder='Email' />
      <input ref={passwordRef} type="text" placeholder='Password' />
      <button onClick={login}>Login</button>
    </div>
  )
}
