import styled from "styled-components";

const Container = styled('div')`
    width: 70%;
    height: 70%;
    background: #FFFFFF;
    color: black;
`

const Title = styled.h3`
    font-size: 32px;
    color: ${({cl})=> cl ? 'green' : 'black'}
`

export {Container, Title}