import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { NotFound } from '../components/NotFound'
import { navbar } from '../utils/navbar'


export const Root = () => {
    const token = localStorage.getItem('token')
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
            {
                navbar.map(({id, title, element, path, isPrivate, hidden}) => {
                    if (token) {
                        return(
                            <Route key={id} path={path} element={element} />
    
                        )    
                    }else {
                        return(
                            <Route key={id} path={path} element={isPrivate ? <Navigate to='/login' /> : element} />
    
                        )
                    }
                    
                })
            }
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>       
      <button onClick={() => localStorage.removeItem('token') }>Log out</button>
    </div>
  )
}
