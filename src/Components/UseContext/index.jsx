import React, {useContext} from 'react'
import { StudentsContext } from '../../context/Context'

export const UseContext = () => {
    const [state, setState] = useContext(StudentsContext)

    const deleted = (id) => {
        let res = state.filter(value => value.id !== id)
        setState(res)
    }
  return (
    <div>
        <h4>UseContext</h4>
        {
            state.map(value =>(
                <div key={value.id}>
                    <p>{value.id} {value.name} <button onClick={() => deleted(value.id)}>delete</button></p>
                </div>
            ))
        }
    </div>
  )
}
