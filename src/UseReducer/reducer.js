import { mock } from "./mock"

export const reducer = (state, action) => {
    switch(action.type) {
        //delete
        case 'delete': 
        let res = state.data.filter((value) => value.id !== action.payload.userId)
            return {
                ...state, 
                data: res
            }
        
        // search
        case 'search': 
            let searchUser = mock.filter((value) => value[state.selected].toString().toLowerCase().includes(action.payload.valueEvent.toLowerCase()))
            return {
                ...state, 
                data: searchUser
            }

        // select
        case 'select': 
            return {
                ...state, 
                selected: action.payload.selectedOption
            }
        
        // edit
        case 'edit':
            return {
                ...state, 
                id: action.payload.userId, 
                name: action.payload.userName, 
                status: action.payload.userStatus
            }

        // name
        case 'name': 
            return {
                ...state, 
                name: action.payload.nameEvent 
            }
        
        case 'status': 
            return {
                ...state, 
                status: action.payload.statusEvent 
            }

        case 'save':
            let saveUser = state.data.map((value) => value.id === state.id ? {...value, name: state.name, status: state.status} : value)
            return {
                ...state, 
                data: saveUser, 
                id: null
            }
            
        // default
        default: return state.data

    }
}