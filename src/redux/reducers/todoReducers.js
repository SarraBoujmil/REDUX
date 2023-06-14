
import { ADD_TODO,EDIT_TODO,DELETE_TODO } from "../constants/TodoTypes"

const initialState=[]



export const todoReducers = (state=initialState,{type,payload} ) => {
  switch(type)
  {
    case ADD_TODO:
       // console.log("ADD")
        return [...state,payload]

    case EDIT_TODO:
        //console.log("EDIT")
        return state.map(el=>el.id==payload.id?payload:el)
    case DELETE_TODO:
        //console.log("DELETE")
        return state.filter(el=>el.id!=payload)
    


  }

}
