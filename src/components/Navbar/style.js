import styled from "styled-components";
import { NavLink } from 'react-router-dom'


const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 130px;
`

const Logo = styled.div`
    font-size: 28px;
    color: #fff;
    font-weight: 800;
`

const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`

const NavItem = styled(NavLink)`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    list-style-type: none;
    text-decoration: none;
`

const Login = styled.div`
    width: 130px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: green;
`

export {Container, Logo, NavItems, NavItem, Login}