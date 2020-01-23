import React, {Component} from 'react'

class Createperson extends Component{
    constructor(){
        super()
        this.state= {
            name: '',
            age: '',
            notes: '',
            gender: ''

        } //41 c
    }
    handleChange = ({name, value}) => {
        this.setState({[name]: value}) //42

    }
    
    render(){
        const {name, age, notes, gender} = this.state //43
        const {submitPerson} = this.props; //45d
        return(
            <div>
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
                {/* 42 e */}
                <button
                onClick = {() => {
                    submitPerson({name, age, notes, gender})
                    this.setState({name: '', age: '', notes: '', gender: ''})
                }}
                >submit</button>
                {/* 45c */}
            </div>
            // 41b
        )
    }
}
export default Createperson //41a