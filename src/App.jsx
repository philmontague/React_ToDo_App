import { useState } from 'react'


export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValues] = useState(''); 

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]); 
      setInputValues(''); 
    }
  }; 

  const toggleToDoCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      index === i ? { ...todo, completed: !todo.completed } : todo
    ); 
    setTodos(updatedTodos); 
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => index !== i); 
    setTodos(updatedTodos); 
  }

  return (
    <div className="App">
      <h1>To-Do's</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter a todo"
          value={inputValue}
          onChange={(e) => setInputValues(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleToDoCompletion(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

