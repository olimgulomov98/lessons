import React, {Component} from "react";
import {data} from '../data'
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            student: data
        }
    }
    render() {
        const onChange = (e) => {
            console.log(e.target.value);
            const {value, name} = e.target;
            this.setState({[name]: value})
        }
        console.log(this.state.student);

        const onSearch = (e) => {
            const {value} = e.target;
            // this.setState({firstName: value})
            const res = data.filter(({id, name, status}) => status.toLowerCase().includes(value.toLowerCase()))
            this.setState({student: res})
        }

        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <h3>Surname: {this.state.surname}</h3>
                <input name="name" type="text" placeholder="Name" onChange={onChange} />
                <input name="surname" type="text" placeholder="Surname" onChange={onChange} />
                <hr />

                <h4>CRUD: C: create, R: read, U: update, D: delete</h4>
                <div className="container">
                    <input type="text" placeholder="Search..." onChange={onSearch} />
                    <h3>Search: {this.state.firstName}</h3>
                    <h3>Number of students: {this.state.student.length}</h3>

                    {
                        this.state.student.map(({id, name, status}) => {
                            return (
                                <ul className="students">
                                    <li className="student">{id}</li>
                                    <li className="student">{name}</li>
                                    <li className="student">{status}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Table

// const onNameChange = (e) => {
        //     const { value } = e.target;
        //     this.setState({name: value})
        // }

        // const onSurnameChange = (e) => {
        //     const { value } = e.target;
        //     this.setState({surname: value})
        // }

        // const onStatusChange = (e) => {
        //     const { value } = e.target;
        //     this.setState({status: value})
        // }