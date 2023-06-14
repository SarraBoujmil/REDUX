import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ADD_TODO } from '../redux/constants/TodoTypes'
import { AddTodoAction } from '../redux/actions/todoActions'

const AddTodo = () => {

 const [input, setInput] = useState("")
 const handleInput=(e)=>{
    setInput(e.target.value)
 }
const dispatch= useDispatch()

  return (
    <div>
    <Form.Control size="lg" type="text" placeholder="Large text" onChange={handleInput}/>
    <Button onClick={()=>dispatch(AddTodoAction({id:Math.random(),text:input}))} >Add</Button>
   {/* <Button onClick={()=>dispatch(addTodo({id:Math.random(),text:input}))} >add</Button> */}
    </div>
  )
}

export default AddTodo