import React, { Component } from 'react'
import {data} from '../../utils/data.js'
import Cart from '../Cart/Cart.jsx'
import { Container, Anchor } from './style.js'
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      mock: data
    }
    this.minus = this.minus.bind(this)
  }

  minus() {
    this.setState({count: this.state.count - 1})
  }
  render() {
    const plus = () => {
      this.setState({count: this.state.count + 1})
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.minus}>-</button>
        <button onClick={plus}>+</button>
        <Container>
          {
            this.state.mock.map(({id, title, description}) => (
              <Cart 
                key={id}
                id={id} 
                title={title} 
                description={description}  
              />
            ))
          }
        </Container>
      </div>
    )
  }
}