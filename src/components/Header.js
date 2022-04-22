import React from 'react'
import '../stylesheets/header.css'

export default function Header({ setIsModalFormActive }) {
    return (
        <div className='header'>
            <div className='title'><span>Todo List</span></div>
            <button className='add-btn' onClick={() => setIsModalFormActive(true)}>
                <div className='add-text'>ADD</div>
                <div className='plus'><span>+</span></div>
            </button>
        </div >
    )
}