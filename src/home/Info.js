import React, { Component }from 'react'
import greenLine from '../img/greenLine.jpg'

export default class Info extends Component {


  render() {

    const {focusMeeting} = this.props



      return (
        <div style = {component}>

          <div style = {top}>
            <img style = {greenL} src={greenLine} alt={'greenline'}/>
            <div style = {box}>
              {this.props.focusMeeting.days}
            </div>
            <div style = {name}>
              {this.props.focusMeeting.name}
            </div>
            <div style = {box}>
              {this.props.focusMeeting.time}
            </div>
          </div>

          <div style = {bottom}>
             {/*<img style = {greenL} src={greenLine} alt={'greenline'} />*/}
            <div style = {box2}>
              <div style={textBox}>

                {this.props.focusMeeting.address1} {<br/>}
                {this.props.focusMeeting.address2}{<br/>}
              </div>
            </div>
            <div style = {box2}>
              <div style={textBox}>

                {this.props.focusMeeting.type}

              </div>
            </div>

          </div>
        </div> 
      )
  }
}

const box2 = {
  opacity : '.8',
  border:'solid rgba(245,249,137,.3) 1px',
  padding : '.5% 2%',
  fontSize : '4vh',
  //height : '70%',
  display:'flex',
  alignItems:'center',
  boxShadow: '-5px 5px 11px rgba(35,46,35, 0.5)',
  background : 'rgba(255,255,255,.1)',
}

const textBox = {
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-around',
  fontSize : '3vh',
  background : 'rgba(255,255,219,.5)',
  boxShadow : '0px 0px 6px 3px rgba(255,255,219,.4)',
}

const name = {
  background : 'rgba(255,255,255,.3)',
  width : '47%',
  fontSize : '4.5vh',
  padding : '0',
  textAlign : 'center',
  opacity : '.8',
  border:'solid rgba(245,249,255,.5) 5px',
  outline : 'solid teal 1px',
  outlineOffset: '2px',
}

const box = {
  opacity : '.8',
  border:'solid seagreen 1px',
  padding : '0 1%',
  fontSize : '2.1vh',
  height : '70%',
  Width :'14%',
  display:'flex',
  flexDirection : 'row',
  justifyContent: 'flex-end',
  alignItems:'center',
  boxShadow: '-5px 5px 11px rgba(35,46,35, 0.5)',
  background : 'rgba(255,255,255,.1)',
}

const greenL = {position:'absolute',
  Zindex:'-111',
  width : '100%',
  opacity : '.4'
}

const top = {
  position: 'relative',
  background : 'rgba(255,255,255,.5)',
  border : 'solid rgba(255,255,255,.1)1px',
  width : '100%',
  height : '50%',
  display : 'flex',
  justifyContent : 'space-around',
  alignItems:'center',
  marginBottom : '1%'
}

const bottom = {
  position: 'relative',
  boxSizing: 'border-box',
  width : '100%',
  height : '50%',
  display : 'flex',
  justifyContent : 'space-around',
  alignItems:'center',
}

const component = {
  fontFamily : '"Lato", sans-serif',
  fontSize : '26px',
  height : '99%',
}

