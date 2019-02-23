import React, { Component }from 'react'

const ul = {
  padding :'0%',
  fontSize : '100%',
  textAlign: 'center',
  margin : '0'
}
const li = {
  cursor:'nw-resize',
  width : '96%',
  fontSize :'small',
  textAlign : 'center',
  listStyle: 'none',
  margin : '8% 2% ',
  background : 'rgba(240, 246, 236, .5)',
  boxShadow: '5px 5px 25px LightSlateGray',
  transition : '.5s'
}
const component = {
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-around',
  width : '100%',
  background : 'rgba(255,255,255,.3)',
}

export default class MeetingList extends Component {

    // convertTime(time) {
    // var hours = parseInt(time.substr(0, 2));
    // if(time.indexOf('AM') != -1 && hours == 12) {
    //     time = time.replace('12', '0');
    // }
    // if(time.indexOf('PM')  != -1 && hours < 12) {
    //     time = time.replace(hours, (hours + 12));
    // }
    // time = time.replace(/(AM|PM)/, '');
    // return Number(time.replace(/:/,'.'))
    // }



  render() {

    const {meetingSelect} = this.props

    //meeting names selected by day
    let meetingNames = this.props.meetings ? [...this.props.meetings].map(function(m,key){

      let time = m.time || ''

      return(
              <li
              key={(time).toString()+key.toString()}
              style={li}
              onClick={()=>meetingSelect(m.id)}>
        {m.name}
              </li>

      )
    },this) : []


    let namesNtime = meetingNames.sort((a,b)=>{
      return Number(a.key) - Number(b.key)
    })

    namesNtime = namesNtime.filter((m)=>m.props.children[0] !== 'Capitol Hill Meetings')

    return (
        <div style={component}>
          <ul style={ul}>
            {namesNtime}
          </ul>

        </div>
    )
  }
}
