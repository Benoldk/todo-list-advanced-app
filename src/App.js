import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoFormModal from './components/TodoFormModal'
import TodoList from './components/TodoList'

const TODOS_LOCAL_STORAGE_KEY = 'todos_local_storage_key';
function App() {
  const [isModalFormActive, setIsModalFormActive] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(TODOS_LOCAL_STORAGE_KEY)) {
      setTodos(JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY)));
    }
  }, [])

  const addTodo = todo => {
    setTodos([...todos, todo]);
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify([...todos, todo]));
  }

  return (
    <div className='App'>
      {isModalFormActive && <TodoFormModal setIsModalFormActive={setIsModalFormActive} addTodo={addTodo} />}
      <Header setIsModalFormActive={setIsModalFormActive} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;