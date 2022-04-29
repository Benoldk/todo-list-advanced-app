import React from 'react'
import '../App.css'

export default function AddButton({ setIsModalFormActive }) {
    return (
        <div>
            <button className='add-btn' onClick={() => setIsModalFormActive(true)}>
                <div className='add-text'>ADD</div>
                <div className='plus'><span>+</span></div>
            </button>
        </div>
    )
}