import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            son: 1,
            title: 'React'
        }
    }

    render() {
        // var state = 1
        const plus = () => {
            console.log('plussss');
            if (this.state.son < 10) {
                this.setState({son: this.state.son + 1})   
            }
            // state = state + 1
            // console.log(state);
        }
        const minus = () => {
            console.log('minusss');
            if (this.state.son > 0) {
                this.setState({son: this.state.son - 1})                
            }
            // state = state - 1
            // console.log(state);
        }
        const getName = (e, a) => {
            // console.log(e.target.value, a);
            this.setState({title: e.target.value})
        }

        const selectLanguage = (e) => {
            console.log(e.target.value);
        }

        console.log(this);
        
        return (
            <div>
                <h1>Hello, {this.state.son}. {this.state.title}</h1>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <br />
                <input type='text' placeholder='Name' onChange={getName} ></input>
                {/* <input type='text' placeholder='Name' onChange={(e) => getName(e, 'aaaa')} ></input> */}
                <select onChange={selectLanguage}>
                    <option value={'Uz'}>Uz</option>
                    <option value={'Ru'}>Ru</option>
                    <option value={'En'}>En</option>
                </select>
            </div>
        )
    }
}

export default State