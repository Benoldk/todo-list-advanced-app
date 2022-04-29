import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import '../stylesheets/todo.css'

export default function TodoFormModal({ setIsModalFormActive, addTodo, curTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        title: '',
        description: '',
        completed: false
    })

    useEffect(() => {
        if (curTodo !== null) {
            setTodo(curTodo);
        }
    }, [curTodo])

    const [titleInputStyle, setTitleInputStyle] = useState('title modal-input-border');
    const [descriptionInputStyle, setDescriptionTitleInputStyle] = useState('description modal-input-border');

    const addFormTodo = () => {
        // data validation
        let hasError = false;
        if (todo.title.trim() === '') {
            if (!titleInputStyle.includes('error')) {
                setTitleInputStyle(`${titleInputStyle.replace('modal-input-border', 'error')}`);
            }
            hasError = true;
        }
        else {
            if (titleInputStyle.includes('error')) {
                setTitleInputStyle(`${titleInputStyle.replace('error', 'modal-input-border')}`);
            }
        }

        if (todo.description.trim() === '') {
            if (!descriptionInputStyle.includes('error')) {
                setDescriptionTitleInputStyle(`${descriptionInputStyle.replace('modal-input-border', 'error')}`);
            }
            hasError = true;
        }
        else {
            if (descriptionInputStyle.includes('error')) {
                setDescriptionTitleInputStyle(`${descriptionInputStyle.replace('error', 'modal-input-border')}`);
            }
        }

        // check if error(s) found
        if (hasError) return;

        // add todo
        if (todo.id === null || todo.id.trim() === '')
            addTodo({ ...todo, id: uuid() });
        else
            addTodo(todo);

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
            <div className='todo-form-modal' >
                <div className='close-box' onClick={() => setIsModalFormActive(false)}>
                    <div>X</div>
                </div>
                <div className='label-container'>
                    <label className='label'>Title</label>
                </div>
                <input type='text'
                    className={titleInputStyle}
                    value={todo.title}
                    onChange={onTitleTextChanged} />

                <div className='label-container'>
                    <label className='label'>Description</label>
                </div>
                <textarea
                    className={descriptionInputStyle}
                    value={todo.description}
                    onChange={onDescriptionTextChanged} />

                <button className='modal-add-btn' onClick={addFormTodo}>Submit</button>
            </div>
        </div>
    )
}