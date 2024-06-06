import React, { useState } from 'react'

function TodoInput({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="input" 
      />
    </form>
  )
}

export default TodoInput