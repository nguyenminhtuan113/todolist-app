import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import toast from 'react-hot-toast';

export const Form = ({ todos, setTodos }) => {
    const handleSubmit = (e) => {

        e.preventDefault();
        toast.success('Đã thêm mới 1 task !', {
            duration: 1000,
            position: 'top-center'
        })
        const value = e.target.todo.value;
        const newTodo = {
            id: self.crypto.randomUUID(), title: value, is_completed: false,

        }
        setTodos((prevTodos) => [
            ...prevTodos,
            newTodo,
        ])
        const updateTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem('todos', updateTodoList);
        e.target.reset();
    }
    return (
        <form className='my-5 flex gap-1 items-center justify-center' onSubmit={handleSubmit}>
            <input type="text" name='todo' className='bg-[#1F2937] w-full text-sm px-3 py-1 rounded-md' placeholder='Write your text task' />
            <button type='submit' className='hover:bg-slate-500 '>
                <AddBoxIcon fontSize='large' sx={{ color: '#88AB33' }} />
            </button>
        </form>
    )
}
