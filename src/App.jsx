import { useState } from 'react';


export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValues] = useState(''); 
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editValue, setEditValue] = useState(''); 

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() !== '') {
      const newTodo = { text: inputValue, completed: false }; 
      console.log('Adding new todo:', newTodo);  
      setTodos([...todos, newTodo]); 
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

  const handleEdit = (index) => { 
    const newText = prompt('Enter a todo:', todos[index].text); 
    if (newText !== null) { 
      const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, text: newText } : todo
      ); 
    setTodos(updatedTodos)
    }
  }


  const handleEditChange = (e) => { 
    setEditValue(e.target.value); 
  }

  const handleEditSubmit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, text: editValue } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditValue('');
  };

  return (
    <div className="App">
      <h1>To-Do's</h1>
      <form onSubmit={handleFormSubmit} className="todo-form">
        <input
          type="text"
          className="input"
          placeholder="Enter a todo"
          value={inputValue}
          onChange={(e) => setInputValues(e.target.value)}
          autoComplete="off"
        />
        <button type="submit" className="add-button">Add Todo</button>
      </form>
      <div className="todos">
        {todos.map((todo, index) => (
          <div key={index} className={`todo ${todo.completed ? 'completed' : ''}`}>
            {editingIndex === index ? (
              <div className="todo">
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleEditSubmit(index)} className="save-button">Save</button>
              </div>
            ) : (
              <div>
                <div className="todo-text" onClick={() => toggleToDoCompletion(index)}>
                  {todo.text}
                </div>
                <div className="todo-actions">
                  <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
                  <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
