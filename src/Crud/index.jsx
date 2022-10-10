import React, { Component } from 'react';
import {Container, Title} from './style'

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: 'register',
        }
    }
    render() {

        return (
            <Container>
                <Title className='h1' cl={this.state.state === 'login' && this.state.state} onClick={() => this.setState({state: 'login'})}>Register</Title>
                <Title  cl={this.state.state} onClick={() => this.setState({state:'register'})}>Login</Title>
                {
                    this.state.state ? (
                        <div>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='password' />
                        </div>
                    ):(
                        <div>
                            <input type="text" placeholder='Username' />
                            <input type="text" placeholder='password' />
                        </div>
                    )
                }
                

            </Container>
        );
    }
}

export default Crud;