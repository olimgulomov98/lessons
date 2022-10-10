import React, { Component } from 'react';

class LocalStorage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            obj: {id: 1, name: 'John', status: 'student'}
        }
    }
    render() {

        const plus = () => {
            localStorage.setItem('obj', JSON.stringify(this.state.obj))
            this.setState({count: this.state.count + 1})
        }

        const minus = () => {
            localStorage.setItem('count2', this.state.count)
            this.setState({count: this.state.count - 1})
        }

        const removeItemFromLocalStorage = () => {
            localStorage.removeItem('count')
        }

        const clearLocalStorage = () => {
            localStorage.clear();
        }

        return (
            <div>
                Local Storage
                <h1>Count: {localStorage.getItem('count')}</h1>
                <button onClick={minus}>-</button>
                <button onClick={plus}>+</button>
                <button onClick={removeItemFromLocalStorage}>remove from localStorage</button>
                <button onClick={clearLocalStorage}>Clear Local Storage</button>
            </div>
        );
    }
}

export default LocalStorage;