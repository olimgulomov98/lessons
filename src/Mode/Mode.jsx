import React, { Component } from 'react';
import Button from '../Button/Button';

import {Container, Navbar, Header} from './style'

import {ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.bg};
        color: ${(props) => props.cl};
    }
`

class Mode extends Component {
    
        state = {
            mode: false
        }
    
    render() {

        const onClick = () => {
            this.setState({mode: !this.state.mode})
            console.log(this.state.mode)
        }

        const theme = {
            cl: this.state.mode ? 'black' : 'white',
            bg: this.state.mode ? 'white' : 'black',
        }

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                
                <h1>Greenshop</h1>
                <button onClick={onClick}>{
                    this.state.mode ? 'Dark Mode' : 'Light Mode'
                }</button>
            </ThemeProvider>
        );
    }
}

export default Mode;