import React, { useEffect, useRef, useState } from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import toast from 'react-hot-toast';
import { duration } from '@mui/material';
export const Item = ({ todos, item, setTodos }) => {
    const completeTodo = () => {

        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? { ...todo, is_completed: !todo.is_completed }
                    : todo)
        );
        // Update localStorage after marking todo as completed
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
    }
    //editing
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const handleEdit = () => {
        setEditing(true);
    }
    const handleInputSubmit = (e) => {
        e.preventDefault();
        // Update localStorage after editing todo
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(false);
    }
    const handleInputBlur = () => {
        // Update localStorage after editing todo
        const updatedTodos = JSON.stringify(todos);
        localStorage.setItem("todos", updatedTodos);
        setEditing(false);
    };
    const handleInputChange = (e) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                    ? { ...todo, title: e.target.value } : todo
            )
        );
    }
    const handleDelete = () => {
        toast.success('Xoá thành công !!!', {
            duration: 1000,
            position: 'top-center'
        })
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
        // Update localStorage after deleting todo
        const updatedTodos = JSON.stringify(
            todos.filter((todo) => todo.id !== item.id)
        );
        localStorage.setItem("todos", updatedTodos);
    };
    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
            //vi tri con tro cuoi van ban
            inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
            );
        }
    }, [editing]);


    return (



        <div id={item?.id} className='flex w-full justify-between items-center p-2 mb-5 border '>
            {editing ? (
                <form className='my-5 flex gap-1 items-center justify-center' onSubmit={handleInputSubmit}>

                    <input
                        ref={inputRef}
                        type="text"
                        name='edit-todo'
                        className='bg-[#1F2937] w-full text-sm px-3 py-1 rounded-md'
                        defaultValue={item?.title}
                        onBlur={handleInputBlur}
                        onChange={handleInputChange} />

                    <button type='submit' className='hover:bg-slate-500 '
                        onClick={() => {
                            toast.success('Cập nhật thành công !!!', {
                                duration: 1000,
                                position: 'top-center'
                            })

                            // Update localStorage after editing todo
                            const updatedTodos = JSON.stringify(todos);
                            localStorage.setItem("todos", updatedTodos);
                            setEditing(false);
                        }}>
                        <CheckBoxIcon fontSize='large' sx={{ color: '#88AB33' }} />
                    </button>

                </form>

            )
                : (
                    <>
                        <button className="text-[16px] w-[18px] h-[18px] overflow-hidden" onClick={completeTodo}>
                            <svg >
                                <circle cx="7.998" cy="7.998" fillRule="nonzero" r="5.998"
                                    className={item.is_completed ? 'fill-green-500' : 'fill-gray-300'} />
                            </svg>
                        </button >
                        <p className={`capitalize ${item.is_completed ? 'line-through' : ''}`}>{item.title}</p>
                        <div className='flex gap-2'>
                            <button onClick={handleEdit} type='button'><BorderColorIcon /></button>
                            <button onClick={handleDelete} type='button'><DeleteForeverIcon /></button>
                        </div>
                    </>
                )
            }




        </div >
    )
}
