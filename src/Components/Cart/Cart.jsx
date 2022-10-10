import React, { Component } from 'react'
import { Container } from './style'

export default class Cart extends Component {
  render() {
    console.log(this.props.title)
    return (
      <Container>
        <h1 className='title'>{this.props.title}</h1>
        <p className="description">{this.props.description}</p>
      </Container>
    )
  }
}