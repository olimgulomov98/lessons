import React, {useReducer} from 'react'
import { mock} from './mock'
import { reducer } from './reducer'

export default function UseReducer() {
    
    const [state, dispatch] = useReducer(reducer, {
        data: localStorage.getItem('crud') ? JSON.parse(localStorage.getItem('crud')) : mock,
        selected: 'name',
        id: null,
        name: '',
        status: ''
    })

    localStorage.setItem('crud', JSON.stringify(state.data))
  return (
    <div style={{flex: 1}}>
        <h1>UseReducer</h1>
        <input type="text" placeholder='Search...' onChange={(e) => dispatch({type: 'search', payload: {valueEvent: e.target.value}})} />
        <select style={{marginLeft: '10px'}} onChange={(e)=> dispatch({type: 'select', payload: {selectedOption: e.target.value}})} >
            <option value="name">NAME</option>
            <option value="id">ID</option>
            <option value="status">STATUS</option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>STATUS</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.data.map((value) => {
                        return(
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{
                                    state.id === value.id 
                                    ?
                                    <input type='text' value={state.name} onChange={(e) => dispatch({type: 'name', payload: {nameEvent: e.target.value}})} />
                                    :
                                    value.name
                                }</td>
                                <td>{
                                    state.id === value.id 
                                    ?
                                    <input type='text' value={state.status} onChange={(e) => dispatch({type: 'status', payload: {statusEvent: e.target.value}})} />
                                    :
                                    value.status
                                    }</td>
                                <td>
                                    {
                                        state.id === value.id 
                                        ?
                                        <button onClick={() => dispatch({type: 'save'})}>save</button>
                                        :
                                        <button onClick={() => dispatch({type: 'edit', payload: {userId: value.id, userName: value.name, userStatus: value.status}})}>edit</button>
                                    }
                                    <button onClick={() => dispatch({type: 'delete', payload: {userId: value.id}})}>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}
