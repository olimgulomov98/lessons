import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import  Child  from '../Child'

export const Parent = () => {
    console.log('parent')
    const [state, setState] = useState(0)

    // const name = useMemo(() => {
    //     return {name: 'Hi from Parent'}
    // }, [])

    const name = useCallback((parameter) => {
        return {name: `Hi from ${parameter}`}
    }, [])

  return (
    <div>
        <h1>Parent</h1>
        <h4>Count: {state}</h4>
        <button onClick={() => setState(state + 1)}>+</button>
        <button onClick={() => setState(state - 1)}>-</button>
        <Child name={name} />
    </div>
  )
}
