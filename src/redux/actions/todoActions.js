
import{ADD_TODO,EDIT_TODO,DELETE_TODO} from '../constants/TodoTypes'

export const AddTodoAction=(payload)=>{
    
    return {type:ADD_TODO,
    payload}
}

export const EditToDO=(payload)=>{

    return{
        type:EDIT_TODO,
        payload
    }
}

export const DeleteTodo=(payload)=>{

    return{type:EDIT_TODO,
    payload}
}

