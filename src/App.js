import React, {Component} from 'react'
import axios from 'axios'
import People from './Components/People'
import Createperson from './Components/Createperson' //44


class App extends Component{
  constructor(){
    super()
    this.state = {
      people: [],
      peopleUrl: 'http://localhost:7219/api/people' //27c


    }

    this.deletePerson=this.deletePerson.bind(this) //40b


  }

  editPerson = (person) => {
    const {peopleUrl} =this.state
    axios.put(`${peopleUrl}/${person.id}`, person).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err))
  } //52



  componentDidMount(){
    const {peopleUrl} = this.state;
    axios.get(peopleUrl).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err)) //28

  }

  deletePerson(id){
    const {peopleUrl} = this.state
    axios.delete(`${peopleUrl}/${id}`).then(results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err)) //38
  }

  submitPerson = (person) => {
    const {peopleUrl} = this.state
    axios.post(peopleUrl, person).then( results => {
      this.setState({people: results.data})
    }).catch(err => console.log(err)) //45a

  }


  render(){
    const {people} = this.state //35a
    console.log(people)

    return(
      <div><People editPerson = {this.editPerson} list = {people} deletePerson = {this.deletePerson}/><Createperson submitPerson = {this.submitPerson}/></div> //35 i //39 ai //44 //45b //52ii
      
    )
  }
}
export default App
