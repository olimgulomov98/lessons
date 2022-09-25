import React, { Component } from 'react'
import './button.css'

export default class Button extends Component {
  render() {
    console.log(this.props.title)
    return (
      <div className='container'>{ this.props.title }</div>
    )
  }
}