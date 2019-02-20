import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import MeetingTracker from './meetingTacker/MeetingTracker'
import MeetingEdit from './meetingTacker/MeetingEdit'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export default class Main extends Component {

  state = {}

  render() {

   return (
              <main style={main}>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/home' component={Home}/>
                  <Route path="/meetings" component={MeetingTracker} />
                  <Route path="/meetingEdit/:id" component={MeetingEdit} />
                </Switch>
              </main>
      )
    }

}


const main ={
  boxSizing: 'border-box',
  // border :'solid #efc660 2px',
  width : '100%',
  height : '100%',
  background : 'rgba(255, 231, 158, .5)',
}