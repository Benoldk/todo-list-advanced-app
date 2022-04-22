import React, { useState } from 'react';
import { v5 as uuidv5 } from 'uuid';

export default function TodoFormModal({ setIsModalFormActive, addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        title: '',
        description: '',
        completed: false
    })

    const [titleInputStyle, setTitleInputStyle] = useState('title');
    const [descriptionInputStyle, descriptionTitleInputStyle] = useState('description');

    const onFormSubmit = e => {
        // prevent refreshing
        e.preventDefault();

        // form validation
        let hasError = false;
        if (todo.title.trim() === '' && !titleInputStyle.includes('error')) {
            setTitleInputStyle(`${titleInputStyle} error`);
            hasError = true;
        }

        if (todo.description.trim() === '' && !descriptionInputStyle.includes('error')) {
            descriptionTitleInputStyle(`${descriptionInputStyle} error`);
            hasError = true;
        }

        if (hasError) return;

        // add todo
        addTodo({ ...todo, id: uuidv5() });
        setTodo({ ...todo, title: '', description: '' })
        setIsModalFormActive(false);
    }

    const onTitleTextChanged = e => {
        setTodo({ ...todo, title: e.target.value });
    }

    const onDescriptionTextChanged = e => {
        setTodo({ ...todo, description: e.target.value });
    }

    return (
        <div className='modal-body'>
            <form className='todo-form-modal' onSubmit={onFormSubmit}>
                <div className='label-container'>
                    <label className='label'>Title</label>
                </div>
                <input type='text'
                    className={titleInputStyle}
                    defaultValue='Enter TODO title...'
                    value={todo.title}
                    onChange={onTitleTextChanged} />

                <div className='label-container'>
                    <label className='label'>Description</label>
                </div>
                <input type='text'
                    className={descriptionInputStyle}
                    defaultValue='Enter TODO description...'
                    value={todo.description}
                    onChange={onDescriptionTextChanged} />

                <button className='modal-add-btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}