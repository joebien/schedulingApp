import React, { Component }from 'react'
// import $ from 'jquery'
import GoogleMap from 'google-map-react'
import GoogleMapReact from 'google-map-react'

const google = window.google;

export default class Geomap extends Component {


  componentDidMount(){
    this.createMap()
  }

  componentDidUpdate(){
    this.createMap()
  }


  createMap() {



    if (this.props.meeting.name !== 'Capitol Hill Meetings'){

      let mapOptions = {
      zoom: 15,
      center: this.mapCenter()
      }

      let hillMap = new google.maps.Map(this.refs.mapCanvas, mapOptions)

      var marker = new google.maps.Marker({
        position: this.mapCenter(),
        title:this.props.meeting.name +'\n'+ this.props.meeting.address1,
        map: hillMap,
        })

    }else{    let mapOptions = {
              zoom: 14,
              center: {lat:38.890898, lng:-76.994934} 
              }
              let hillMap = new google.maps.Map(this.refs.mapCanvas, mapOptions)
            

        for (let m in this.props.allMeetings){


              var marker2 = new google.maps.Marker({
              position: this.props.allMeetings[m].geoCode,

              title:this.props.allMeetings[m].name,

              //label : this.props.allMeetings[m].name,
              map: hillMap,
             })

              marker2.addListener('click',()=>this.props.meetingSelect(this.props.allMeetings[m]))
        }
    }

    }



  mapCenter() {
    // var LatLng = this.props.geoCode.split(',')
    // var lat = LatLng[0]
    // var lng = LatLng[1]

    // return 'newgooglemaps'

    return new google.maps.LatLng(
      this.props.geoCode.lat,
      this.props.geoCode.lng
     //  lat,lng
     //  52.4526000,
     // 13.1421474
    )
  }


  render() {

    return (
        <div style = {component}>
       
          <div style = {mapBox} ref="mapCanvas"></div>

        </div> 
    )
  }

  }




const component = {
  fontFamily : '"Lato", sans-serif',
  fontSize : '26px',
   border : 'solid teal',
  height : '99%',
  // display : 'flex',
  // flexDirection : 'column',
  // justifyContent : 'space-between'

}

const map = {
  border : 'solid DarkSlateGray 1px',
  height : '95%',
  width :'99%'
}

const mapBox = {
  width : '100%',
  height : '100%'
}


