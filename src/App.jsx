import { useState } from 'react'
import './App.css'
import React, { useState } from 'react';
import './App.css';
function App() {
  const [todos, settodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newitem = { completed: false, text: input };
      settodos([...todos, newitem]);
      setInput("");
    }
  };

  const handleitem = (idx) => {
    const newtodo = [...todos];
    newtodo[idx].completed = !newtodo[idx].completed;
    settodos(newtodo);
  };

  const handleDelete = (idx) => {
    const newtodo = [...todos];
    newtodo.splice(idx, 1);
    settodos(newtodo);
  };

  return (
    <div className="App">
      <h1>to do list</h1>

      <div className='continar'>
        <ul>
          {todos.map(({ text, completed }, idx) => {
            return (
              <div className='item' key={idx}>
                <li className={completed ? "done" : ""}
                  onClick={() => handleitem(idx)} >
                  {text}</li>
                <span className='x' onClick={() => handleDelete(idx)}>x</span>
              </div>
            )
          })}

        </ul>
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

    </div>
  );
}
export default App;

