import React, { Component } from 'react'
import { Container } from './style'

export default class Button extends Component {

  render() {
    console.log(this)
    return (
      <Container
        width={this.props.width}
        color={this.props.color}
        bg={this.props.bg}
      >
        {this.props.children}
      </Container>
    )
  }
}