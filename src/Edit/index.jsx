import React, { Component } from 'react';
import {data} from './data'
import {Block, Section} from './style';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: data,
            name: '',
            userName: ''
        }
    }
    render() {

        const editFunc = (id, name, userName) => {
            this.setState({
                fruits: this.state.fruits.map((value) => ({
                    id: value.id,
                    name: value.name,
                    userName: value.userName,
                    hidden: value.id === id ? true : false,
                }))
            })
            this.setState({
                name: name,
                userName: userName
            })
        }
        const hiddenFalse = (id) => {
            this.setState({
                fruits: this.state.fruits.map((value) => ({
                    id: value.id,
                    name: value.id === id ? this.state.name : value.name,
                    userName: value.id === id ? this.state.userName : value.userName,
                    hidden: false,
                })),
            })
        }

        return (
            
                        
                        <Block>
                            {
                                this.state.fruits.map((value) => (
                                    <Section>
                                        <div>
                                            <h1>Name: {value.hidden ? <input type={'text'} value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} /> : <span>{value.name}</span>}</h1>
                                        </div>
                                        <div>
                                            <h1>userName: {value.hidden ? <input type={'text'} value={this.state.userName} onChange={(e)=> this.setState({userName: e.target.value})} /> : <span>{value.userName}</span>}</h1>
                                        </div>
                                        <div>
                                            {
                                                value.hidden ? <button onClick={()=> hiddenFalse(value.id)}>Save</button> : <button onClick={()=> editFunc(value.id, value.name, value.userName)}>Edit</button>
                                            }
                                        </div>
                                    </Section>
                                ))
                            }
                        </Block>
        );
    }
}

export default Edit;