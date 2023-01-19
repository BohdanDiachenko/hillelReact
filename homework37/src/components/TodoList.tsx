import React from "react";
import Todo from "./Todo";
type TodosProps = {
    todos: {
        id: number
        title:string
        isCompleted: boolean
    }[]
    checkTodo: any
    deleteTodo: any
}

const TodoList = (props: TodosProps) => {   
    return (
        <div>
            {props.todos.map(todo => {              
                return <Todo 
                            key={todo.id} 
                            title={todo.title} 
                            checkTodo={props.checkTodo} 
                            id={todo.id}
                            isCompleted={todo.isCompleted}
                            deleteTodo={props.deleteTodo}/>
            })}
        </div>
    )
};
export default TodoList;