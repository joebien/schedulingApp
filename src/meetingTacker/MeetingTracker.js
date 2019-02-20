import React, { Component }from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import { Link } from 'react-router-dom'


import MeetingAdd from './MeetingAdd'

class MeetingRow extends Component{
  render(){
    const{meeting} = this.props

    const geoCode = JSON.stringify(meeting.geoCode)
    return (

        <tr>
          <td style = {td}>
            <Link to={'/meetingEdit/' + this.props.meeting.id}>{this.props.meeting.id}</Link>
          </td>
          <td style = {td}>{meeting.name}</td>
          <td style = {td}>{meeting.days}</td>
          <td style = {td}>{meeting.address1}</td>
          <td style = {td}>{meeting.address2}</td>
        </tr>
    )
  }
}

class MeetingTable extends Component{
  render() {

    let key = 0

    //Array of MeetingRow componets each with 1 meeting's info
    const MeetingRows = [...this.props.meetings].map(function(meeting) {

      return <MeetingRow {...this.props} key={key++} meeting={meeting} />

    },this);
 
    return (
      <table>

        <thead>
        <tr><td>Edit existing meeting</td></tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Days</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
       
          {MeetingRows}
           
        </tbody>
      
      </table>
    )
  }
}

export default class MeetingTracker extends Component{

  state = {
    meetings:[],
  };

  componentDidMount() {
    this.loadData()
  }
  // Validate form
  // componentDidUpdate(prevProps) {
  //   // var oldQuery = prevProps.location.query;
  //   // var newQuery = this.props.location.query;
  //   // if (oldQuery.priority === newQuery.priority &&
  //   //      oldQuery.status === newQuery.status) {
  //   //
  //   //    return;
  //   // } else {
  //
  //     this.loadData();
  //   // }
  // }
  //

    //Post new meeting to express server
    addMeeting = (newMeeting)=> {

    $.ajax({
      type: 'POST',
      url: '/meetings',
      contentType: 'application/json',
      data: JSON.stringify(newMeeting),
      success: (data)=> {
        console.log('data ',data)
        this.loadData()
      },

      error: function(xhr, status, err) {
        console.log('error')
        // ideally, show error to user.
      }
    }).done()
}

  //Load all meeting from server to state
    loadData=()=> {
      let filter = {};

      $.ajax({
        url: '/allmeetings',
        data: filter,
        success: function(data){

          this.setState({meetings: data})
        }.bind(this)
        })
    };

  render() {

    return (
      <div style = {component}>

        <h1>Meeting Tracker</h1>

        {/*Table for creating new meeting*/}
        <MeetingAdd
                loadData ={this.loadData}
                addMeeting = {this.addMeeting}
               />
        {/*Table of all meetings in DataBase*/}
        <MeetingTable
                loadMeeting = {this.loadData}
                geocode = {this.state.geoCode}
                meetings={this.state.meetings}/>
        
      </div>
    )
  }
}


const component = {
  height : '99%',
  // border : 'solid red',
  overflow : 'scroll'
};

const td = {
  background :'Lavender'
};



