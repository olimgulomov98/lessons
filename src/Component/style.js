import styled, {css} from 'styled-components';

const common = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const description = css`
    font-size: 14px;
    color: #00000000;
`

const Container = styled.div`
    background-color: red;
    width: 100vw;
    height: 200px;
    ${common}
    ${description}
`

const Title = styled.h1`
    color: blue;
    ${common}
`

const Description = styled.p`
    font-size: 14px;
    color: black;
    margin-top: 10px;
    ${common}
`
export {Container, Title, Description}