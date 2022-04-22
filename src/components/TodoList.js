import React from 'react'
import Todo from './Todo'
import '../stylesheets/todo.css'

export default function TodoList({ todos }) {
    return (
        <>
            {(todos === null || todos.length === 0) &&
                <div className='todo-empty-list'><p>Empty</p></div>
            }
            {todos && todos.length > 0 &&
                <div className='todo-list'>
                    {todos.map(todo => {
                        return (<Todo key={todo.id} todo={todo} />)
                    })}
                </div>
            }
        </>
    )
}