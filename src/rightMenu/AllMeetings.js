import React, { Component }from 'react'
// import $ from 'jquery'

export default class AllMeetings extends Component {


  render() {
    //Create array of unique meeting names
    const allUniqueMeetingNames = []

    if(this.props.allmeetings) {
      [...this.props.allmeetings].forEach((m) => {
        if (!allUniqueMeetingNames.includes(m.name)&& m.id !== 'blank') allUniqueMeetingNames.push(m)
      })
    }

    //Map meeting to array of <li>s
    const allMeetings = allUniqueMeetingNames.map(function(m,key){
      return <li
               key = {key}
               className='li'
               onClick={()=>this.props.meetingSelect(m.id)}>
      {m.name}
            </li>
    },this)

      return (

        <div style = {component}>

          <div style = {label}>Search by Meeting</div>

          <ul style = {ul}> {allMeetings} </ul>

        </div>
      )
  }
}

const component = {
  position : 'relative',
  height : '100%',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  fontFamily : '"Lato", sans-serif',
}

const label = {
  width : '95%',
  marginTop :'12%',
  //border : 'solid green .5px',
  fontSize : '25px',
  textAlign : 'center',
  background : 'rgba(255, 255, 255, .2)'
}

const ul = {
  
  // position : 'relative',
  width : '75%',

  display: 'flex',
  flexDirection: 'column',

  marginTop : '8%',
  marginRight: '17%',

  cursor:'pointer',
  overflowY : 'auto',


}


