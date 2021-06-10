import Globals from '../helpers/constants'
import axios from 'axios'


export const addTodo = (task) => async(dispatch) => {    
    try {
        const response = await axios.post(Globals.API+`/tasks/newtask`,{task})
        dispatch({
            type: Globals.ADD_TODO,
            payload:response.data,
        })
       
    } catch (error) {
        dispatch({
            type: Globals.ERRORTASK,
            payload:error,
        })
    }
    
}


export const getTodos = () => async(dispatch) => {    
    try {
        const response = await axios.get(Globals.API+`/tasks/gettasks`)
        dispatch({
            type: Globals.SAVE_TODO,
            payload:response.data,
        })
    } catch (error) {
        console.log(error);
    }
    
}




export const updateTodos = (id,task) => async(dispatch) => {    
    try {
        const response = await axios.put(Globals.API+`/tasks/gettasks`,{id,task})
        dispatch({
            type: Globals.UPDATE_TODO,
            payload:response.data,
        })
    } catch (error) {
        console.log(error);
    }
    
}



export const deleteTodo = (id) => async(dispatch) => {    
    try {
        const response = await axios.delete(Globals.API+`/tasks/deltetask/${id}`)
        dispatch({
            type: Globals.DELETE_TODO,
            payload:response.data,
        })
    } catch (error) {
        console.log(error);
    }
    
}