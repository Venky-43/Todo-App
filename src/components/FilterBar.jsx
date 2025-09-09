import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { isToday, isUpcoming } from "../utils/dateUtils";
import TaskCard from "./TaskCard";

const FilterBar = () => {
  const { tasks, addTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  // Add task handler
  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return alert("Please enter title and date");
    addTask(title, dueDate, priority);
    setTitle("");
    setDueDate("");
    setPriority("Low");
  };

  // Apply filters
  const filteredTasks = tasks.filter((task) => {
    if (filter === "today") return isToday(task.dueDate);
    if (filter === "upcoming") return isUpcoming(task.dueDate);
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      {/* Add Task Form */}
      <form onSubmit={handleAdd} className="mb-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button className="bg-green-500 text-white p-2 rounded">
          Add Task
        </button>
      </form>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilter("all")} className="px-3 py-1 bg-gray-300 rounded">All</button>
        <button onClick={() => setFilter("today")} className="px-3 py-1 bg-gray-300 rounded">Today</button>
        <button onClick={() => setFilter("upcoming")} className="px-3 py-1 bg-gray-300 rounded">Upcoming</button>
        <button onClick={() => setFilter("completed")} className="px-3 py-1 bg-gray-300 rounded">Completed</button>
      </div>

      {/* Render Tasks */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found.</p>
      ) : (
        filteredTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
};

export default FilterBar;
