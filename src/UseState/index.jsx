import React, {useState} from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count+1)
    }

    const minus = () => {
        setCount(count-1)
    }

  return (
    <div style={{flex: 1}}>
        <h1>UseState</h1>
        <h4>Count: { count }</h4>
        <button onClick={plus}>+</button>
        <button  onClick={minus}>-</button>
    </div>
  )
}

