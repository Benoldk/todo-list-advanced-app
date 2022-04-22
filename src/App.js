import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TodoFormModal from './components/TodoFormModal';
import TodoList from './components/TodoList';
// import ModalActiveProvider from './hooks/ModalActiveContext';

function App() {
  const [isModalFormActive, setIsModalFormActive] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  return (
    <div className='App'>
      {/* <ModalActiveProvider> */}
      <Header setIsModalFormActive={setIsModalFormActive} />
      {isModalFormActive && <TodoFormModal setIsModalFormActive={setIsModalFormActive} addTodo={addTodo} />}
      <TodoList todos={todos} />
      {/* </ModalActiveProvider> */}
    </div>
  );
}

export default App;