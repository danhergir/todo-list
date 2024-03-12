import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,    
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(state => !state)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder='Get done with course' value={newTodoValue} onChange={onChange}></textarea>
            <div className='TodoForm-buttonContainer'>
                <button 
                    className='TodoForm-button TodoForm-button--cancel' 
                    onClick={() => {
                        setOpenModal(state => !state)
                    }}>
                    Cancel</button>
                <button type='submit' className='TodoForm-button TodoForm-button--add'>Add</button>
            </div>
        </form>
    )
}

export { TodoForm };