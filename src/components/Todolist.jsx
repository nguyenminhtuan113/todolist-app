import React from 'react'
import { Item } from './Item'

export const TodoList = ({ todos, setTodos }) => {

    return (
        <div>
            {todos && todos.length > 0 ? (
                todos?.map((item) => (<Item key={item.id} item={item} todos={todos} setTodos={setTodos} />))

            ) : (
                <p className='text-center'>Seems lonely in here, what are you up to?</p>
            )}
        </div>
    )
}
