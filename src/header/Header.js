import React, { Component } from 'react'

// import { IndexLink, Link } from 'react-router'
// import Radium, { Style } from 'radium'
// import {StyleRoot} from 'radium'
// import ReactDOM, {findDOMNode} from 'react-dom'
import Navbar from './Navbar'


export default class Header extends Component{
  render(){
    return(
      <div style = {this.props.header} >

      <Navbar/>
      </div>
    )
  }
}



