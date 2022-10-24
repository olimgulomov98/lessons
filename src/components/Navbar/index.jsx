import React from 'react'
import { Container, Login, Logo, NavItem, NavItems } from './style'

export const Navbar = () => {
  return (
    <Container>
        <NavItem  activeStyle={{color: 'crimson'}} exact to='/'>
            Logo
        </NavItem>
        <NavItems>
            <NavItem activeStyle={{color: 'crimson'}} to='/home'>Home</NavItem>
            <NavItem activeStyle={{color: 'crimson'}} to='/products'>Products</NavItem>
            <NavItem activeStyle={{color: 'crimson'}} to='/about'>About</NavItem>
        </NavItems>
        <NavItem  activeStyle={{color: 'crimson'}} to='/login'>
            <Login >Login</Login>
        </NavItem>
    </Container>
  )
}

