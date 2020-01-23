import React, {Component} from 'react'
import Person from './Person'

class People extends Component{
    constructor(){
        super()
        this.state ={

        }
    }
    render(){

        const {deletePerson, editPerson} = this.props
        const list = this.props.list.map((element, index) => {
            return <Person key= {index} person= {element} deletePerson={deletePerson} editPerson = {editPerson}/> //39 ci //52iii
        })
        return(
            <div>{list}</div>
        )
    }
}
export default People //31