import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.bg};
        color: ${(props) => props.theme.cl}
    }
`

class Theme extends Component {
    state = {
            light: false
        }
    render() {
        const theme = {
            bg: this.state.light ? 'white' : 'black',
            cl: this.state.light ? 'black' : 'white'
        }
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <h1>React</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, cupiditate?</p>

            </ThemeProvider>
        );
    }
}

export default Theme;