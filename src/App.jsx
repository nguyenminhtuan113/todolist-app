import './App.css';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { TodoHero } from './components/TodoHero';
import { TodoList } from './components/TodoList';
import { Form } from './components/Form';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  const [todos, setTodos] = useState([
    // { title: "some task", id: self.crypto.randomUUID(), is_completed: false },
    // { title: "task", id: self.crypto.randomUUID(), is_completed: true },
  ]);
  const todos_completed = todos.filter((todo) => todo.is_completed === true).length;
  const total_todos = todos.length;
  // const getlog = localStorage.getItem('loglevel');
  // console.log(getlog, 'getlog')
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  return (
    <>
      <Toaster />
      <div className="w-[700px] sm:w-[500px]  ">
        <div className='p-2 font-bold'><LibraryAddCheckIcon /> TODO</div>
        <div className='max-w-[400px] mx-auto sm:mx-auto '>
          <TodoHero todos_completed={todos_completed} total_todos={total_todos} />
          <Form todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>

      </div>
    </>
  )
}

export default App
