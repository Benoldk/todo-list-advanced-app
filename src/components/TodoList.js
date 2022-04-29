import React from 'react'
import Todo from './Todo'
import '../stylesheets/todo.css'

export default function TodoList({ todos, displayTodoModal, deleteTodo }) {
    return (
        <div className='todo-list-container'>
            {(todos === null || todos.length === 0) &&
                <div className='todo-empty-list'>
                    <p>Empty</p>
                </div>
            }
            {todos && todos.length > 0 &&
                <div className='todo-list' >
                    {todos.map(todo => {
                        return (<Todo key={todo.id} todo={todo}
                            displayTodoModal={displayTodoModal}
                            deleteTodo={deleteTodo} />)
                    })}
                </div>
            }
        </div>
    )
}