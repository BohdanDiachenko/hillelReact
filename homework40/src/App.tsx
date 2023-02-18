import { useState } from 'react'
import { useDispatch } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {addTodo} from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    if (text){
      dispatch(addTodo({text}));
    }
    setText('');
  };

  return (
    <div className="App">
      <TodoForm text={text} handleImput={setText} handleSubmit={addTask}/>
      <TodoList />
    </div>
  )
};

export default App









