import React from 'react';

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            count: 0,
        }
    }
    render() {
        const onChange = (e) => {
            const {value} = e.target;
            this.setState({name: value})
        }

        const increment = () => {
            this.setState({count: this.state.count + 1})
        }

        const decrement = () => {
            this.setState({count: this.state.count - 1})
        }
        return(
            <div style={{flex: 1}}>
                <h1>{this.props.title} Component</h1>
                <input type="text" value={this.state.value}  onChange={onChange} />
                <p>Name: {this.state.name}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        )
    }
}

export default Class;
