// src/components/TaskList.jsx
import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { isToday, isThisWeek, parseISO } from "date-fns";
import PriorityBadge from "./PriorityBadge";
import FilterBar from "./FilterBar";

export default function TaskList() {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("All");
  const [customRange, setCustomRange] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const date = parseISO(task.dueDate);
    if (filter === "Today") return isToday(date);
    if (filter === "This Week") return isThisWeek(date);
    if (filter === "Custom" && customRange)
      return task.dueDate === customRange;
    return true; // All
  });

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} setCustomRange={setCustomRange} />
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks found</p>
      ) : (
        filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center border p-2 mb-2 rounded"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm">Due: {task.dueDate}</p>
            </div>
            <PriorityBadge priority={task.priority} />
          </div>
        ))
      )}
    </div>
  );
}
