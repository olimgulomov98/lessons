import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`
Container.Title = styled.h1`

`
export const ProductsContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
`
ProductsContainer.Product = styled.div`
    min-width: 300px;
    width: 100%;
    max-width: 350px;
    height: 350px;
    border: 1px solid black;

    :active {
        transform: scale(0.97);
    }
`
ProductsContainer.ImageWrapper = styled.div`
    width: 100%;
    height: 250px;
    background-color: #999;
`
ProductsContainer.Title = styled.div`
    font-size: 22px;
    margin-bottom: 10px;
`