import React from 'react'
import '../stylesheets/todo.css'

export default function Todo({ todo }) {
    return (
        <div className='todo'>
            <div className='todo-container'>
                <div className='title'>{todo.title}</div>
                <div className='description'>{todo.description}</div>
            </div>
            <div className='button-container'>
                <div className='edit-btn'><img src={require('../assets/edit-icon-64x64.png')} alt='edit button' /></div>
                <div className='delete-btn'><img src={require('../assets/delete-icon-64x64.png')} alt='delete button' /></div>
            </div>
        </div>
    )
}