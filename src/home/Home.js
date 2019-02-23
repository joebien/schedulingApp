
import React, { Component }from 'react'
import Dropdownmenu from '../leftMenu/Dropdownmenu'
import Info from './Info'
import AllMeetings from '../rightMenu/AllMeetings'
import Instructions from './instructions'
import Container from './googleMap/mapContainer.js'
import $ from "jquery"

//Styles
const component = {
  overflow: 'hidden',
  fontFamily: '"Lato", sans-serif',
  border : 'solid purple 1px',
  height : '100%',
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-around',
  alignItems : 'center'
}
const column = {
  // background: 'rgba(0,0,0,0) rgba(152,251,152,.4)',
  border : 'solid teal 1px',
  width : '18%',
  height:'100%',
}
const inner = {
  height:'100%',
  //border : 'dotted  1px'
}
const centerColumn = {
  padding : '1%',
  //marginTop : '-.2%',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-around',
  height : '93%',
  width : '60%',
  //border : "solid teal 1px"
}
const info = {
  display : 'block',
  // border : 'solid yellow ',
  height : '30%'
}
const map = {
  marginTop : '2%',
  border : 'solid DarkSlateGray 1px',
  height : '45%'
}



export default class Home extends Component {

  constructor(props) {

    super(props)
      this.state = {
        message:'',
        isLoaded:true,
        meetings:[],
        useMarker:false,

        focusMeeting:{
          day:'',
          address1:'*****' ,
          address2:'*****' ,
          days:'*****',
          instructions:'*****',
          name:'Community Schedule',
          open:'****',
          type:'****',
          geoCode:{lat:'38.890706',lng:'-76.996498'},
        },

        allMeetings:[{
          day:'',
          address1:'*****' ,
          address2:'*****' ,
          days:'*****',
          instructions:'*****',
          name:'Capitol Hill Meetings',
          open:'****',
          type:'****',
          geoCode:{lat:'38.890706',lng:'-76.996498'}
        }],

        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }


        this.handleSelectDay = this.handleSelectDay.bind(this)
        this.lowerCase = this.lowerCase.bind(this)
        this.meetingSelect = this.meetingSelect.bind(this)
        this.loadAllMeetings = this.loadAllMeetings.bind(this)
  }

  componentDidMount() {
    this.loadAllMeetings()
  }

  loadAllMeetings=()=>{ console.log('loadAllMeetings fired')

    const filter = {}

    $.ajax('/allmeetings', {data: filter})
            .then(res => {
                      this.setState({
                        allMeetings:res,
                        isLoaded:true
                      },()=>this.meetingSelect('blank')
                      )
            })
  }

  meetingSelect = (meetingId) => {

    if(meetingId !== 'blank') this.setState({useMarker:true})
    let focusMeeting = this.state.allMeetings.filter((m)=>m.id === meetingId)
    this.setState({focusMeeting:focusMeeting[0]})
  }

  handleSelectDay=(day)=>{
     //this.setState({focusDay : day})

    this.loadData(day)
  }

  loadData=(day)=>{
    console.log('loadDay ',day)
    const filter = this.lowerCase(day)

    $.ajax('/api/meetings', {data: filter})
            .done(function(data) {
              console.log('data ',data)
              this.setState({meetings: data})
            }.bind(this));
  }

  lowerCase=(word)=>{
    return String.fromCharCode( word.charCodeAt(0) + 32 ) + word.slice(1)
  }
/////////////////////////////////////////////
  render() {

    const focusMeeting = this.state.focusMeeting ? this.state.focusMeeting : {name:'pop'}
    const geoCode =  this.state.focusMeeting ? this.state.focusMeeting.geoCode : {lat:11,lng:11}

      return (

              <div style={component}>
                {/*Left column*/}
                <div style={column}>
                  <div style={inner}>

                    <Dropdownmenu

                            handleSelect={this.handleSelectDay}
                            meetingSelect={this.meetingSelect}
                    />

                  </div>
                </div>

                <div style={centerColumn}>

                <div>{this.state.message}</div>

                <div style={info}>

                    <Info focusMeeting={focusMeeting}/>

                </div>

                <div style={map}>

                    <Container
                            useMarker={this.state.useMarker}
                            meeting={focusMeeting}
                            meetingSelect={this.meetingSelect}
                            geoCode={geoCode}
                    />

                </div>

                  <Instructions focusMeeting={focusMeeting}/>

                </div>

                {/*Right Column*/}
                <div style={column}>
                  <div style={inner}>

                    <AllMeetings
                            meetingSelect={this.meetingSelect}
                            allmeetings={this.state.allMeetings}
                    />
                  </div>
                </div>
              </div>
      )
  }
}
