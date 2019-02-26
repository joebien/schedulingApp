import React, { Component }from 'react'
import $ from "jquery"

const defaultAddress = '1 East capitol washington dc 20002'


    //Styles////////////
    const flexRow = {
      // border:'solid red',
      display:'flex',
      flexDirection : 'row',
      justifyContent : 'space-between',
      //margin : '8%',
      width : '100%'
    }
    const label = {
      // border:'solid red',
      display:'flex',
      flexDirection : 'row',
      justifyContent : 'flex-end'
    }
    const divCol = {
      display: 'flex',
      flexDirection: 'column',
    }
    const input = {
      display : 'flex',
      flexDirection : 'row'
    }
    const td = {
      border:'solid',
      whiteSpace:'pre'
    }
    const table = {
      border : 'solid',
    }
    const checkBox = {
      display : 'flex',
      flexDirection : 'column'
    }


export default class MeetingAdd extends Component{

  state=({
    geoCode:{lat:'123',lng:'456'}
  })

  handleSubmit = (e) => {

    const addMeeting = this.props.addMeeting

    e.preventDefault();

    //load all data from addMeeting form to variable
    const form = document.forms.meetingAdd

    const activeDays = this.getFormActiveDays(form)

    //Get geocode from address
    const getGeoCode = new Promise((resolve, reject) => {

      let address = form.address1.value + form.address2.value || defaultAddress

        $.ajax({
          url: '/geoCode',
          data: {address:address},

          success: function (data) {
            resolve(data)
            //catch bad address
            // if (data.lng === undefined) alert('Problem with address')
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            let errorText = jqXHR.responseText.split('<br>')[0]
            console.log(errorText)
          }

        })

    })

    //Call geocode, then post new meeting with geocode to db


    getGeoCode.then((latlng)=>{

      addMeeting({
          id: form.id.value,
          name: form.name.value,
          days: form.days.value,
          time: form.time.value,
          address1: form.address1.value,
          address2: form.address2.value,
          phoneNo:form.phoneNo.value,
          instructions: form.instructions.value,
          activeDays: activeDays,
          type: form.type.value,
          geoCode: latlng
                })

      this.props.loadData()

      document.forms.meetingAdd.reset()

    })

  } //End handle submit

  //Load active days with checked days on form (recursive)
  getFormActiveDays = (form,days,selectDays) => {


    days = days || ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    selectDays = selectDays||{}

    //Terminal - array of days
    if (days.length === 0) return selectDays

    const day = days.shift()
    selectDays[day] = form[day].checked

    return this.getFormActiveDays(form, days, selectDays)
  }

  focus(node){
      if (node) node.addEventListener('click', ()=>{
    node.removeAttribute('placeholder')})
  }

  render() {
    //Form to create new meeting and submit to server
      return (
        <div >Create new meeting

          <form name="meetingAdd" id='add_form' >

          </form>

          <table style={table}>
            <tbody>
              <tr>
                <td style={td}>
                  <div style={divCol}>
                    <div style={label}>Id (not shown on schedule)</div>
                    <div style={label}>Name</div>
                    <div style={label}>Days</div>
                    <div style={label}>Time</div>
                  </div>
                </td>

                <td style={td}>
                  <div style={divCol}>
                    <input ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="id"
                           label="id"
                           form='add_form'
                           placeholder="id"
                           required/>

                    <input ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="name"
                           label="name"
                           form='add_form'
                           placeholder="name"
                           required/>

                    <input ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="days"
                           label="days"
                           form='add_form'/>

                    <input ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="time"
                           label="time"
                           form='add_form'/>
                  </div>
                </td>


                <td>
                          <div style={checkBox}>

                            <div style={input}>
                              <input type="checkbox"
                                      name="sunday"
                                      form='add_form'/>
                              Sunday
                            </div>

                            <div style={input}>
                              <input type="checkbox"
                                      name="monday"
                                      form='add_form'/>
                              Monday
                            </div>

                            <div style={input}>
                              <input type="checkbox"
                                      name="tuesday"
                                      form='add_form'/>
                              Tuesday
                             </div>

                            <div style={input}>
                              <input type="checkbox"
                                     name="wednesday"
                                     form='add_form'/>
                              Wednesday
                            </div>

                            <div style={input}>
                              <input type="checkbox"
                                     name="thursday"
                                     form='add_form'/>
                              Thursday
                            </div>

                            <div style={input}>
                              <input  type="checkbox"
                                      name="friday"
                                      form='add_form'/>
                              Friday
                            </div>

                            <div style={input}>
                              <input  type="checkbox"
                                      name="saturday"
                                      form='add_form'/>
                              Saturday
                            </div>
                          </div>
                </td>

                <td style={td}>
                  <div style={flexRow}>
                    <div className='label'>Address</div>
                    <input size='50'
                           ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="address1"
                           label="address1"
                           form='add_form'/>
                  </div>

                  <div style={flexRow}>
                    <div className='label'>City State Zip</div>

                    <input size='50'
                            ref={(ref)=>this.focus(ref)}
                           type="text"
                           name="address2"
                           label="address2"
                           form='add_form'
                    />

                  </div>

                  <div style={flexRow}>
                    <div className='label'>Phone Nmbr </div>

                  <input size='50'
                         ref={(ref)=>this.focus(ref)}
                         type="text"
                         name="phoneNo"
                         label="phoneNo"
                         form='add_form'/>

                  </div>

                </td>


              </tr>
              <tr>
                <td style={td}>Restrictions</td>
                <td style={td}>
                  <textarea
                          cols='40'
                          rows='4'
                          type='text'
                          name='type'
                          label='type'
                          form='add_form'/>
                </td>

              </tr>
              <tr>
                <td style={td}>Instructions</td>
                <td colSpan='3' style={td}>
                  <textarea
                              cols='110'
                              rows='4'
                              type='text'
                              name='instructions'
                              label='instructions'
                              form='add_form'/>
                </td>

              </tr>

            <tr>
              <td style={td}> <input type='submit'
                                     value='Submit'
                                     onClick={this.handleSubmit}
                                     form='add_form'/>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      )
    }
  }
