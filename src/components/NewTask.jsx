import React from 'react'
import './App.css'
import { GiCancel } from "react-icons/gi"
import { FaCheck } from "react-icons/fa"

export const NewTask = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo
}) => {

  return (
    <li>
        <span onClick={() => handleCompleteTodo(todo.id)}>
            <label className={`check ${todo.done ? 'active' : ''}`}>
                <FaCheck />
            </label>
        </span>

        <button
            className='remove'
            onClick={() => handleDeleteTodo(todo.id)} >
            <GiCancel />
        </button>
    </li>
  )
}

export default NewTask;
