import React, { Component }from 'react'

import Header from './header/Header'
import Footer from './Footer'
import Main from './Main'
import roots from './img/roots.jpg'
import diagStripes from './img/stripedPat.jpg'

export default class App extends Component {

  render() {
 
      return (

        <div style = {component}>
          <div style = {componentBknd}/>
          <div style = {inner}>
            <div style = {innerBkngd}/>

              <div style = {bkrnd}/>
            <div  style = {stripeBknd} />

              <div  style = {headerBox} >
                <Header header = {header}/>
              </div>

              <div style = {main}>
                <Main/>
              </div>

              <div style = {footer}>
                <div style = {rootBox}>
                  <div style = {vertL}/>
                   <img style = {rootL} src={roots} alt={'roots'}/>
                </div>

                  <Footer/>

                  <div style = {rootBoxR}>
                  <div style = {vertLRt}/>
                   <img style = {rootR} src={roots} alt={'roots'} />
                </div>
              </div>

          </div>
        </div>

      )
  }
}

const component = {
  height : '100vh',
  width : '100vw',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  position : 'relative'
}

const inner = {
  position : 'relative',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-between',
  alignContent : 'center',
  //border : 'solid 1px white ',
  height : '95%',
  width : '95%'
}

const componentBknd = {
  position : 'absolute',
  background : '#63323a',
  height : '100%',
  width : '100%',
  zIndex : -33
}

const innerBkngd = {
  position : 'absolute',
  height : '100%',
  width : '100%',
  background : 'white',
  zIndex : '-2'
}

const bkrnd = {
  width : '100%',
  height : '100%',
  position : 'absolute',
  background: 'linear-gradient(  #6574a1, #88bab1, #88bab1 12%, #8cb379 16%, #8cb379 18%, #c7c192 40%, #683c3b )',
  zIndex : '-1',
  opacity : '.5'
}


const stripeBknd = {
  width : '100%',
  height : '100%',
  position : 'absolute',
  zIndex : '0',
  opacity : '.1',
  backgroundImage : 'url(' + diagStripes + ')'


}

const footer = {
  display : 'flex',
  flexDirection : 'row',
  justifyContent : 'space-around',
  position : 'relative',
  //border : 'dotted red',
  height : '12%',
  width : '100%',
}

const rootL = {

 color : 'red',
 width : '100%',
 height : '100%',
 transform : 'scalex(-1)'
}

const rootR = {

 color : 'red',
 width : '100%',
 height : '100%',
 //transform : 'scalex(-1)'
}

const rootBox = {
  //border : 'solid red',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent : 'flex-end',
  width : '6%',
  height : '85%',
  position : 'absolute',
  bottom : '7%',
  left : '6%',
}

const rootBoxR = {
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent : 'flex-end',
  width : '6%',
  height : '85%',
  position : 'absolute',
  bottom : '7%',
  right : '6%',
}

const vertL = {
  marginLeft : '9%',
  height : '250%',
  width : '5%',
  //border :'solid',
  position : 'absolute',
  bottom : '100%',
  left : '41%',
  background: 'linear-gradient( rgba(0,0,0,0), black)',
  zIndex : '-1',
}

const vertLRt = {
  marginRight : '9%',
  height : '250%',
  width : '5%',
  //border :'solid',
   position : 'absolute',
  bottom : '100%',
  right : '41%',
  zIndex : '-1',
  background: 'linear-gradient( rgba(0,0,0,0), black)',
}

const header = {

  //border : 'solid green',
  
  //background: 'linear-gradient(to bottom right, lavender, thistle)',

  textAlign:'center',
  height : '98%',
  marginTop : '.2%',
  fontSize: '25px',
  fontFamily:'"Lato", sans-serif',
  fontWeight: '100',
  fontStyle: 'Normal',
  display: 'flex',
  flexDirection : 'row',
  justifyContent : 'space-around'
}


const headerBox = {
  //border : 'dotted red 1px',
  height : '3%'
}



const main = {position : 'relative',
  //border : 'dotted red',
  height : '83%'
}