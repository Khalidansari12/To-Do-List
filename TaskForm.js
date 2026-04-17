import React, { useState } from 'react';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const newTask = await res.json();
    setTasks(prev => [...prev, newTask]);
    setTitle('');
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task..." />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskForm;
