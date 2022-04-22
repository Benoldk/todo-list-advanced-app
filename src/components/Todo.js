import React from 'react'

export default function Todo(todo) {
    return (
        <div className='todo'>
            <div className='title'>{todo.title}</div>
            <div className='description'>{todo.description}</div>
        </div>
    )
}