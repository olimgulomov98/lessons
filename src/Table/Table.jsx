import React, { Component } from 'react'
import './table.css'
import {data} from '../data.js'

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      subjects: data,
      search: '',
      select: 'id',
      name: ''
    }
  }

  render() {
    const onSearch = (e) => {
      const {value} = e.target;
      const res = data.filter((item) => item[this.state.select].toString().toLowerCase().includes(value.toLowerCase()) )
      this.setState({subjects: res})
    }
    
    const onSelect = (e) => {
      const {value} = e.target;
      this.setState({select: value})
    }

    const onEnter  = (e) => {
      const {value} = e.target;
      this.setState({name: value})
    }

    const onAdd = () => {
      const newUser = {
        id: this.state.subjects.length + 1,
        name: this.state.name
      }

      this.setState({
        subjects: [...this.state.subjects, newUser],
        name: ''
      })
    }

    const onDelete = (id) => {
      let res = this.state.subjects.filter((value) => value.id !== id)
      this.setState({subjects: res})
    }

    return (
      <div className='container'>

        
        <h3 className='title'>React JS</h3>
        <div className="input-wrapper">
          <input type="text" placeholder='Search...' className='search' onChange={onSearch} />
          <select onChange={onSelect} className='selection'>
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="data-wrapper">
          <table >
            <tbody>
              {
                this.state.subjects.length ? (
                  this.state.subjects.map(({id, name}) => {
                    return (
                      <tr>
                        <td className='data-id'>{id}</td>
                        <td className='data-name'>{name}</td>
                        <td className='data-btn'>
                          <button onClick={() => onDelete(id)}>delete</button>
                        </td>
                        <td className='data-btn'>
                          <button>edit</button>
                        </td>
                      </tr>
                    )
                  })
                ) : <h4>No Data</h4>
              }
            </tbody>
          </table>
        </div>
        <div className="add-wrapper">
          <input value={this.state.name} type="text" placeholder='Enter a title' className='search' onChange={onEnter} />
          <button className="add-data" onClick={onAdd}>Add</button>
        </div>
      </div>
    )
  }
}

export default Table