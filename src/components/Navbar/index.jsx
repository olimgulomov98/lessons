import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { navbar } from '../../utils/navbar'
import { Container, Nav } from './style'

export const Navbar = () => {
  return (
    <Container>
        <Nav>
        <NavLink style={({isActive}) => {return {color: isActive ? 'crimson' : 'white', textDecoration: isActive ? 'underline' : 'none'}}} className={'nav-item'} to='/'>Logo</NavLink>

          {
            navbar.map(({id, title, path, hidden}) => {
              return !hidden && (
                <NavLink key={id} style={({isActive}) => {return {color: isActive ? 'crimson' : 'white', textDecoration: isActive ? 'underline' : 'none'}}} className={'nav-item'} to={path}>{title}</NavLink>
              )
            })
          }
         </Nav>
        <Outlet />
    </Container>
  )
}

