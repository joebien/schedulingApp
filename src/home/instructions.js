import React, {Component} from 'react'
// import Radium, { Style } from 'radium'
// import { IndexLink, Link } from 'react-router'
// import {StyleRoot} from 'radium'

export default class Instructions extends Component{
  
  constructor(props) {
      super(props)
      this.state = {data : 'data'}
  }

  render(){
    return (
      <div style = {component}>
        <div style = {text}>
          {this.props.focusMeeting.instructions}
        </div>
        <div style = {text2}>
          {this.props.focusMeeting.phoneNo}
        </div>
      </div>
    )

  }

}

const text = {
  textAlign : 'center'
}

const text2 = {
        ...text,...{fontSize:'smaller'}
}

const component = {
  border : 'solid white 1px',
  width : '100%',
  height : '15%',
  marginTop : '3%',
  position : 'relative',
  fontFamily: '"Lato", sans-serif',
  fontSize : '3vh',
  whiteSpace : 'pre-wrap',
  display :'flex',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent : 'space-around',
  overflowY : 'auto'
}

