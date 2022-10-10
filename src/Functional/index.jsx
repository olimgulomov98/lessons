import React, {useState} from 'react';

const Functional = (props) => {
    const [state, setState] = useState({
        name: '',
        count: 0
    })
    const [name, setName] = useState('')
    const onChange = (e) => {
        const {value} = e.target;
        setState({...state, name: value})
    }

    console.log(useState(), 'usestate')
    
    const increment = () => {
        setState({...state, count: state.count + 1})
    }

    const decrement = () => {
        if(state.count > 0 ) {
            setState({...state, count: state.count - 1})
        }
    }
    return (
        <div style={{flex: 1}}>
            <h1>{props.title} Component</h1>
            <input type="text" value={state.name} onChange={onChange} />
            <p>Name: {state.name}</p>
            <p>Count: {state.count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Functional;
