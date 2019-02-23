import React, {Component} from 'react'
import MeetingList from './MeetingList'
import $ from "jquery"


//STYLES/////
    const component = {
      position : 'relative',
      height : '100%',
      display : 'flex',
      flexDirection : 'column',
      alignItems: 'center',
      fontFamily: '"Lato", sans-serif',
      fontStyle: 'Normal',
      fontSize: '25px',
    }
    const label = {
      width : '95%',
      border : 'solid green .5px',
      background : 'rgba(240, 246, 236, .5)',
      fontSize : '25px',
      textAlign : 'center',
      marginTop :'12%'
    }
    const dayBox = {
      position: 'relative',
      width: '98%',
      height : '45%',
      display: 'flex',
      flexDirection: 'column',
      marginTop :'8%',
      cursor:'pointer',
    }
    const mList = {
      position : 'relative',
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
      width : '85%',
      fontSize :'100%',
      cursor:'pointer',
    }
    const dayHead ={
      fontSize : '12px',
      border : 'solid teal .5px',
      textAlign : 'center',
      width : '100%',
      margin : '9% 0% ',
      padding : '2%',
      background: 'rgba(170,255,236,.2)'
    }



export default class Dropdownmenu extends Component{

  constructor(props) {
      super(props)
      this.state = {
        data : 'data',
        fold : false,
      }

  }
 //Toggle collapse days {dayBox}

  hover(ref){
    if (ref) {ref.addEventListener('mouseover',()=>ref.style.transform = 'scale(1.12)')

      if (ref) ref.addEventListener('mouseout',()=>ref.style.transform = 'scale(.98)')
    }
  }


  foldList(dir){console.log('fold')
    if(dir === 'open') {

    this.setState({fold:false})}else

    {this.setState({fold:!this.state.fold})}

    }


  nextKey = 0

  loadData=(day)=>{
    console.log('newloadDay ',day)
    const filter = this.lowerCase(day)


    $.ajax('/meetings', {data: filter})
            .then(res=> {
              console.log('data ',res)
              this.setState({meetings: res})
            })
  }

  lowerCase=(word)=>{
    return String.fromCharCode( word.charCodeAt(0) + 32 ) + word.slice(1)
  }

  render(){

    return (
            <div style={component}>
              <div style={label}> Search by Day </div>
              <div  style={dayBox}>

                <ul className='ul'>

                  <DayList loadData={this.loadData}/>

                </ul>

              </div>

              <div style={mList}>
                <div style={dayHead}>{this.props.focusDay} </div>

                <MeetingList meetings={this.state.meetings} {...this.props}/>


              </div>
            </div>
    )
  }
}

class DayList extends Component{
  shouldComponentUpdate(){return false}
  render(){

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let key = 0
    const dayItems = days.map(
            (day)=>
                    <li key={key++} className='liDay'>
                      <div className='day'
                           onClick={()=>this.props.loadData(day)}>
                        {day}
                      </div>
                    </li>
    )

    return(
         dayItems
    )
  }
}
