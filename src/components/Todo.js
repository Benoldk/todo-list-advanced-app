import React from 'react'
import '../stylesheets/todo.css'

export default function Todo({ todo }) {
    return (
        <div className='todo'>
            <div className='title'>{todo.title}</div>
            <div className='description'>{todo.description}</div>
        </div>
    )
}