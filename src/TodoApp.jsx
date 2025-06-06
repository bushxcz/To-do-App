import { useState } from "react";
import "./TodoApp.css";
import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [ input, setInput] = useState("");

    const addTodo = (e) =>{

        e.preventDefault();
        if(input.trim()){

            setTodos([...todos, { id: uuidv4(), text: input , done: false}]);
            setInput("");
        }
    };

    const toggleTodo = (id) =>{

        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo
        ));
    };

    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (

        <div className="todo-container">
            <h1>🌸 To-Do List 🍄</h1>
            <form onSubmit={addTodo} className="todo-form">
                <input 
                type="text"
                value={input}
                placeholder="Add a task!"
                onChange={(e) => setInput(e.target.value)}
                className="todo-input"
                />

                <button type="submit" className="add-button">Add</button>
            </form>

            <ul className="todo-list">
                {todos.map(todo =>(

                    <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
                        <span onClick={() => toggleTodo(todo.id)}>
                            {todo.text}
                        </span>

                        <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                            ❌
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    );


};
