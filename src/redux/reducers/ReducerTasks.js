import Globals from '../helpers/constants'

const initialState = {
    todos:[],
    error: "",
    addtodo:null,
    updatetodos:[],
    deletetodo:null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Globals.SAVE_TODO:
           
            return{ 
                ...state,
                todos: [...state.todos,...action.payload]
            }

            case Globals.ADD_TODO:
            
            return{ 
                ...state,
                addtodo: state.addtodo = action.payload
            }


            case Globals.UPDATE_TODO:
            return{ 
                ...state,
                updatetodos: [...state.updatetodos,action.payload]
            }

            case Globals.DELETE_TODO:
                return{ 
                    ...state,
                    deletetodo: state.deletetodo=action.payload
                }

            case Globals.ERRORTASK:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state    
    }    

}   