import React, {useContext} from 'react'
import { StudentsContext } from '../../context/Context'

export const Navbar = () => {
    const [state, setState] = useContext(StudentsContext)
  return (
    <div>
        <h4>Navbar Count: {state.length}</h4>
    </div>
  )
}
