import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Settings from '../Components/Settings/Settings'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Settings />
        <Header />
      </div>
    )
  }
}