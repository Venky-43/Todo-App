import React from "react";
import { useTasks } from "../context/TaskContext";
import PriorityBadge from "./PriorityBadge";

const TaskCard = ({ task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className="flex justify-between items-center border p-3 rounded-lg mb-2 shadow-sm">
      <div>
        <h3
          className={`font-semibold ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
        <PriorityBadge priority={task.priority} />
      </div>
      <div className="space-x-2">
        <button
          onClick={() => toggleTask(task.id)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

