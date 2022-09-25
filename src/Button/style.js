import styled, {keyframes} from 'styled-components';

const frames = keyframes`
    from {
        background: red;
    }
    to {
        background: blue;
    }
`

const getType = (type) => {
    switch(type) {
        case 'primary': 
                return {
                    background: 'blue',
                    color: 'white',
                };
        case 'secondary': 
                return {
                    background: 'white',
                    border: '1px solid black',
                    color: 'black'
                }
        default :
                return {
                    background: ' #46A358',
                    color: 'white'
                }
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width ? width : '150px'};
    height: ${({ height }) => height ? height : '40px'};
    margin-top: ${({ mt }) => mt && mt};
    margin-right: ${({ mr }) => mr && mr};
    margin-bottom: ${({ mb }) => mb && mb};
    margin-left: ${({ ml }) => ml && ml};
    
    font-weight: 700;
    transition: all .3s ease-in-out;
    
    ${({type}) => getType(type)}
    :active {
        transform: scale(0.97);
    }
    
    @media (max-width: 1000px) {
        font-size: 15px;
    }
    animation: ${frames} 4s linear infinite;
`

export {Container}