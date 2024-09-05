import React from 'react'

export const TodoHero = ({ todos_completed, total_todos }) => {
    return (
        <div className='flex gap-10 items-center justify-around border p-4 rounded-md'>
            <div>
                <h1 className='text-xl'>Task Done </h1>
                <p>Keep it up</p>
            </div>
            <div className='bg-[#88AB33] p-8 rounded-[50%]'>
                <p className='text-2xl font-light'>{todos_completed}/{total_todos}</p>
            </div>
        </div>
    )
}
