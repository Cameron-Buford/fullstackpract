require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

const peopleCtrl = require('./controllers/peopleController') //12a
const peopleUrl = '/api/people' //12a ii so that you dont mess up the url in the endpoints

app.use(cors()) //wouldnt use in actual project because of security
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db) //order of 'db' and db matters
    console.log('db running')
    app.listen(SERVER_PORT, () => console.log(`serve dog is crushin on ${SERVER_PORT}`))
}) .catch(err => console.log(err))



//ENDPOINTS      12b
app.get(peopleUrl, peopleCtrl.getPeople)
app.post(peopleUrl, peopleCtrl.postPeople)
app.put(`${peopleUrl}/:id`, peopleCtrl.putPeople)
app.delete(`${peopleUrl}/:id`, peopleCtrl.deletePeople)
