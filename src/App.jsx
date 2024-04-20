// // import { useState } from 'react';

// // export default function App() {
// //   const [todos, setTodos] = useState([]);
// //   const [inputValue, setInputValues] = useState('');
// //   const [editingIndex, setEditingIndex] = useState(null);
// //   const [editValue, setEditValue] = useState('');

// //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     if (inputValue.trim() !== '') {
// //       const newTodo = { text: inputValue, completed: false };
// //       console.log('Adding new todo:', newTodo);
// //       setTodos([...todos, newTodo]);
// //       setInputValues('');
// //     }
// //   };

// //   const toggleToDoCompletion = (index) => {
// //     const updatedTodos = todos.map((todo, i) =>
// //       index === i ? { ...todo, completed: !todo.completed } : todo
// //     );
// //     setTodos(updatedTodos);
// //   };

// //   const deleteTodo = (index) => {
// //     const updatedTodos = todos.filter((todo, i) => index !== i);
// //     setTodos(updatedTodos);
// //   };

// //   const handleEdit = (index) => {
// //     const newText = prompt('Enter a todo:', todos[index].text);
// //     if (newText !== null) {
// //       const updatedTodos = todos.map((todo, i) =>
// //         index === i ? { ...todo, text: newText } : todo
// //       );
// //       setTodos(updatedTodos);
// //     }
// //   };

// //   const handleEditChange = (e) => {
// //     setEditValue(e.target.value);
// //   };

// //   const handleEditSubmit = (index) => {
// //     const updatedTodos = todos.map((todo, i) =>
// //       index === i ? { ...todo, text: editValue } : todo
// //     );
// //     setTodos(updatedTodos);
// //     setEditingIndex(null);
// //     setEditValue('');
// //   };

// //   return (
// //     <div className="App">
// //       <h1>To-Do's</h1>
// //       <form onSubmit={handleFormSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Enter a ToDo"
// //           value={inputValue}
// //           onChange={(e) => setInputValues(e.target.value)}
// //           autoComplete="off"
// //         />
// //         <button type="submit">Add ToDo</button>
// //       </form>
// //       <div className="todos">
// //         {todos.map((todo, index) => (
// //           <div key={index} className="todo">
// //             {editingIndex === index ? (
// //               <div className="todo">
// //                 <input
// //                   type="text"
// //                   value={editValue}
// //                   onChange={handleEditChange}
// //                 />
// //                 <button onClick={() => handleEditSubmit(index)}>Save</button>
// //                 <button onClick={() => setEditingIndex(null)}>Cancel</button>
// //               </div>
// //             ) : (
// //               <div className="flex justify-between items-center">
// //                 <div
// //                   className={`todo-text ${todo.completed ? 'line-through' : ''}`}
// //                   onClick={() => toggleToDoCompletion(index)}
// //                 >
// //                   {todo.text}
// //                 </div>
// //                 <div className="todo-actions">
// //                   <button onClick={() => deleteTodo(index)}>Delete</button>
// //                   <button onClick={() => handleEdit(index)}>Edit</button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from 'react';

// export default function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValues] = useState('');
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editValue, setEditValue] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim() !== '') {
//       const newTodo = { text: inputValue, completed: false };
//       console.log('Adding new todo:', newTodo);
//       setTodos([...todos, newTodo]);
//       setInputValues('');
//     }
//   };

//   const toggleToDoCompletion = (index) => {
//     const updatedTodos = todos.map((todo, i) =>
//       index === i ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((todo, i) => index !== i);
//     setTodos(updatedTodos);
//   };

//   const handleEdit = (index) => {
//     const newText = prompt('Enter a todo:', todos[index].text);
//     if (newText !== null) {
//       const updatedTodos = todos.map((todo, i) =>
//         index === i ? { ...todo, text: newText } : todo
//       );
//       setTodos(updatedTodos);
//     }
//   };

//   const handleEditChange = (e) => {
//     setEditValue(e.target.value);
//   };

//   const handleEditSubmit = (index) => {
//     const updatedTodos = todos.map((todo, i) =>
//       index === i ? { ...todo, text: editValue } : todo
//     );
//     setTodos(updatedTodos);
//     setEditingIndex(null);
//     setEditValue('');
//   };

//   return (
//     <div className="min-h-screen bg-purple-100 flex flex-col items-center py-12">
//       <h1 className="text-4xl font-bold text-purple-700 mb-8">To-Do's</h1>
//       <form
//         onSubmit={handleFormSubmit}
//         className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-8"
//       >
//         <input
//           type="text"
//           placeholder="Enter a ToDo"
//           value={inputValue}
//           onChange={(e) => setInputValues(e.target.value)}
//           autoComplete="off"
//           className="w-full rounded-lg py-2 px-4 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300"
//         />
//         <button
//           type="submit"
//           className="mt-4 w-full py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300"
//         >
//           Add ToDo
//         </button>
//       </form>
//       <div className="w-full max-w-md">
//         {todos.map((todo, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md p-4 mb-4 transition-transform duration-300 hover:-translate-y-1"
//           >
//             {editingIndex === index ? (
//               <div className="flex items-center">
//                 <input
//                   type="text"
//                   value={editValue}
//                   onChange={handleEditChange}
//                   className="w-full rounded-lg py-2 px-4 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300"
//                 />
//                 <button
//                   onClick={() => handleEditSubmit(index)}
//                   className="ml-2 py-2 px-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300"
//                 >
//                   Save
//                 </button>
//                 <button
//                   onClick={() => setEditingIndex(null)}
//                   className="ml-2 py-2 px-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <div className="flex justify-between items-center">
//                 <div
//                   className={`todo-text cursor-pointer ${
//                     todo.completed
//                       ? 'line-through text-gray-400'
//                       : 'text-purple-700'
//                   } transition-colors duration-300`}
//                   onClick={() => toggleToDoCompletion(index)}
//                 >
//                   {todo.text}
//                 </div>
//                 <div className="todo-actions flex">
//                   <button
//                     onClick={() => deleteTodo(index)}
//                     className="ml-2 py-1 px-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="ml-2 py-1 px-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


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
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => index !== i);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    const newText = prompt('Enter a todo:', todos[index].text);
    if (newText !== null) {
      const updatedTodos = todos.map((todo, i) =>
        index === i ? { ...todo, text: newText } : todo
      );
      setTodos(updatedTodos);
    }
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      index === i ? { ...todo, text: editValue } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditValue('');
  };

  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-purple-700 mb-8">To-Do's</h1>
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <input
          type="text"
          placeholder="Enter a ToDo"
          value={inputValue}
          onChange={(e) => setInputValues(e.target.value)}
          autoComplete="off"
          className="w-full rounded-lg py-2 px-4 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300"
        />
        <button
          type="submit"
          className="mt-4 w-full py-2 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Add ToDo
        </button>
      </form>
      <div className="w-full max-w-md">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 mb-4 transition-transform duration-300 hover:-translate-y-1 animate-fade-in"
          >
            {editingIndex === index ? (
              <div className="flex items-center">
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  className="w-full rounded-lg py-2 px-4 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300"
                />
                <button
                  onClick={() => handleEditSubmit(index)}
                  className="ml-2 py-2 px-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingIndex(null)}
                  className="ml-2 py-2 px-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div
                  className={`todo-text cursor-pointer ${
                    todo.completed
                      ? 'line-through text-gray-400'
                      : 'text-purple-700'
                  } transition-colors duration-300`}
                  onClick={() => toggleToDoCompletion(index)}
                >
                  {todo.text}
                </div>
                <div className="todo-actions flex">
                  <button
                    onClick={() => deleteTodo(index)}
                    className="ml-2 py-1 px-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors duration-300 animate-fade-out"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="ml-2 py-1 px-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}