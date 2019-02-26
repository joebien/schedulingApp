
const express = require('express')
const path = require('path');
const NodeGeocoder = require('node-geocoder');
const bodyParser = require('body-parser')
const app = express();

app.use( bodyParser.json() );

app.use(express.json());       // to support JSON-encoded bodies

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

const functions = require('firebase-functions');

const firebase = require("firebase/app");

require ('firebase/firestore');


const config = {
  apiKey: "AIzaSyB3CX-HTO5JjOJI0NIMB5ycOBjeRNVfsaA",
  authDomain: "schedule2-dc598.firebaseapp.com",
  databaseURL: "https://schedule2-dc598.firebaseio.com",
  projectId: "schedule2-dc598",
  storageBucket: "schedule2-dc598.appspot.com",
  messagingSenderId: "168082543022"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();

firestore.settings({timestampsInSnapshots: true});

const db = firebase.firestore();

const usersRef = db.collection('users')



//get day meetings
app.get('/meetings', (req, res)=> {

console.log('get day meetings')

  const id = 'activeDays.' + Object.keys(req.query)[0]


  const queriedDocs = []



  usersRef.where(id, "==", true)
          .get()
          .then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
              queriedDocs.push(doc.data())
            })
            return null;
          })
          .catch(error => {
            console.error(error);
            res.error(500);
          })
          .then(()=> {
            console.log('qdocs ', queriedDocs)
            res.json(queriedDocs)
            return null;
          })
          .catch(error => {
            console.error(error);
            res.error(500);
          });
  });


//get all meetings
app.get('/allmeetings', (req, res)=> {

console.log('get allmeetings')
  const listUsers = []

  usersRef.get().then((snapshot) => {



    //console.log('snapshot ',snapshot[0].data())

    snapshot.forEach((doc) => {

      listUsers.push(doc.data())
    })


    res.json(listUsers);
    return null
  }).catch(error => {
    console.error(error);
    res.error(500);
  })
})

//get one meeting
app.get('/oneMeeting', (req, res) =>{
  let document
  const id = Object.keys(req.query)[0]
  console.log('iddd ',req.query)

  usersRef.doc(id)
          .get()
          .then((doc)=>
          {if (doc.exists) {
            document = doc.data()
            res.json(document)

          }
          else {
            console.log("No such document!");
          }
            return null;
          }).catch(error => {
            console.error(error);
            res.error(500);
          });

});

//add new Meeting
app.post('/meetings', (req, res) => {
  console.log('add one meeting ', req)

  usersRef.doc(req.body.id)
          .set(req.body)
          .then(()=>
                  console.log("Document successfully written!"
                  )
          )
          .catch( (error)=> {
            console.error("Error writing document: ", error);
          })
})

//put edited meeting
app.put('/meetingEdit', (req, res)=> {

console.log('express app fired')
  const meeting = req.body

  usersRef.doc(meeting.id).set(meeting)

}  )


//get geocode from address
app.get('/geoCode',(req, res)=>{

  console.log('req ',req.query)
  let geocode = {}

  const options = {
    provider: 'google',
    httpAdapter: 'https',
    apiKey: 'AIzaSyDLrXS1u5G3NjV9gWFaJoSmpahyDiZ2zSI',
    formatter: null         // 'gpx', 'string', ...
  };

  const geocoder = NodeGeocoder(options);

  geocoder.geocode(req.query.address, (req, res)=> {
    try{ geocode.lat = res[0].latitude}
    catch(e){
      //next(err)
    }
    try{ geocode.lng = res[0].longitude }
    catch(e){ console.log('catch(e)', e) }

  }).then(()=>{
    console.log('geocode ',geocode)
    res.send(geocode)
    return null
  })
          .catch(error => {
            console.error(error);
            res.error(500);
          })

})


//delete Meeting
app.delete('/meetings/:id', (req, res)=> {
console.log('req.params ',req.params)
  usersRef.doc(req.params.id)
          .delete()
          .then()
          .catch((error)=> {
    console.error("Error removing document: ", error);
  })

})



const theport = process.env.PORT || 5010;

const server = app.listen(theport, ()=> {

  console.log("Started server at port", theport);

})

exports.app = functions.https.onRequest(app);
