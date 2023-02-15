import { useState } from 'react'
import { v4  } from 'uuid';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
type Todo = {
  title: string 
  id: number 
  isCompleted: boolean 
}[]

function App() {
  const [todos, setTodos] = useState<Todo>([]);
  const checkTodo = (id:number) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted
        } 
        return todo;
      })
    )   
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

  const addTodo = (text: string) => {
    const newTodo = {
      id:  v4(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </div>
  )
};

export default App
