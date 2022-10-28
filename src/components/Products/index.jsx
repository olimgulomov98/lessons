import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../utils/data'
import { Container, ProductsContainer } from './style'

export const Products = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Container.Title>Products</Container.Title>
      <ProductsContainer>
        {
          data.map(({id, title, price}) => {
            return(
              <ProductsContainer.Product key={id} onClick={() => navigate(`/products/:${id}`)}>
                <ProductsContainer.ImageWrapper></ProductsContainer.ImageWrapper>
                <ProductsContainer.Title>{title}</ProductsContainer.Title>
                <ProductsContainer.Title>{price}</ProductsContainer.Title>
              </ProductsContainer.Product>
            )
          })
        }
      </ProductsContainer>
    </Container>
  )
}
