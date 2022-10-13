import { createContext, useState } from "react";

export const StudentsContext = createContext();

const Context = ({children}) => {
    const [state, setState] = useState([
        {id: 1, name: 'Ikromjon'},
        {id: 2, name: 'Asadbek'},
        {id: 3, name: 'Nodirbek'},
    ])
    return (
        <StudentsContext.Provider value={[state, setState]}>
            {children}
        </StudentsContext.Provider>
    )
}

export default Context