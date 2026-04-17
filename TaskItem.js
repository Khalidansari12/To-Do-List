import React from 'react';

function TaskItem({ task, setTasks }) {
  const toggleComplete = async () => {
    const res = await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !task.completed })
    });
    const updated = await res.json();
    setTasks(prev => prev.map(t => t._id === updated._id ? updated : t));
  };

  const deleteTask = async () => {
    await fetch(`http://localhost:5000/api/tasks/${task._id}`, { method: 'DELETE' });
    setTasks(prev => prev.filter(t => t._id !== task._id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      {task.title}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TaskItem;
