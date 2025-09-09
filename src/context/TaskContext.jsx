import React, { createContext, useContext, useState } from "react";

// Create Context
const TaskContext = createContext();

// Custom Hook for easy usage
export const useTasks = () => useContext(TaskContext);

// Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (title, dueDate, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      dueDate,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle complete/incomplete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
