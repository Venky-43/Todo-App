import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      title,
      dueDate,
      priority,
    });
    setTitle("");
    setDueDate("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2"
      >
        <option>Critical</option>
        <option>High</option>
        <option>Medium</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}
