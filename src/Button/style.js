import styled, {css} from 'styled-components';

const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    ${center}
    width: ${(props) => props.width ? props.width : '100px'};
    height: 40px;
    background: ${(props) => props.bg ? props.bg : '#46A358'};
    border-radius: 6px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: ${(props) => props.color ? props.color : '#FFFFFF'};
    margin: 10px;
`

export {Container}