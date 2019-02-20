import React, { Component }from 'react'
import GoogleMapReact from 'google-map-react'

export default class Li extends Component {

  state = {}
  hover = (mouse)=>{
    if (mouse === 'enter') this.setState({hover:true})
    if (mouse === 'leave') this.setState({hover:false})
  }
  render(){

    console.log('thispropsLIstyle ',this.props.liStyle)

    const color = this.props.color

    const liDivStyle = this.state.hover?
        {...liDivHover,...{border:'solid 1px ' + color}} :
        {...liDiv,...{border:'solid 1px ' + color}}
    return(

            <li
                    onClick={()=>this.props.meetingSelect(this.props.getMeeting(this.props.m))}
                    key={this.props.ke}
                    style={this.props.liStyle}
            >
                <div
                        onMouseEnter={()=>this.hover('enter')}
                        onMouseLeave={()=>this.hover('leave')}
                        style={liDivStyle}
                >
                  {this.props.m}
                </div>
            </li>
    )
  }
}

const li = {

  //border : 'solid 1px',
  margin : '2%',
  listStyleType: 'none',

  //background : 'white',
}

const liDiv = {
  position : 'relative',
  paddingRight: '1%',
  background : '#E4D9D9',
  display : 'inline-block',
  left : 0,
  transition : '.3s'
}

const liDivHover = {
        ...liDiv,
        ...{
          left : 10,
          background : 'white'
        }

}
