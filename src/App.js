import { useState } from 'react'
import ToDo from './components/ToDo'
import ToDoForm from './components/ToDoForm'

function App () {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  return (
    <div className='App'>
      <div className='app-wrapper'>
        <header>
          <h1>To do List: {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
