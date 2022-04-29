import React from 'react'
import '../stylesheets/todo.css'

export default function Todo({ todo, displayTodoModal, deleteTodo }) {
    return (
        <div className='todo'>
            <div className='todo-container'>
                <div className='title'>{todo.title}</div>
                <div className='description'>{todo.description}</div>
            </div>
            <div className='button-container'>
                <div className='edit-btn' onClick={() => displayTodoModal(todo.id)}
                >
                    <img src={require('../assets/edit-icon-64x64.png')} alt='edit button' />
                </div>
                <div className='delete-btn' onClick={() => deleteTodo(todo.id)}
                >
                    <img src={require('../assets/delete-icon-64x64.png')} alt='delete button' />
                </div>
            </div>
        </div>
    )
}