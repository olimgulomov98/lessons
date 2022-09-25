import React, { Component } from 'react';
import {data} from './data'

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: data,
            selected: {},
            name: ''
        }
    }
    render() {

        const onChange = (e) => {
            const {value, name} = e;
            this.setState({[name]: value})
        }
        
        const onEdit = (value) => {
            this.setState({selected: value})
        }

        const onSave = () => {
            this.setState({selected: {}})
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.fruits.map((value) => (
                                <tr key={value.id}>
                                    <th>{value.id}</th>
                                    <th>
                                        {
                                            this.state.selected.id === value.id ? <input name='name' onChange={onChange} value={this.state.selected.name} type="text" /> : value.name
                                        }
                                    </th>
                                    <th>
                                        
                                        {
                                            this.state.selected.id === value.id ? <button onClick={onSave}>Save</button> : <button onClick={() => onEdit(value)}>Edit</button>
                                        }
                                    </th>
                                </tr>
                        ))
                        }
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Edit;