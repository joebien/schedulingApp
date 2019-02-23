import React, { Component } from 'react'

import Navbar from './Navbar'

export default class Header extends Component{
  render(){
    return(
      <div style={this.props.header} >

      <Navbar/>
      </div>
    )
  }
}
