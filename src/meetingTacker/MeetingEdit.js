import React, { Component }from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

//Styles
const cell = {
  margin : '0 2%',
  width : '33%'
}
const td ={
  height : '40%',
  border:'solid blue',
  verticalAlign: 'top',
}
const tableBox = {
  border : 'solid red',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  height : '100%',
  width : '100%',
  justifyContent : 'space-between'
}
const flexRow = {
  border: 'solid purple',
  display: 'flex',
  flexDirection: 'row',
  //margin : '8%',
  width : '100%'
}
const td1 ={
  // height : '40%',
  border:'solid orange',
  verticalAlign: 'top',
  width : '20%'
}
const bottomBox = {
  width : '30%',
  display : 'flex',
  justifyContent :'space-around'
}
const noWrap = {
  whiteSpace: 'nowrap',
  display:'inline'
}
const component = {
  border : 'solid purple',
  width : '99%',
  display : 'flex',
  flexDirection  : 'column',
  justifyContent : 'space-around'
}
const editTable = {
  width : '90%',
  height : '90%',
  border : 'solid',
}
const checkBox = {
  border : 'solid teal',
  display : 'flex',
  flexDirection : 'column',
}
const form = {
  display : 'flex',
  flexDirection :'row'
}


export default class MeetingEdit extends Component {

  constructor(props) {
      super(props);
      this.state = {
        meeting:{
          name:'',
          days:'',
          time:'',
          address1:'',
          address2:'',
          open:'',
          type:'',
          instructions:'',
          activeDays:{
            sunday:false,
            monday:false,
            tuesday:false,
            wednesday:false,
            thursday:false,
            friday:false,
            saturday:false,
          }
      }
    }
  }

  componentDidMount() {
      this.loadData();
  }

  handleDelete = () => {
    this.deleteMeeting()
  }

  deleteMeeting = () => {
    $.ajax({
        url: '/meetings/' + this.props.match.params.id,
        type: 'delete',
        data:'test',
        params:'test',
        success: function(data) {

        }
    }).then(
            window.location.reload()
    )
  }

  //Get single meeting
  loadData = () => {
        $.ajax({
           url: '/oneMeeting',
                  type:'get',
                  data:this.props.match.params.id,
                  success:(meeting)=>this.setState({meeting:meeting})
        })
  }

  handleOnChange = (input,e) => {
  //update state with input feild changes
    let newMeeting = this.state.meeting
    newMeeting[input] = e.target.value
    this.setState({meeting:newMeeting})
}

  onChangeActiveDays = (e) => {
  //Update state with checkbox changes
        //selectDays[e.target.id] = e.target.checked

    const newMeeting = this.state.meeting
    console.log('chactivdays' ,this.state.meeting)
    newMeeting.activeDays[e.target.id] = e.target.checked
    this.setState({meeting : newMeeting})


      }

  //submit meetingEdit form
  submit = (e) => {
    e.preventDefault()
    this.putMeeting()
  }

  //put edited meeting info
  putMeeting=()=> {
    const currentMeeting = this.state.meeting
      //GET GEOCODE
      let address = currentMeeting.address1 + currentMeeting.address2

      //load const <meeting> with state.meeting values plus geoCode based on meeting address 1 and 2
      $.ajax({
        url: '/geoCode',
        data: {address : address },

         success: function(geoCode){

            const meeting = {
              id: currentMeeting.id,
              name: currentMeeting.name,
              days: currentMeeting.days,
              time: currentMeeting.time,
              address1: currentMeeting.address1,
              address2: currentMeeting.address2,
              phoneNo: currentMeeting.phoneNo,
              instructions: currentMeeting.instructions,
              geoCode:geoCode,
              activeDays: currentMeeting.activeDays,
              type: currentMeeting.type,
           }

      //PUT EDITED MEETING TO DB

            $.ajax({
              url: '/meetingEdit',
              type: 'PUT',
              contentType:'application/json',
              data: JSON.stringify(meeting),
              dataType: 'json',
              success: function(meeting) {
                this.setState(meeting);
                this.showSuccess();
              }.bind(this),
            }).then(alert('Changes Submitted'))
          }.bind(this)

        }).done(function () {
        })
  }

render() {

    let geo = {}

    let stateGeo = this.state.geoCode

    for ( let prop in stateGeo){
      geo[prop] = stateGeo[prop]
    }

    const meeting = this.state.meeting

    return (
      <div style={component}>

        MeetingEdit
          <form name="meetingChange" id='edit_form'></form>
          <div style={tableBox}>
            //Input Fields & checkboxes
            <table style={editTable}>
              <tbody>
                <tr>
                  <td style={td1}>
                    <div style={tableBox}>
                      <div style={flexRow}>
                        <div style={cell}> Name </div>
                        <input
                              type="text"
                              size="55"
                               value={meeting.name}
                               placeholder={'name'}
                               onChange={(e)=>this.handleOnChange('name',e)}/>
                      </div>
                      <div style={flexRow}>
                        <div style={cell}> Days </div>
                        <input type="text"
                               value={meeting.days}
                               placeholder={'days'}
                               onChange={(e)=>this.handleOnChange('days',e)}/>
                      </div>
                      <div style={flexRow}>
                        <div style={cell}> Time </div>
                        <input type="text"
                               value={meeting.time}
                               placeholder={'time'}
                               onChange={(e)=>this.handleOnChange('time',e)}/>
                      </div>
                    </div>
                  </td>
                  <td style={td}>

                    <div style={checkBox}>

                      <label style={noWrap}>
                        <input type="checkbox"
                             checked={this.state.meeting.activeDays.sunday}
                             onChange={this.onChangeActiveDays}
                             id="sunday"/>
                        Sunday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.monday}
                               onChange={this.onChangeActiveDays}
                               id="monday"/>
                        Monday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.tuesday}
                               onChange={this.onChangeActiveDays}
                               id="tuesday"/>
                        Tuesday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.wednesday}
                               onChange={this.onChangeActiveDays}
                               id="wednesday"/>
                        Wednesday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.thursday}
                               onChange={this.onChangeActiveDays}
                               id="thursday"/>
                        Thursday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.friday}
                               onChange={this.onChangeActiveDays}
                               id="friday"/>
                        Friday
                      </label>

                      <label style={noWrap}>
                        <input type="checkbox"
                               checked={meeting.activeDays.saturday}
                               onChange={this.onChangeActiveDays}
                               id="saturday"/>Saturday
                      </label>
                    </div>
                  </td>
                  <td style={td}>
                    <div style={tableBox}>


                        <div style={flexRow}>
                          <div style={cell}>Address</div>
                            <textarea className='narrowTextArea' value={meeting.address1}
                                    onChange={(e)=>this.handleOnChange('address1',e)}
                            />
                        </div>

                        <div style={flexRow}>
                          <div style={cell}>City State Zip</div>
                            <textarea className='narrowTextArea' value={meeting.address2}
                                    onChange={(e)=>this.handleOnChange('address2',e)}
                          />

                        </div>

                        <div style={flexRow}>
                          <div style={cell}>Phone Number</div>
                            <textarea className='narrowTextArea' value={meeting.phoneNo}
                                    onChange={(e)=>this.handleOnChange('phoneNo',e)}
                          />

                        </div>


                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div style={flexRow}>
                        <div style={cell}>Restrictions</div>

                        <textarea
                                cols='50'
                                rows='4'
                                type="text"
                                value={meeting.type}
                                placeholder={'type'}
                                onChange={(e)=>this.handleOnChange('type',e)}
                        />

                    </div>

                  </td>
                </tr>

                <tr>
                  <td>
                    <div style={flexRow}>
                      <div style={cell}>Instructions</div>

                        <textarea
                                cols='80'
                                rows='4'
                                type="text"
                                value={meeting.instructions}
                                placeholder={'instructions'}
                                onChange={(e)=>this.handleOnChange('instructions',e)}/>

                    </div>

                  </td>
                </tr>

              </tbody>
            </table>

            <div style={bottomBox} >
              <Link to="/meetings" className='button'>Back to Meeting Tracker</Link>
              <div  className='button' onClick={this.handleDelete}>Delete</div>
              <div className='button' onClick={this.submit}>Submit</div>
            </div>
          </div>
      </div>
    )
  }
}
