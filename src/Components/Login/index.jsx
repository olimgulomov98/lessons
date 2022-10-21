import React from 'react'
import { useRef } from 'react'

export const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const getData = () => {
        fetch('https://houzing-app.herokuapp.com/api/public/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                "email": emailRef.current.value,
                "password": passwordRef.current.value
            })
        }).then((res) => res.json())
            .then((res) => localStorage.setItem('token', res?.authenticationToken))
    }

    const login = () => {
        console.log(emailRef.current.value, passwordRef.current.value)
        getData()
    }
  return (
    <div>
        <h2>Login</h2>
        <div style={{display: 'flex', flexDirection: 'column', width: '300px',gap: '20px'}}>
            <input ref={emailRef} type="email" placeholder='email' />
            <input ref={passwordRef} type="password" placeholder='password' />
            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}