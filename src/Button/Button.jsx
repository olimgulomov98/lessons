import React, { Component } from 'react';
import {Container} from './style'

class Button extends Component {
    render() {
        return (
            <Container 
                width={this.props.width}
                height={this.props.height}
                type={this.props.type}
                mt={this.props.mt}
                mr={this.props.mr}
                mb={this.props.mb}
                ml={this.props.ml}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </Container>
        );
    }
}

export default Button;