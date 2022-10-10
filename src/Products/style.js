import styled from "styled-components";
import {ReactComponent as plus} from '../assets/icon-plus.svg'
import {ReactComponent as minus} from '../assets/icon-minus.svg'

const Container = styled.div`
    width: 400px;
    background-color: #EC8171;
    border-radius: 10px;
    margin: auto;
    margin-top: 50px;
    padding: 15px 10px;
`

Container.Wrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;
`

Container.Input = styled.input`
    width: 100%;
    height: 45px;
    outline: none;
    border: none;
    background-color: #FDCEC6;
    padding-left: 10px;
    font-size: 20px;
    color:#EC8171;
    box-sizing: border-box;
    border-radius: 7px;
`

Container.Add = styled.div`
    position: absolute;
    right: 5px; 
    top: 50%;
    transform: translateY(-50%);
    width: 70px;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:#EC8171;
    box-sizing: border-box;
`

Container.Products = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

Container.Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

Container.Checkbox = styled.input`
    width: 18px;
    height: 18px;
`

Container.Title = styled.h4`
    color: white;
    font-size: 23px;
    margin-left: 10px;
    text-decoration: ${({check}) => check && 'line-through'};
`

Container.Box = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`

Container.Plus = styled(plus)`
    width: 17px;
    height: 17px;

    :active {
        transform: scale(0.97);
    }
`
Container.Minus = styled(minus)`
    width: 17px;
    height: 17px;
    
    :active {
        transform: scale(0.97);
    }
`

Container.Count = styled.h5`
    font-size: 23px;
    color: white;
`

Container.Total = styled.h4`
    font-size: 24px;
    color: white;
    font-weight: 800;
    text-align: right;
`

export {Container}