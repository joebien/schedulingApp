import React, {Component} from 'react'
// import Radium, { Style } from 'radium'
import { Link } from 'react-router-dom'

const hLine = {
  borderImage:'linear-gradient(to right, rgba(0,0,0,0)2%, darkmagenta, rgba(0,0,0,0)15%,rgba(0,0,0,0)28%, darkmagenta, rgba(0,0,0,0)57%, rgba(0,0,0,0)84%,darkmagenta,rgba(0,0,0,0)98%)11 ',
  width : '100%',
  borderBottom : 'solid 1px ',
  position:'absolute',
  zIndex : '-1'
}
const link = {
  whiteSpace : 'nowrap',
  textDecoration: 'none',
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  color:'SlateGrey',
  textShadow: '2px 3px 3px #9DB678' ,
  padding : '0 5% ',
  //border: 'solid pink'
}
const component = {
  border : 'solid purple 1px',
  opacity : '.7',
  fontFamily: '"Lato", sans-serif',
  fontSize : '16px',
  letterSpacing: '2px',
  width : '99%',
  display :'flex',
  flexDirection : 'row',
  justifyContent : 'space-around',
  alignItems : 'center'
}


export default class Navbar extends Component{

  constructor(props) {
      super(props)
      this.state = {data : 'data'}
  }

  render(){

    return (
      <div style={component}>
        <div style={hLine}/>

        <Link to='/Home'style={link}>
          HOME</Link>

        <Link to='/Meetings' className='link'>
          EDIT MEETINGS

        <span className='toolTip'>Add new event or edit existing event</span>

        </Link>

      </div>
      )

  }
}
