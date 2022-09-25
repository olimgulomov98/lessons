import styled from "styled-components";

const Container = styled.div`
    max-width: 1920px;
    width: 100%;
`

const Navbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 130px;
    background: #E5E5E5;
    
`

Navbar.Title = styled.h3`
    color: #46A358;
`

Navbar.UL = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    @media (max-width: 1000px) {
        display: none;
    }
`

Navbar.Li = styled.li`
    list-style-type: none;
`

const Header = styled.div`
`

Header.Title = styled.h1`
`

export {Container, Navbar, Header}