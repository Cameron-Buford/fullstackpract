import React, {Component} from 'react'

class Person extends Component{
    constructor(){
        super()
        this.state = {
            edit: false,
            name: '',
            age: '',
            notes: '',
            gender: ''
            //50

        }
    }

    componentDidMount() {
        const {name, age, notes, gender} = this.props.person
        this.setState({name, age, notes, gender})
    } //53

    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //42

    } //49


    editToggle = () => {
        this.setState({edit: !this.state.edit})
    } //47


    render(){
        const {edit, name, age, notes, gender}= this.state; //46b
        const {person_id} = this.props.person; //53b
        const {deletePerson, editPerson} = this.props //39 di //52iv
        
        return(
            <div>
                {!edit ? <div> 
                    {/* 46i 46ii */}
                    <h1>{name}</h1>
                    <h1>{age}</h1>
                    <h1>{notes}</h1>
                    <h1>{gender}</h1>
                    <button onClick= {() => this.editToggle()}>Edit</button> 
                    {/* 47b */}
                    <button onClick = {() => deletePerson(person_id)}>Delete</button> 
                {/* 40  */}
                {/* 37 */}
            </div>//36
        : <div>
             <input name= 'name'
                value= {name}
                placeholder='enter name'
                onChange={(e) => this.handleChange(e.target)}
                ></input> 
                {/* 42c */}
                <input name= 'age'
                value= {age}
                placeholder= 'old as balls'
                onChange={(e) => this.handleChange(e.target)}
                ></input>
                {/* 42d */}
                <input name= 'notes'
                value= {notes}
                placeholder= 'notes'
                onChange= {(e) => this.handleChange(e.target)}
                ></input>
                <input name= 'gender'
                value= {gender}
                placeholder='gender'
                onChange= {(e) => this.handleChange(e.target)}
                ></input>
                <button onClick= {() => this.editToggle()}>Cancel</button> 
                <button onClick = {()=> editPerson({person_id, name, age, notes, gender})}></button>
                {/* 52v */}
                {/* 51 */}
            </div> }</div> //48
        // 46iii
        )
    }
}
export default Person //32