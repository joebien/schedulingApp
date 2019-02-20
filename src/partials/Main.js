import React, { Component } from 'react'
// import Home from '../Home.js'
import EditMeetings from '../meetingTacker/MeetingTracker.js'

export default class Main extends Component{

  constructor(props) {

      super(props)
      this.state = {route:<EditMeetings/>}

  }

  render(){
    
    return(<div>
      {this.props.children}
      </div>
    )
  }
}

