import { useState } from 'react'
import './App.css'

function Todo() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])


    const handleSubmit = (e) => {
      e.preventDefault();
      if(newTodo){
        setTodos([...todos, {text:newTodo, completed:false}])
        setNewTodo('')
      }
    
    }
    const handleDelete = (index) => {
      const todoslist  = [...todos];
      todoslist[index].completed = !todoslist[index].completed
      setTodos(todoslist)
    }

  return (
    <>
      <h1>Simple Todo LIst</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Add task'
          value = {newTodo}
          onChange={(e) => (setNewTodo(e.target.value))}
        />
        <button type='submit' >Add Task</button>
        
      </form>

      <h1>Your Tasks</h1>
      <ul>
          {todos.map((todo, index) => (
            <li key={index}>
            <span style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>

      
    </>
  )
}

export default Todo;


