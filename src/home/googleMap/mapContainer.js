import React, { Component } from 'react';

const mapBox = {
  // border:'solid red 5px',
  width:'100%',
  height:'100%'
}

export default class Container extends Component {

  state={}

  componentDidMount() {
    const ApiKey = 'AIzaSyB8eWeZkUtvjK9unC_088yqJPJdSgvce2c';
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${ApiKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', () => {
      this.setState({mapIsReady: true});
    });
    document.body.appendChild(script);
  }

  render() {
    const {geoCode, meeting, useMarker} = this.props

    //init map
    if(this.state.mapIsReady) {
      let map = new window.google.maps.Map(document.getElementById('main'), {
        center: {lat: geoCode.lat, lng: geoCode.lng},
        //center: {lat: 11, lng: 11},
        zoom: 13
      });

      const numberMarkerImg = {
        path: "M14.6,13.9l5.9-5.8c-3.6-1.4-7.3,0.2-7.3,0.2L6.9,2.9c0,0,0.3-1.8-0.7-3L0,6c0,0,1.3,1,3.1,0.7L8.4,13,c0,0-1.8,3.4-0.2,7.3L14.6,13.9z, M13.2,8.3C13.2,8.3,13.2,8.3,13.2,8.3l-4.8,4.8c0-0.1,0-0.1,0-0.1L3.1,6.7L6.9,3L13.2,8.3z, M14.6,14 24.3,23.1 24.6,24.5 23.2,24.2 14.1,14.6z",
        fillColor: 'red',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'black',
        strokeWeight: 1,
        anchor: { x:20, y: 30 },
        labelOrigin: new window.google.maps.Point(4,-6)
        }

      //attach marker

      if (useMarker) {

        let marker = new window.google.maps.Marker({ // eslint-disable-line no-unused-vars
          position: {lat: geoCode.lat, lng: geoCode.lng},
          map: map,
          title: meeting.name,
          label: {
            text: meeting.name,
            color: "teal",
            textAlign: "right",
          },
          icon: numberMarkerImg
        })
      }

    }


    return (
            <div style={mapBox} id='main'>
this de map
            </div>
    )
  }
}
